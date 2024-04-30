import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetBooksService = (props) => {
  try {
    axios
      .post("http://52.66.67.27:8000/getbooks/", {
        Key: props.keyfield,
        Order: props.order,
        Limit: props.limit,
      })
      .then((res) => {
        props.setBooksData(res.data.list);
      });
  } catch (error) {
    // console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export default GetBooksService;
