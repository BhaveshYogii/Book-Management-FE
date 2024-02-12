import React, { useEffect, useState } from "react";
import SellerNavBar from "./SellerNavbar";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SellerLayoutHoc from "../../layout/Seller.layout";
import SellerGetBooksService from "../Service/SellerGetBooksService";
import SellerDeleteBook from "../Service/SellerDeleteBook";
import { ToastContainer } from "react-toastify";

const ManageBook = (props) => {
  const [BookData, setBookData] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);
  const navigate = useNavigate();
  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
      navigate("/");
    } else {
      SellerGetBooksService(session, setBookData);
    }
  }, []);

  const handleEditClick = (book) => {
    if (session == null) {
      toast.error("Log in First and try again.");
      props.setAuthenticate(false);
    } else {
      navigate("/seller/edit-book", { state: { book } });
    }
  };
  const addToCart = (BookId, Quantity) => {
    if (session == null) {
      toast.error("Log in First and try again.");
      props.setAuthenticate(false);
    } else {
      AddToCartService(session, BookId, Quantity);
    }
  };

  const routeChange = (idx, book) => {
    // console.log('Navigating to:', `/my_book/${idx}`,book);
    navigate(`/my_book/${idx}`, {
      state: {
        book: book,
        isAuthenticate: isAuthenticate,
      },
    });
  };

  const handleDeleteItem = (book) => {
    if (session == null) {
      toast.error("Log in First and try again.");
      props.setAuthenticate(false);
    } else {
      SellerDeleteBook(session, book);
    }
  };

  return (
    <>
      <h1 className="text-center my-6 text-4xl font-bold">Manage Books</h1>
      <div className="mt-8 mx-8">
        <div className=" grid grid-cols-1 sm:grid-cols-3 place-items-start place-justify-center gap-10 gap-y-16 lg:grid-cols-4">
          {BookData &&
            BookData.map((data) => (
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
                <div className="flex justify-center gap-6 items-center w-[100px]">
                  <button
                    onClick={() => {
                      handleEditClick(data);
                    }}
                    className="bg-gradient-to-r w-full from-primary to-secondary text-white px-4 py-2 rounded-md  flex items-center gap-3 hover:scale-105 duration-300"
                  >
                    Edit
                  </button>

                  <button
                    onClick={(e) => {
                      handleDeleteItem(data);
                    }}
                    className="bg-red-400 w-full  from-primary to-secondary text-white px-4 py-2 rounded-md  flex items-center gap-3 hover:scale-105 duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
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

export default SellerLayoutHoc(ManageBook);
