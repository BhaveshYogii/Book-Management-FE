import axios from "axios";

const GetRoleService = async (session,setSeller,setAdmin,setAuthenticate) => {
  if(!session) return;
  try {
    let session_key = session[1];
    await axios
      .post("http://52.66.121.111:8000/getrole/", {
        session_key: session_key,
      })
      .then((res) => {
        if (res.data.role == "Seller") setSeller(true);
        else if (res.data.role == "Admin") setAdmin(true);
        if (res.data.success) setAuthenticate(true);
      })
      .catch((error) => {
        if (error.response) {
          if(error.response.data.success=="False") setAuthenticate(false);
          console.log(error.response);
        } else if (error.request) {
          console.error("No response received from the server:", error.request);
        } else {
          console.error("Error during request setup:", error.message);
        }
      });
  } catch (error) {
    console.error("Error :", error);
  }
};

export default GetRoleService;
