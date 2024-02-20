import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SellerGetBooksService = (session, setBookData) => {
  try {
    let session_key = session[1];
    axios
      .post("http://52.66.67.27:8000/sellergetbooks/", {
        session_key: session_key,
      })
      .then((res) => {
        setBookData(res.data.books);
      });
  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default SellerGetBooksService;
