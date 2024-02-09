import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRupeeSign } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
// import required modules
import { Pagination } from "swiper/modules";
import BookCard from "../BookCards/BookCard";
import axios from "axios";
import "./BestBook.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

const BestBook = (props) => {
  const navigate = useNavigate();
  let session = document.cookie.match(/session_key=([^;]*)/);

  useEffect(() => {
    if (session == null) {
      props.setAuthenticate(false);
      navigate("/");
    }
    try {
      axios
        .post("http://127.0.0.1:8000/getbooks/", {
          Key: props.keyfield,
          Order: props.order,
          Limit: props.limit,
        })
        .then((res) => {
          props.setBooksData(res.data.list);
        });
    } catch (error) {
      // console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }, [props.title]);

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

  const addToList = (BookId) => {
    if (session == null) {
      props.setAuthenticate(false);
      toast.error("Log in First and try again.");
      navigate("/");
    } else {
      let session_key = session[1];
      try {
        axios
          .post("http://127.0.0.1:8000/addtolist/", {
            session_key: session_key,
            BookObj: BookId,
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
          {/* <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from bg-primary to-secondary">
            Best Books
          </p> */}
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
        {/* <div className="my-16 px-4 lg:px-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-full"
          >
            {BooksData.map((book) => (
              <SwiperSlide key={book.BookId}>
                <Link to="/">
                  <div>
                    <img
                      src={book.Image}
                      alt=""
                      className="h-[260px] w-[240px] object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <div>
                      <h3>{book.Title}</h3>
                      <p>{book.Author}</p>
                    </div>
                    <div>
                      <FaRupeeSign className="inline-block" />
                      {book.Price}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
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
