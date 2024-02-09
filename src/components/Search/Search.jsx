import React, { useState, useEffect } from "react";
import BestBook from "../BestBooks/BestBook";
const Search = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("All Books");
  const [key, setKey] = useState("BookId");
  const [order, setOrder] = useState("AESC");
  const [limit, setLimit] = useState(-1);
  const [isSearch, setSearch] = useState(false);
  const [BooksData, setBooksData] = useState([]);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch(true);
    const searchTerm = event.target.elements.search.value;
    const formData = new FormData();
    formData.append("searchTerm", searchTerm);
    try {
      const response = await fetch("http://127.0.0.1:8000/searchbook/", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setBooksData(data);
      } else {
        console.error("Error:");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderBooks = (title, key, order,limit) => {
    setSearch(false);
    setTitle(title);
    setKey(key);
    setOrder(order);
    setLimit(limit);
  };

  useEffect(() => {}, [title]);

  return (
    <div className=" mx-3 px-3 md:mx-20 mt-5 md:px-10 py-10  justify-center items-center">
      <div className="flex flex-col-reverse  md:flex-row justify-center items-center  ">
        <div className="relative me-5 ">
          <button
            id="dropdown-button"
            className="flex-shrink-0 z-10  inline-flex items-center py-4  px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={toggleDropdown}
          >
            All categories
            <svg
              className="w-2.5 h-3.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`absolute top-full left-0 z-20 ${
              isOpen ? "" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-44`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(e) =>
                    renderBooks("All Books", "BookId", "AESC",-1)
                  }
                >
                  All Books
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(e) =>
                    renderBooks("Top 4 Books", "SoldQuantity", "DESC",4)
                  }
                >
                  Top Books
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(e) =>
                    renderBooks("Latest 4 Books", "PublishYear", "DESC",4)
                  }
                >
                  Latest Books
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(e) =>
                    renderBooks("4 Most Reviewed Books", "TotalReviews", "DESC",4)
                  }
                >
                  Most Reviewed Books
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={(e) =>
                    renderBooks("4 Most Rated Books", "OverallRating", "DESC",4)
                  }
                >
                  Most Rated Books
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex-grow  my-3">
          <form onSubmit={handleSubmit}>
            <div className="flex border-l p-0 justify-center items-center ">
              <input
                type="search"
                id="search-dropdown"
                name="search"
                className="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Which book are you looking for ?"
                required
              />
              <button
                type="submit"
                className=" top-0 end-0 p-4 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-7 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <BestBook
        isAuthenticate={props.isAuthenticate}
        setAuthenticate={props.setAuthenticate}
        title={title}
        isSearch={isSearch}
        keyfield={key}
        order={order}
        limit={limit}
        BooksData={BooksData}
        setBooksData={setBooksData}
      />
    </div>
  );
};

export default Search;
