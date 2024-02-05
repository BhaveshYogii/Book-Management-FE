import axios from "axios";
const loginf = async (userData) => {
    try {
      const token=localStorage.getItem("token");
      const response = await axios.post('http://127.0.0.1:8000/signin', userData);
      console.log(response);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {loginf};