import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogoutService = async (session, props) => {

  let temp = session[1];
  try {
    await axios
      .post("http://52.66.67.27:8000/logout/", {
        session_key: session[1],
      })
      .then((res) => {
        document.cookie = `session_key=${temp}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;`;
        toast.success("Logged out successfully!");
        props.setAuthenticate(false);
      });
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
    // console.error("Error during login:", error);
  }

};

export default LogoutService;
