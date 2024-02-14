import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GeneratePdfInvoiceService = (session,orderId) => {
    try {
        let session_key = session[1];
        axios
          .post("http://52.66.67.27:8000/generate_pdf_invoice/", {
            session_key: session_key,
            orderId: orderId,
          }, {
            responseType: 'arraybuffer', // Ensure binary response
          })
          .then((res) => {
            // Create a Blob from the PDF content
            const blob = new Blob([res.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
    
            // Open the PDF in a new window
            window.open(url, '_blank');
          });
      } catch (error) {
        console.error("Error during PDF download:", error);
        toast.error("Something went wrong. Please try again.");
      }
};

export default GeneratePdfInvoiceService;
