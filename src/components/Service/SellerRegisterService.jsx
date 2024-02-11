import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerRegisterService = (session,sellerId) => {
  
  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/sellerregister/", {
        session_key: session_key,
        sellerId: sellerId,
      })
      .then((res) => {
        toast.success("Status Updated Successfully !");
        handleReloadWithDelay();
      })
      .catch((error) => {
        if (error.response) {
          if(error.response.data.error) toast.error(error.response.data.error);
        } else if (error.request) {
          console.error("No response received from the server:", error.request);
        } else {
          console.error("Error during request setup:", error.message);
        }
      });
  } catch (error) {
    console.error("Error:", error);
  }
};

export default SellerRegisterService;
