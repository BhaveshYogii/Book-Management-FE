import axios from "axios";
const loginf = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/signin/', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export default loginf;