import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetorderelementsService = (session,setOrders) => {
    try {
        let session_key = session[1];
        axios
          .post("http://52.66.67.27:8000/getorderelements/", {
            session_key: session_key,
          })
          .then((res) => {
            setOrders(res.data.Data);
          });
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Something went wrong. Please try again.");
      }
};

export default GetorderelementsService;
