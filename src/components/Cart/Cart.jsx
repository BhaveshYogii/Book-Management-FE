import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";
import DefaultLayoutHoc from "../../layout/Default.layout";
import GetCartElementsService from "../Service/GetCartElementsService";

const Cart = (props) => {
  const [booksData, setBooksData] = useState([]);
  const [cartData, setCartData] = useState("");
  let session = document.cookie.match(/session_key=([^;]*)/);
  const [sum, setSum] = useState(0);


  useEffect(() => {
    GetCartElementsService(session,setBooksData,setCartData);
  }, [booksData]);

  useEffect(() => {
    let tempSum = 0;
    booksData && booksData.forEach((book) => {
      tempSum += book.BookObj.Price * book.ElementQuantity;
    });
    setSum(tempSum);
  }, [booksData]);

  
  const handleCheckOut = () => {
    if (session == null || !isAuthenticate) {
      props.setAuthenticate(false);
    }
    PlaceOrderService(session);
  };

  return (
    <>
      <div>
        {booksData && booksData.length == 0 ? (
          <>
          <div className="flex justify-center items-center" style={{minHeight:"85vh"}}>
            <h1 style={{fontSize:"30px", fontFamily:"Poppins"}}>Your Cart is Empty !</h1>
          </div>
          </>
        ) : (
          <div className="h-full bg-gray-100 dark:text-white dark:bg-gray-900 pt-20">
            <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {booksData &&
                  booksData.map((book) => (
                    <Items key={book.BookObj.BookId} {...book} />
                  ))}
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 dark:text-black">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">{sum} INR</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">0 INR</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">{sum} INR</p>
                  </div>
                </div>
                <button
                  className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                  onClick={handleCheckOut}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
        )}
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
export default DefaultLayoutHoc(Cart);
