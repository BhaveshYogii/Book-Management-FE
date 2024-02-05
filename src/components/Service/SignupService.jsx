import axios from 'axios';

const signup = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup/', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export {signup};

