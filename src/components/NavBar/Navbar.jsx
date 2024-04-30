import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "/assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LogoutService from "../Service/LogoutService";
import GetRoleService from "../Service/GetRoleService";

const Navbar = (props) => {
  const [sellerRequestTitle, setRequestTitle] = useState("Want to be Seller ?");
  const [sellerRequestLink, setRequestLink] = useState("/seller-request");
  const navigate = useNavigate();

  const DropdownLinks = [
    {
      name: "Your Profile",
      link: "/profile",
    },
    {
      name: "Your Orders",
      link: "/orders",
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
      name: sellerRequestTitle,
      link: sellerRequestLink,
    },
    {
      name: "Logout",
      link: "#",
    },
  ];

  useEffect(() => {
    if (props.seller == true) {
      setRequestTitle("Seller Dashboard");
      setRequestLink("/seller/dashboard/upload-book");
    }
    if(props.admin==true){
      setRequestTitle("Admin Dashboard");
      setRequestLink("/admin/requests");
    }
  }, [props.seller, props.admin]);

  const handleRedirectWithDelay = (link) => {
    setTimeout(() => {
      navigate(link);
    }, 1500);
  };

  const handleUserDropdown = (data) => {
    if (data.name == "Logout") {
      let session = document.cookie.match(/session_key=([^;]*)/);

      const handleLogout = async () => {
        await LogoutService(session, props);
        handleRedirectWithDelay("/");
      };

      handleLogout();
    }
  };

  return (
    <div className="shadow-lg bg white dark:bg-gray-900 dark:text-white duration-200">
      <div
        className="container py-3 sm:py-0"
        style={{ paddingLeft: "0px", paddingRight: "0px" }}
      >
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Darkmode />
            </div>
            <ul className="items-center gap-4 hidden sm:flex">
              <li>
                <Link
                  to={"/"}
                  className="inline-block py-4 px-4 hover:text-primary duration-200"
                >
                  Home
                </Link>
              </li>
              {props.isAuthenticate ? (
                <>
                  <li>
                    <Link
                      to={"/cart"}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      <div className="flex justify-center items-center gap-1">
                        Cart <FaCartShopping />{" "}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                      to={"/list"}
                    >
                      <div className="flex justify-center items-center gap-1">
                        Fav <FaHeart />{" "}
                      </div>
                    </Link>
                  </li>
                  {!props.admin && props.seller ? (
                    <li>
                      <a
                        className="inline-block py-4 px-4 hover:text-primary duration-200"
                        href="/seller/dashboard/upload-book"
                      >
                        <div className="flex justify-center items-center gap-1">
                          Seller{" "}
                        </div>
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                  {props.admin && !props.seller ? (
                    <li>
                      <a
                        className="inline-block py-4 px-4 hover:text-primary duration-200"
                        href="/admin/requests"
                      >
                        <div className="flex justify-center items-center gap-1">
                          Admin{" "}
                        </div>
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <span></span>
              )}
              {/* dropdown section  */}
            </ul>
            {props.isAuthenticate ? (
              <span></span>
            ) : (
              <button className="from-primary to-secondary px-4 py-2 rounded-full  hover:text-primary flex items-center gap-3 hover:scale-105 duration-300">
                <a href="/login">Log In</a>
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
                          onClick={(e) => handleUserDropdown(data)}
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
