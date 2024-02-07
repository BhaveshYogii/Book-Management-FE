import axios from "axios";
const sellerf = async (userData) => {
    try {
      const response = await axios.post('', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {sellerf};