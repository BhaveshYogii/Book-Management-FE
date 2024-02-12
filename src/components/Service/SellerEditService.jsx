import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerEditService = (session, book) => {
  const handleReloadWithDelay = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  try {
    let session_key = session[1];
    axios
      .post("http://127.0.0.1:8000/sellerupdatebook/", {
        session_key: session_key,
        BookId: book.BookId,
        Title: book.Title,
        SellerObj: book.SellerObj,
        Author: book.Author,
        Genre: book.Genre,
        Price: book.Price,
        PublishYear: book.PublishYear,
        Image: book.Image,
        Description: book.Description,
        AvailQuantity: book.AvailQuantity,
        Language: book.Language,
        OverallRating: book.OverallRating,
        TotalReviews: book.TotalReviews,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          toast.success(res.data.message);
          return;
        }
      })
      .catch((error) => {
        console.log();
        if (error.response) {
          let message = error.response.data;
          if (message.non_field_errors) toast.error("Can't Modify ! Book with this Title already exists.");
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

export default SellerEditService;
