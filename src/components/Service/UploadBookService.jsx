import axios from "axios";
const upload = async (book) => {
    try {
      const response = await axios.post('http://52.66.67.27:8000/uploadbook/', book);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {upload};