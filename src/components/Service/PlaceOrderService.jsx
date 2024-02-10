import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrderService = (session) => {
  
  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/placeorder/", {
        session_key: session_key,
      })
      .then((res) => {
        toast.success("Your order is placed !");
        handleReloadWithDelay();
      });
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  }
};

export default PlaceOrderService;
