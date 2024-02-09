import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


const Favourite = () => {
  const [booksData, setBooksData] = useState([]);
  const [listData, setListData] = useState("");
  const isAuthenticate = useLocation().state.isAuthenticate;
  let session = document.cookie.match(/session_key=([^;]*)/);
  const navigate = useNavigate();
  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
      navigate("/");
    }
    try {
      let session_key = session[1];
      axios
        .post("http://127.0.0.1:8000/getwishlistelements/", {
          session_key: session_key,
        })
        .then((res) => {
          setBooksData(res.data.BookData);
          setListData(res.data.ListData);
        });
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
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
  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const addToCart = (BookId, Quantity) => {
    if (session == null) {
      props.setAuthenticate(false);
      toast.error("Log in First and try again.");
      navigate("/");
    } else {
      try {
        let session_key = session[1];
        axios
          .post("http://127.0.0.1:8000/addtocart/", {
            session_key: session_key,
            BookObj: BookId,
            TotalQuantity: Quantity,
          })
          .then((res) => {
            if (res.data.message) {
              toast.success(res.data.message);
            }
            if (res.data.error) {
              toast.error(res.data.error);
            }
          })
          .catch((error) => {
            if (error.response) {
              let message = error.response.data;
              if (message.error) toast.error(message.error);
            } else if (error.request) {
              console.error(
                "No response received from the server:",
                error.request
              );
              toast.error("No response received from the server");
            } else {
              console.error("Error during request setup:", error.message);
              toast.error("An error occurred during the request");
            }
          });
      } catch (error) {
        console.error("Error during adding to cart:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  const handleDeleteItem = (book) => {
    try {
      let session_key = session[1];
      axios
        .delete("http://127.0.0.1:8000/deletefromlist/", {
          data: {
            session_key: session_key,
            BookObj: book.BookId,
          },
        })
        .then((res) => {
          if (res.data.message) {
            toast.success(res.data.message);
            handleReloadWithDelay();
          }
          if (res.data.error) {
            toast.error(res.data.error);
          }
        })
        .catch((error) => {
          if (error.response) {
            let message = error.response.data;
            if (message.error) toast.error(message.error);
          } else if (error.request) {
            console.error(
              "No response received from the server:",
              error.request
            );
          } else {
            console.error("Error during request setup:", error.message);
          }
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <Navbar isAuthenticate={isAuthenticate} />
      <h1 className="text-4xl font-semibold text-center mt-8">Your Wishlist</h1>
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
                          addToCart(data.BookObj.BookId,1);
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
export default Favourite;
