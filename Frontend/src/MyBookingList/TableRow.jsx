import React from "react";

const TableRow = ({ singleData }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{singleData.name}</div>
            </div>
          </div>
        </td>
        <td>
          {singleData.price}
          <br />
        </td>
        <td>{singleData.date}</td>
        <th>
          <button className="btn btn-ghost btn-xs bg-error text-base-300">
            Pending..
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
