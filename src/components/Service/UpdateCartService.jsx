import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCartService = (session,BookId,count) => {
  try {
    let session_key = session[1];
    axios
      .post("http://52.66.67.27:8000/updatecart/", {
        session_key: session_key,
        BookId: BookId,
        new_quantity: count,
      })
      .then((res) => {});
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default UpdateCartService;
