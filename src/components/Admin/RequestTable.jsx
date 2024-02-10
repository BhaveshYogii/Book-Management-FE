import React, { useState } from "react";
import { Select } from "flowbite-react";
import AdminLayoutHoc from "../../layout/Admin.layout";

const RequestTable = (props) => {
  const option = ["Accepted", "Pending", "Decline"];

  const [Status, setStatus] = useState(option[0]);
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  return (
    <>
      <h1 className="text-center my-6 text-4xl font-bold">Seller Requests</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Request ID
              </th>
              <th scope="col" className="px-6 py-3">
                Seller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Company Location
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <Select
                  id="status"
                  name="status"
                  className="w-full rounded"
                  value={Status}
                  onChange={handleStatus}
                >
                  {option.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </td>
              <td className="px-6 py-4">
                <button className="flex justify-center sm:text-md bg-gradient-to-r  from-primary to-secondary text-white px-5 py-1.5 rounded-sm items-center gap-3 hover:scale-105 duration-300">
                  <span>Save</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminLayoutHoc(RequestTable);
