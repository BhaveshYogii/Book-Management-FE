import React, { useState, useEffect } from "react";
import AdminLayoutHoc from "../../layout/Admin.layout.jsx";
import { useNavigate } from "react-router-dom";
import AdminGetRequests from "../Service/AdminGetRequests";
import StatusRow from "./StatusRow";
import SellerRegisterService from "../Service/SellerRegisterService";
import { ToastContainer } from "react-toastify";

const RequestTable = (props) => {
  const [RequestData, setRequestData] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (!session) {
      navigate("/");
    } else {
      AdminGetRequests(session, setRequestData);
    }
  }, []);

  const handleSellerRegister = (sellerId) => {
    if (session == null) {
      navigate("/");
    } else SellerRegisterService(session, sellerId);
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
            {RequestData &&
              RequestData.map((data, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data.RequestId}
                  </th>
                  <td className="px-6 py-4">
                    {data.SellerObj.UserObj.FirstName +
                      " " +
                      data.SellerObj.UserObj.LastName}
                  </td>
                  <td className="px-6 py-4">{data.SellerObj.Company}</td>
                  <td className="px-6 py-4">
                    {data.SellerObj.CompanyLocation}
                  </td>
                  <td className="px-6 py-4">
                    <StatusRow
                      status={data.Status}
                      requestId={data.RequestId}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="flex justify-center sm:text-md bg-gradient-to-r  from-primary to-secondary text-white px-5 py-1.5 rounded-sm items-center gap-3 hover:scale-105 duration-300"
                      onClick={(e) =>
                        handleSellerRegister(data.SellerObj.SellerId)
                      }
                    >
                      <span>Save</span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default AdminLayoutHoc(RequestTable);
