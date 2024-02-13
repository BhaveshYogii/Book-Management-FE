import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import AdminLayoutHoc from "../../layout/Admin.layout";
import { useNavigate } from "react-router-dom";

import AdminGetBooks from "../Service/AdminGetBooks";
const BookData = [
  {
    BookId: 1,
    Title: "The Jungle Book",
    Author: "author1",
    Genre: "genre1",
    Price: 10,
    PublishYear: "2021",
    Image:
      "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW%7C2.jpg",
    Description: "description1",
    AvailQuantity: 5,
    SoldQuantity: 2,
    Language: "English",
    OverallRating: 70,
    TotalReviews: 8,
  },
  {
    BookId: 2,
    Title: "Sherlock Homes",
    Author: "author2",
    Genre: "genre2",
    Price: 15,
    PublishYear: "2019",
    Image:
      "https://cdn.chec.io/merchants/28663/assets/L2Cj334oBGjdbHmK%7C1.jpg",
    Description: "description2",
    AvailQuantity: 8,
    SoldQuantity: 4,
    Language: "Spanish",
    OverallRating: 85,
    TotalReviews: 12,
  },
  {
    BookId: 3,
    Title: "Treasure Island",
    Author: "author3",
    Genre: "genre3",
    Price: 20,
    PublishYear: "2020",
    Image:
      "https://cdn.chec.io/merchants/28663/assets/cqpteRf6VzYXJeLC%7C71+f+GXLk4L.jpg",
    Description: "description3",
    AvailQuantity: 3,
    SoldQuantity: 1,
    Language: "French",
    OverallRating: 60,
    TotalReviews: 5,
  },
  {
    BookId: 4,
    Title: "book2",
    Author: "author2",
    Genre: "genre2",
    Price: 15,
    PublishYear: "2019",
    Image:
      "https://cdn.chec.io/merchants/28663/assets/L2Cj334oBGjdbHmK%7C1.jpg",
    Description: "description2",
    AvailQuantity: 8,
    SoldQuantity: 4,
    Language: "Spanish",
    OverallRating: 85,
    TotalReviews: 12,
  },
  {
    BookId: 5,
    Title: "book3",
    Author: "author3",
    Genre: "genre3",
    Price: 20,
    PublishYear: "2020",
    Image:
      "https://cdn.chec.io/merchants/28663/assets/cqpteRf6VzYXJeLC%7C71+f+GXLk4L.jpg",
    Description: "description3",
    AvailQuantity: 3,
    SoldQuantity: 1,
    Language: "French",
    OverallRating: 60,
    TotalReviews: 5,
  },
  {
    BookId: 6,
    Title: "The Jungle Book",
    Author: "author1",
    Genre: "genre1",
    Price: 10,
    PublishYear: "2021",
    Image:
      "https://cdn.chec.io/merchants/28663/assets/cvLwYNXyje5f45bW%7C2.jpg",
    Description: "description1",
    AvailQuantity: 5,
    SoldQuantity: 2,
    Language: "English",
    OverallRating: 70,
    TotalReviews: 8,
  },
];

const BooksData = (props) => {
  const [BookData, setBookData] = useState([]);
  let session = document.cookie.match(/session_key=([^;]*)/);
  const navigate = useNavigate();
  useEffect(() => {
    if (session == null) {
      navigate("/");
    } else {
      AdminGetBooks(session, setBookData);
    }
  }, []);

  return (
    <>
      <h1 className="text-center my-6 text-4xl font-bold">Books</h1>
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
                  className="h-[200px] object-cover rounded-md  hover:scale-105 transition-transform duration-300"
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
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AdminLayoutHoc(BooksData);
