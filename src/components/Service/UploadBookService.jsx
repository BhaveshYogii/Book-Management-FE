import axios from "axios";
const upload = async (book) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/uploadbook/', book);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {upload};