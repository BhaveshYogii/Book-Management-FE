import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetRequestStatusService = (session, setRequestStatus) => {
  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/getrequeststatus/", {
        session_key: session_key,
      })
      .then((res) => {
        if (res.data.message) {
          setRequestStatus(res.data.message);
        }
        if (res.data.error) {
          setRequestStatus(res.data.error);
        }
      })
      .catch((error) => {
        if (error.response) {
          let message = error.response.data;
          if (message.error) setRequestStatus(message.error);
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

export default GetRequestStatusService;
