import axios from "axios";
const loginf = async (userData) => {
  let session = document.cookie.match(/session_key=([^;]*)/);
  if(session) document.cookie = `session_key=${session[1]}; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/;`;
    try {
      const response = await axios.post('http://127.0.0.1:8000/signin/', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export default loginf;