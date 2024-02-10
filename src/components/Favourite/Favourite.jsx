import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import AddToCartService from "../Service/AddToCartService";
import GetListElementsService from "../Service/GetListElementsService";
import DeleteFromList from "../Service/DeleteFromList";
import DefaultLayoutHoc from "../../layout/Default.layout";

const Favourite = (props) => {

  const [booksData, setBooksData] = useState([]);
  const [listData, setListData] = useState("");
  let session = document.cookie.match(/session_key=([^;]*)/);
  const navigate = useNavigate();

  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
      navigate('/');
    }
    GetListElementsService(session,setBooksData,setListData);
  }, []);

  const routeChange = (idx, book) => {
    // console.log('Navigating to:', `/my_book/${idx}`,book);
    navigate(`/my_book/${idx}`, {
      state: {
        book: book,
        isAuthenticate: isAuthenticate,
      },
    });
  };


  const addToCart = (BookId, Quantity) => {
    if (session == null) {
      toast.error("Log in First and try again.");
      props.setAuthenticate(false);
    } else {
      AddToCartService(session,BookId,Quantity);
    }
  };

  const handleDeleteItem = (book) => {
    DeleteFromList(session,book);
  };

  return (
    <div>
      {booksData && booksData.length == 0 ? (
        <>
          <div
            className="flex justify-center items-center"
            style={{ minHeight: "85vh" }}
          >
            <h1 style={{ fontSize: "30px", fontFamily: "Poppins" }}>
              Your Wishlist is Empty !
            </h1>
          </div>
        </>
      ) : (
        <div className="mt-8 mx-8">
          <div className=" grid grid-cols-1 sm:grid-cols-3 place-items-start place-justify-center gap-10 gap-y-16 lg:grid-cols-4">
            {booksData &&
              booksData.map((data) => (
                <div
                  className="space-y-3 fav-icon-outer card p-5 flex justify-center items-center flex-col w-full"
                  key={data.BookObj.BookId}
                >
                  <img
                    src={data.BookObj.Image}
                    alt=""
                    className="h-[200px] object-cover rounded-md cursor-pointer "
                    onClick={() => {
                      routeChange(data.BookObj.BookId, data.BookObj);
                    }}
                  />
                  <div className="Title-div">
                    <h2 className="font-semibold text-center">
                      {" "}
                      {data.BookObj.Title}
                    </h2>
                  </div>
                  <p className=" text-sm text-gray-700 dark:text-gray-400">
                    {data.BookObj.Author}
                  </p>
                  <div className="font-semibold text-md">
                    {" "}
                    Price : <FaRupeeSign className="inline-block" />
                    {data.BookObj.Price}
                  </div>
                  <div className="flex justify-center w-full items-center gap-5 px-5">
                    <button className="flex justify-center sm:text-md bg-gradient-to-r rounded from-primary to-secondary text-white px-5 py-2  rounded-sm items-center gap-3 hover:scale-105 duration-300">
                      <span>
                        <FaCartShopping
                          className="w-5 h-5"
                          onClick={(e) => {
                            addToCart(data.BookObj.BookId, 1);
                          }}
                        />
                      </span>
                    </button>
                    <button className="flex justify-center sm:text-md bg-gradient-to-r rounded bg-red-600 text-white px-5 py-1.5 rounded-sm items-center gap-3 hover:scale-105 duration-300">
                      <span>
                        <MdDelete
                          className="w-5 h-6"
                          onClick={(e) => {
                            handleDeleteItem(data.BookObj);
                          }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
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
export default DefaultLayoutHoc(Favourite);
