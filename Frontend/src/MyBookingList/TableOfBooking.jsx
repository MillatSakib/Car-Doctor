import React, { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import { AuthContext } from "../AuthProvider";

const TableOfBooking = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cardoctor.vercel.app/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Rent</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((singleData, index) => (
              <TableRow singleData={singleData} key={index}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOfBooking;
