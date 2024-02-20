import axios from 'axios';

const signup = async (userData) => {
    try {
      const response = await axios.post("http://52.66.121.111:8000/signup/", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export {signup};

