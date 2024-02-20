import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const GetCartElementsService = (session,setBooksData,setCartData) => {
  try {
    let session_key = session[1];
    axios
      .post("http://52.66.121.111:8000/getcartelements/", {
        session_key: session_key,
      })
      .then((res) => {
        setBooksData(res.data.BookData);
        setCartData(res.data.CartData);
      });
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default GetCartElementsService;
