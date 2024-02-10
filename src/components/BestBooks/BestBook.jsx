import React, { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./BestBook.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToCartService from "../Service/AddToCartService";
import GetBooksService from "../Service/GetBooksService";

const BestBook = (props) => {
  const navigate = useNavigate();
  let session = document.cookie.match(/session_key=([^;]*)/);

  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
      navigate("/");
    }
    GetBooksService(props);
  }, [props.title]);

  const addToCart = (BookId, Quantity) => {
    if (session == null) {
      props.setAuthenticate(false);
      toast.error("Log in First and try again.");
      navigate("/");
    } else {
      AddToCartService(session,BookId,Quantity);
    }
  };


  const routeChange = (idx, book) => {
    // console.log('Navigating to:', `/my_book/${idx}`,book);
    navigate(`/my_book/${idx}`, {
      state: {
        book: book,
        isAuthenticate: props.isAuthenticate,
      },
    });
  };

  return (
    <div className="py-10">
      <div className="container placeholder-gray-100">
        {/* header */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          {props.isSearch ? (
            <h1 className="text-3xl font-bold">Your Search results</h1>
          ) : (
            <h1 className="text-3xl font-bold">{props.title}</h1>
          )}

          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adip Eos, fugiat numquam
            aliquam molesti sdam nemo a sed odio quasi magni?{" "}
          </p>
        </div>
        {/* Card  */}
        <div>
          <div className=" grid grid-cols-1 sm:grid-cols-3 place-items-start place-justify-center gap-10 gap-y-16 lg:grid-cols-4">
            {props.BooksData &&
              props.BooksData.map((data) => (
                <div
                  className="space-y-3 fav-icon-outer card p-5 flex justify-center items-center flex-col w-full"
                  key={data.BookId}
                >
                  <img
                    src={data.Image}
                    alt=""
                    className="h-[200px] object-cover rounded-md cursor-pointer "
                    onClick={() => {
                      routeChange(data.BookId, data);
                    }}
                  />
                  <div className="Title-div">
                    <h2 className="font-semibold text-center"> {data.Title}</h2>
                  </div>
                  <p className=" text-sm text-gray-700 dark:text-gray-400">
                    {data.Author}
                  </p>
                  <div className="font-semibold text-md">
                    {" "}
                    Price : <FaRupeeSign className="inline-block" />
                    {data.Price}
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="bg-gradient-to-r w-full from-primary to-secondary text-white px-4 py-2 w-[170px] rounded-sm flex items-center gap-3 hover:scale-105 duration-300"
                      onClick={(e) => addToCart(data.BookId, 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
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
  );
};

export default BestBook;
