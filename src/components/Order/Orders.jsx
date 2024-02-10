import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import OrderItems from "./OrderItems";
import { useLocation } from "react-router-dom";
import "./Order.css";
import GetOrderElementsService from "../Service/GetOrderElementsService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayoutHoc from "../../layout/Default.layout";

const Order = (props) => {
  const [orders, setOrders] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);

  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
    }
    GetOrderElementsService(session,setOrders);
  }, []);
  return (
    <>
      <div style={{ minHeight: "95vh" }}>
        <h1 className="text-center text-4xl mt-5 font-semibold">Your Orders</h1>
        <div className="py-14 px-4 md:px-16 2xl:px-20 2xl:container 2xl:mx-auto dark:bg-gray-900 pt-5">
          {orders &&
            orders.map((order) => (
              <div key={order.OrderId}>
                <OrderItems order={order} />
              </div>
            ))}
        </div>
      </div>
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
    </>
  );
};
export default DefaultLayoutHoc(Order);
