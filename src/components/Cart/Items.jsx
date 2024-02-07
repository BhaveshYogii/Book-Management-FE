import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { FaRupeeSign } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Items = (props) => {
let session = document.cookie.match(/session_key=([^;]*)/);
  const [count, setCount] = useState(props.ElementQuantity);

  useEffect(() => {
    try {
      let session_key = session[1];
      axios
        .post("http://127.0.0.1:8000/updatecart/", {
          session_key: session_key,
          "BookId":props.BookObj.BookId,
          "new_quantity":count,
        })
        .then((res) => {
        });
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }, [count]);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    window.location.reload();
  };
  const increment = () => {
    setCount(count + 1);
    window.location.reload();
  };

  // const handleDeleteItem=()=>{
  // }

  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={props.BookObj.Image}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">
              {props.BookObj.Title}
            </h2>
            <p className="mt-1 text-md text-gray-700">{props.BookObj.Author}</p>
          </div>
          <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 dark:text-black">
            <div className="flex items-center border-gray-100">
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={decrement}
              >
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={count}
                onChange={(e)=>{}}
                min="1"
              />
              <span
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={increment}
              >
                {" "}
                +{" "}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">
                {props.BookObj.Price}
                <FaRupeeSign className="inline-block" />
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold">
              Total : {props.BookObj.Price * count}
              <FaRupeeSign className="inline-block" />
            </p>
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
      </div>
    </>
  );
};
export default Items;
