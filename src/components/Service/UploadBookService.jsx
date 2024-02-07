import axios from "axios";
const upload = async (book) => {
    try {
      const response = await axios.post('', book);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {upload};