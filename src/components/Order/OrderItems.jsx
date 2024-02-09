import React from "react";
import { FaFilePdf } from "react-icons/fa";
import axios from "axios";

const OrderItems = (props) => {
  let session = document.cookie.match(/session_key=([^;]*)/);

  const downloadPdf = (orderId) => {
    try {
      let session_key = session[1];
      axios
        .post("http://127.0.0.1:8000/generate_pdf_invoice/", {
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
  

  return (
    <div className="mt-10 card flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
      <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full dark:text-black">
          <div className="flex justify-between w-full">
            <p className="text-lg md:text-lg font-semibold leading-6 xl:leading-5 text-gray-800 lg:text-xl mb-2">
              Order No. {props.order.OrderId}
            </p>
            <div className="mt-0">
              <button className="font-semibold" onClick={(e)=>{downloadPdf(props.order.OrderId)}}>
                <FaFilePdf className="inline-block w-6 h-5" />
                Download
              </button>
            </div>
          </div>
          <p className="text-base text-md mb-4 leading-6 text-gray-600 ">
            {props.order.PlacedTime}
          </p>

          {props.order.OrderElements &&
            props.order.OrderElements.map((orderelement) => (
              <div
                key={orderelement.OrderElementId}
                className="mt-2 md:mt-2 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
              >
                <div className="border-b border-gray-200 pt-0 md:flex-row flex-col flex justify-between items-start w-full  pb-2 space-y-0 ">
                  <div className="w-full flex flex-col justify-center items-start space-y-1">
                    <h3 className="text-lg xl:text-md pt-0 mt-0 font-semibold leading-6 text-gray-800">
                      {orderelement.BookData.Title}
                    </h3>
                    <span className="text-gray-500 text-sm">
                      By : {orderelement.BookData.Author}
                    </span>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      {orderelement.BookData.Price} X{" "}
                      {orderelement.ElementQuantity}
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      {" "}
                      {orderelement.BookData.Price *
                        orderelement.ElementQuantity}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div className="flex justify-end w-full">
            <div className="text-xl font-semibold mt-5">
              Total Amount : {props.order.TotalAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderItems;
