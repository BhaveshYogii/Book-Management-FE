import axios from "axios";
const upload = async (book) => {
    try {
      const response = await axios.post("http://52.66.121.111:8000/uploadbook/", book);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export {upload};