import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const CheckOut = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.firstName.value + " " + form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const description = form.description.value;
    let date = new Date();
    const data = {
      name,
      phone,
      email,
      description,
      date,
    };

    fetch("https://cardoctor.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => console.log(resData));
  };

  return (
    <div>
      <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
        Checkout: {data.title}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 my-4 justify-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="firstName"
              className="grow"
              placeholder="First Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="lastName"
              className="grow"
              placeholder="Last Name"
            />
          </label>
        </div>
        <div className="flex gap-4 my-4 justify-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="number"
              name="phone"
              className="grow"
              placeholder="Phone Number"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Email"
              defaultValue={user.email}
              disabled
            />
          </label>
        </div>
        <div className="flex justify-center my-4">
          <textarea
            name="description"
            placeholder="Bio"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            className="btn btn-primary px-10"
            value="Checkout"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
