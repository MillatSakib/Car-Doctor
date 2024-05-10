const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5175"],
    credentials: true,
}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Doctor is running");

})






const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.lm9a1gh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const serviceCollection = client.db('carDoctor').collection('services')
        const bookingCollection = client.db('carDoctor').collection("bookingCollection")

        //auth related api


        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.Access_Token_Secret, { expiresIn: '1h' })
            res.cookie('token', token, {
                httpOnly: true,
                secure: false,  //If it is https then you have to set securre : ture
                sameSite: 'none'
            }).send({ success: true });

        })


        //service related api


        app.get("/services", async (req, res) => {
            const cursor = serviceCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get("/service/:id", async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) }
            const options = {
                projection: {
                    title: 1,
                    price: 1,
                    service_id: 1
                },
            }

            const result = await serviceCollection.findOne(query, options);
            res.send(result)
            console.log(result);
        })


        app.post("/bookings", async (req, res) => {
            const booking = req.body;
            const result = await bookingCollection.insertOne(booking);

            res.send(result);
        })

        app.get('/bookings', async (req, res) => {

            let query = {};
            // res.send(req.query.email)
            if (req.query?.email) {
                query = { email: req.query.email }
                const result = await bookingCollection.find(query).toArray();
                res.send(result);
            }
        })

    } finally {

    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log("Car Doctor are running...");
})