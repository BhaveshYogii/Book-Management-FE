import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import Items from "./Items";
const BooksData = [
    {
      "BookId": 1,
      "Title": "The Jungle Book",
      "Author": "author1",
      "Genre": "genre1",
      "Price": 10,
      "PublishYear": "2021",
      "Image": "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW%7C2.jpg",
      "Description": "description1",
      "AvailQuantity": 5,
      "SoldQuantity": 2,
      "Language": "English",
      "OverallRating": 70,
      "TotalReviews": 8
    },
    {
      "BookId": 2,
      "Title": "Sherlock Homes",
      "Author": "author2",
      "Genre": "genre2",
      "Price": 15,
      "PublishYear": "2019",
      "Image": "https://cdn.chec.io/merchants/28663/assets/L2Cj334oBGjdbHmK%7C1.jpg",
      "Description": "description2",
      "AvailQuantity": 8,
      "SoldQuantity": 4,
      "Language": "Spanish",
      "OverallRating": 85,
      "TotalReviews": 12
    },
    {
      "BookId": 3,
      "Title": "Treasure Island",
      "Author": "author3",
      "Genre": "genre3",
      "Price": 20,
      "PublishYear": "2020",
      "Image": "https://cdn.chec.io/merchants/28663/assets/cqpteRf6VzYXJeLC%7C71+f+GXLk4L.jpg",
      "Description": "description3",
      "AvailQuantity": 3,
      "SoldQuantity": 1,
      "Language": "French",
      "OverallRating": 60,
      "TotalReviews": 5
    },
    {
        "BookId": 4,
        "Title": "book2",
        "Author": "author2",
        "Genre": "genre2",
        "Price": 15,
        "PublishYear": "2019",
        "Image": "https://cdn.chec.io/merchants/28663/assets/L2Cj334oBGjdbHmK%7C1.jpg",
        "Description": "description2",
        "AvailQuantity": 8,
        "SoldQuantity": 4,
        "Language": "Spanish",
        "OverallRating": 85,
        "TotalReviews": 12
      },
      {
        "BookId": 5,
        "Title": "book3",
        "Author": "author3",
        "Genre": "genre3",
        "Price": 20,
        "PublishYear": "2020",
        "Image": "https://cdn.chec.io/merchants/28663/assets/cqpteRf6VzYXJeLC%7C71+f+GXLk4L.jpg",
        "Description": "description3",
        "AvailQuantity": 3,
        "SoldQuantity": 1,
        "Language": "French",
        "OverallRating": 60,
        "TotalReviews": 5
      },
      {
        "BookId": 6,
        "Title": "The Jungle Book",
        "Author": "author1",
        "Genre": "genre1",
        "Price": 10,
        "PublishYear": "2021",
        "Image": "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW%7C2.jpg",
        "Description": "description1",
        "AvailQuantity": 5,
        "SoldQuantity": 2,
        "Language": "English",
        "OverallRating": 70,
        "TotalReviews": 8
      },
  ];

const Cart = () => {
  const [items, setItems] = useState(BooksData);
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 dark:bg-gray-900 dark:text-black">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {items.map((book) => (
              <Items key={book.BookId} {...book} />
            ))}
            <a
              href="#"
              className="flex font-semibold text-[#1182C5] text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-[1182c5] w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10 dark:bg-gray-100">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-sm uppercase">Shipping</span>
              <span className="font-semibold text-sm">$0</span>
            </div>
            {/* <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div> */}
            {/* <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                onClick={() => toast.success("Success")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
export default Cart;
