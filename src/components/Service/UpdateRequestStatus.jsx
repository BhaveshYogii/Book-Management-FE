import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UpdateRequestStatus = (session, requestId, requestStatus) => {
    console.log(requestStatus);
  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/adminupdaterequests/", {
        session_key: session_key,
        requestId: requestId,
        status: requestStatus,
      })
      .then((res) => {
        toast.success("Status Updated Successfully !");
        handleReloadWithDelay();
      });
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default UpdateRequestStatus;
