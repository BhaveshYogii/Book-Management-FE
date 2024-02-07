import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "/assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { FaHeart } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
// const DropdownLinks = [
//   {
//     name: "Trending Books",
//     link: "/#",
//   },
//   {
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     name: "Authors",
//     link: "/#",
//   },
//   {
//     name: "Best Seller",
//     link: "/#services",
//   },
// ];
const DropdownLinks = [
  {
    name: "Your Profile",
    link: "/profile",
  },
  {
    name: "Your Orders",
    link: "/order",
  },
  {
    name: "Wishlist",
    link: "/list",
  },
  {
    name: "Cart",
    link: "/cart",
  },
  {
    name: "Want to be Seller ?",
    link: "/seller-request",
  },
  {
    name: "Logout",
    link: "#",
  },
];


const Navbar = (props) => {

  const navigate=useNavigate();

  const handleUserDropdown= (data)=>{
    if(data.name=="Logout"){
      let session_key = document.cookie.match(/session_key=([^;]*)/)[1];
      let temp=session_key;
      try {
        axios.post('http://127.0.0.1:8000/logout/',{
            session_key: temp,
        }).then((res)=>{
            document.cookie = `session_key=${session_key}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;`;
            toast.success('Logged out successfully!');
            navigate('/');
        });
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        // console.error("Error during login:", error);
      }
    }
  }

  return (
    <div className="shadow-lg bg white dark:bg-gray-900 dark:text-white duration-200">
      <div
        className="container py-3 sm:py-0"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Darkmode />
            </div>
            <ul className="items-center gap-4 hidden sm:flex">
                <li >
                  <a
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                {props.isAuthenticate ? (
                <>
                <li >
                  <a
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                    href="/cart"
                  >
                    <div className="flex justify-center items-center gap-1">Cart <FaCartShopping/> </div>
                  </a>
                </li>
                <li >
                  <a
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                    href="#"
                  >
                    <div className="flex justify-center items-center gap-1">Fav <FaHeart/> </div>
                  </a>
                </li>
                </>):
                <span></span>
              }
              {/* dropdown section  */}
            </ul>
            {props.isAuthenticate ? (
              <span></span>
            ) : (
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
                {/* Order */}
                <a href="/login">Log In</a>
                {/* <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' /> */}
              </button>
            )}
            {props.isAuthenticate ? (
              <div className="group relative cursor-pointer ml-3">
                <span>
                  <FaRegCircleUser className="text-3xl transition duration-300" />
                </span>
                {/* {dropdown links sections} */}
                <div className="absolute -right-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                  <ul>
                    {DropdownLinks.map((data, index) => (
                      <li key={index}>
                        <Link
                          to={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          onClick={(e)=>handleUserDropdown(data)}
                          state={{
                            isAuthenticate:props.isAuthenticate,
                          }}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;