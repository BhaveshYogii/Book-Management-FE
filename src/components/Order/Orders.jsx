import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../NavBar/Navbar";
import OrderItems from "./OrderItems";
import { useLocation } from "react-router-dom";
import "./Order.css";
const Order = () => {
  const [orders, setOrders] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);
  const isAuthenticate = useLocation().state.isAuthenticate;
  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
      navigate("/");
    }
    try {
      let session_key = session[1];
      axios
        .post("http://127.0.0.1:8000/getorderelements/", {
          session_key: session_key,
        })
        .then((res) => {
          setOrders(res.data.Data);
        });
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }, []);
  return (
    <>
      <Navbar isAuthenticate={isAuthenticate}/>
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
    </>
  );
};
export default Order;







