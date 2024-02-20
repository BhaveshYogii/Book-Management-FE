import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginf from "../Service/LoginService";
import DefaultLayoutHoc from "src/layout/Default.layout";

const Login = (props) => {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin((prevData) => ({
      ...login,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      loginf(login)
        .then((res) => {
          toast.success(res.message);
          document.cookie = `session_key=${res.session_key}`;
          setlogin({
            Email: "",
            Password: "",
          });
          navigate("/");
        })
        .catch((error) => {
		console.log(error);
          if (error.response) {
            if (error.response.data.error)
              toast.error(error.response.data.error);
            //   toast.error(message);
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
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  const password_show_hide = () => {
    var x = document.getElementById("Password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("hidden");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  };
  return (
    <>
      <div
        className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-white dark:bg-gray-900 dark:text-white duration-200"
        style={{ paddingTop: "0px" }}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto sm:min-w-[350px]">
              <div>
                <h1 className="text-2xl font-semibold dark:text-black flex justify-center items-center">
                  Login
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="Email"
                      value={login.Email}
                      onChange={handleChange}
                      name="Email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="Email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative w-full">
                    <input
                      autoComplete="off"
                      id="Password"
                      value={login.Password}
                      onChange={handleChange}
                      name="Password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="Password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    <div className="d-flex absolute right-0 top-2.5 justify-content-center">
                      <span className="pe-2" onClick={password_show_hide}>
                        <i className="fa fa-eye" id="show_eye"></i>
                        <i
                          className="fa fa-solid fa-eye-slash hidden"
                          id="hide_eye"
                        ></i>
                      </span>
                    </div>
                  </div>
                  <div className="relative text-center top-4">
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5 dark:text-black text-center">
                <p>
                  New Customer ?{" "}
                  <NavLink
                    to="/signup"
                    style={{ color: "#2663E9"}}
                  >
                    Register
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default DefaultLayoutHoc(Login);
