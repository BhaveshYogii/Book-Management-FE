import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Hero/Home";
import SignUp from "./components/SignUp/SignUp";
import BookInfo from "./components/BookInfo/BookInfo";
import Cart from "./components/Cart/Cart";
import SellerSignup from "./components/SellerSignUp/SellerSignup";
import UploadBooks from "./components/SellerDashboard/UploadBooks";
import Dashboard from "./components/SellerDashboard/SellerNavbar";
import "font-awesome/css/font-awesome.css";
import Order from "./components/Order/Orders";
import Favourite from "./components/Favourite/Favourite";
import RequestTable from "./components/Admin/RequestTable";
import UserData from "./components/Admin/UserData";
import BooksData from "./components/Admin/BooksData";
import ManageBook from "./components/SellerDashboard/ManageBook";
import EditBookForm from "./components/SellerDashboard/EditBookForm";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easeing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen">
      <BrowserRouter>
        <Routes>
          {<Route exact path="/" element={<Home />} />}
          {<Route exact path="/login" element={<Login />} />}
          {<Route exact path="/signup" element={<SignUp />} />}
          {<Route exact path="/my_book/:idx" element={<BookInfo />} />}
          {<Route exact path="/cart" element={<Cart />} />}
          {<Route exact path="/seller-request" element={<SellerSignup />} />}
          {
            <Route
              exact
              path="/seller/dashboard/upload-book"
              element={<UploadBooks />}
            />
          }
          {<Route exact path="/orders" element={<Order />} />}
          {<Route exact path="/list" element={<Favourite />} />}
          {<Route exact path="/admin/requests" element={<RequestTable />} />}
          {<Route exact path="/admin/users" element={<UserData />} />}
          {<Route exact path="/admin/books" element={<BooksData />} />}
          {<Route exact path="/seller/manage-book" element={<ManageBook />} />}
          {<Route exact path="/seller/edit-book" element={<EditBookForm />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
