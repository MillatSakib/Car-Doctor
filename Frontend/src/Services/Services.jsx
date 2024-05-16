import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import axios from "axios";
const Services = () => {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/services",
        {
          email: "millatsakib01@gmail.com",
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => setFakeData(data.data));
  }, []);

  return (
    <div>
      <h2>Service</h2>
      <h3>Our Service Area</h3>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {fakeData.map((data, index) => {
          return <ServicesCard data={data} key={index}></ServicesCard>;
        })}
      </div>
    </div>
  );
};

export default Services;
