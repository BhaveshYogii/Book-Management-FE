import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerRegisterService = (session) => {
  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/sellerregister/", {
        session_key: session_key,
      })
      .then((res) => {})
      .catch((error) => {
        if (error.response) {
        } else if (error.request) {
          console.error("No response received from the server:", error.request);
        } else {
          console.error("Error during request setup:", error.message);
        }
      });
  } catch (error) {
    console.error("Error during adding to cart:", error);
  }
};

export default SellerRegisterService;
