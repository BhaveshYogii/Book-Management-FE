import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AdminGetUsers = (session,setUsersData) => {
  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/admingetusers/", {
        session_key: session_key,
      })
      .then((res) => {
        setUsersData(res.data.users);
      });
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default AdminGetUsers;
