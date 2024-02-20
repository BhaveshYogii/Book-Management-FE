import React, { useState, useEffect } from "react";
import AdminLayoutHoc from "../../layout/Admin.layout.jsx";
import { useNavigate } from "react-router-dom";
import AdminGetUsers from "../Service/AdminGetUsers";

const UserData = (props) => {
  const [usersData, setUsersData] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);
  const navigate = useNavigate();
  useEffect(() => {
    if (session == null) {
      navigate("/");
    } else{
     AdminGetUsers(session, setUsersData);
    }
  }, []);


  return (
    <>
      <h1 className="text-center my-6 text-4xl font-bold">Users</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData &&
              usersData.map((data,idx) => (
                <tr key={idx} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.UserId}
                  </th>
                  <td className="px-6 py-4">
                    {data.FirstName + " " + data.LastName}
                  </td>
                  <td className="px-6 py-4">{data.Email}</td>
                  <td className="px-6 py-4">{data.PhoneNo}</td>
                  <td className="px-6 py-4">{data.Role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminLayoutHoc(UserData);
