import axios from "axios";

const AdminGetRequests = (session,setRequestData) => {
  try {
    let session_key = session[1];
    axios
      .post("http://52.66.121.111:8000/admingetrequests/", {
        session_key: session_key,
      })
      .then((res) => {
        setRequestData(res.data.Request);
      });
  } catch (error) {
    console.error("Error:", error);
  }
};

export default AdminGetRequests;
