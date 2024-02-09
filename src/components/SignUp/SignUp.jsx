import { React, useState } from "react";
import Navbar from "../NavBar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../Service/SignupService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const handleRedirectWithDelay = (link) => {
    setTimeout(() => {
      navigate(link);
    }, 2500);
  };
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    PhoneNo: "",
    Password: "",
  });
  const [errors, setErrors] = useState({
    Email: "",
    PhoneNo: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
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
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const PasswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{5,}$/;

    let newErrors = {};
    const requiredFields = [
      "FirstName",
      "LastName",
      "Email",
      "Address",
      "PhoneNo",
      "Password",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors = { ...newErrors, [field]: "This field is required." };
      }
    });

    // Display "All fields are required" toast only if there is at least one empty field
    if (requiredFields.some((field) => !formData[field])) {
      toast.error("All fields are required.");
    }

    if (!newErrors.Email && !EmailRegex.test(formData.Email)) {
      newErrors = {
        ...newErrors,
        Email: "Please enter a valid Email Address.",
      };
      toast.error("Please enter a valid Email Address.");
    }
    if (!newErrors.PhoneNo && !phoneRegex.test(formData.PhoneNo)) {
      newErrors = {
        ...newErrors,
        PhoneNo: "Please enter a valid 10-digit phone number.",
      };
      toast.error("Please enter a valid 10-digit phone number.");
    }

    if (!newErrors.Password && !PasswordRegex.test(formData.Password)) {
      newErrors = {
        ...newErrors,
        Password:
          "Password must contain at least 1 capital letter, 1 special character, and 1 number. Minimum length is 8 characters.",
      };
      toast.error(
        "Password must contain at least 1 capital letter, 1 special character, and 1 number. Minimum length is 8 characters."
      );
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      signup(formData)
        .then(() => {
          toast.success("Form submitted successfully!");
          handleRedirectWithDelay("/login");
          setFormData({
            FirstName: "",
            LastName: "",
            Email: "",
            Address: "",
            PhoneNo: "",
            Password: "",
          });
        })
        .catch((error) => {
          if (error.response) {
            let message = error.response.data.message;
            if (message.PhoneNo)
              toast.error(error.response.data.message.PhoneNo[0]);
            if (message.Email)
              toast.error(error.response.data.message.Email[0]);
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
    }
  };

  return (
    <>
      <Navbar isAuthenticate={false} />
      <div
        className="min-h-screen py-6 flex flex-col justify-center sm:py-10  bg-white dark:bg-gray-900 dark:text-white duration-200"
        style={{ paddingTop: "0px" }}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl sm:py-20"></div>
          <div className="relative px-4 py-10  bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto w-[350px] h-[400px]">
              <div>
                <h1 className="text-2xl font-semibold dark:text-black flex justify-center items-center">
                  Signup
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="FirstName"
                      name="FirstName"
                      value={formData.FirstName}
                      type="text"
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="First Name"
                    />
                    <label
                      htmlFor="FirstName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="LastName"
                      name="LastName"
                      value={formData.LastName}
                      type="text"
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Last Name"
                    />
                    <label
                      htmlFor="LastName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="Email"
                      name="Email"
                      type="text"
                      value={formData.Email}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="Email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="Address"
                      name="Address"
                      type="text"
                      value={formData.Address}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Address"
                    />
                    <label
                      htmlFor="Address"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="PhoneNo"
                      name="PhoneNo"
                      type="text"
                      value={formData.PhoneNo}
                      onChange={handleChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="PhoneNo"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="Password"
                      name="Password"
                      type="Password"
                      value={formData.Password}
                      onChange={handleChange}
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
                  <div className="relative top-3 text-center">
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
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

export default SignUp;
