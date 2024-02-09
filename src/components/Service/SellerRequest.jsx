import axios from "axios";
const sellerf = async (userData) => {
    let session = document.cookie.match(/session_key=([^;]*)/);
    if (session == null) {
      toast.error("Log in First and try again.");
      return;
    }
    let session_key = session[1];
    try {
      const response = await axios.post('http://127.0.0.1:8000/sellersignup/', {
        "Company" : userData.Company,
        "CompanyLocation":userData.CompanyLocation,
        "session_key":session_key,
    });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {sellerf};