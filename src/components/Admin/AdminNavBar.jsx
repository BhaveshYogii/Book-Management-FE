import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "/assets/website/logo.png";
import Darkmode from "../NavBar/Darkmode";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoutService from "../Service/LogoutService";

const AdminNavBar = (props) => {
  let session = document.cookie.match(/session_key=([^;]*)/);

  const DropdownLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Requests",
      link: "/admin/requests",
    },
    {
      name: "Users",
      link: "/admin/users",
    },
    {
      name: "Books",
      link: "/admin/books",
    },
    {
      name: "Logout",
      link: "#",
    },
  ];

  const handleUserDropdown = (data) => {
    if (!session) {
      props.setAuthenticate(false);
      window.location.reload();
    }
    if (data.name == "Logout") {
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
              Admin Dashboard
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <Darkmode />
            </div>
            <ul className="items-center gap-2 hidden sm:flex">
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
                      to={"/admin/requests"}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      Requests
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/admin/users"}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      <div className="flex justify-center items-center gap-1">
                        Users
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                      to={"/admin/books"}
                    >
                      <div className="flex justify-center items-center gap-1">
                        Books
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                <span></span>
              )}
              {/* dropdown section  */}
            </ul>

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
              <div>
                <button className="from-primary to-secondary px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300">
                <a href="/login">Log In</a>
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminNavBar;
