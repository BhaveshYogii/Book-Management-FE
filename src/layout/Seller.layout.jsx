import React ,{useState,useEffect} from "react";
import SellerNavBar from "../components/SellerDashboard/SellerNavbar";
import GetRoleService from "../components/Service/GetRoleService";
import { useNavigate } from "react-router-dom";

const SellerLayoutHoc =
  (Component) =>
  ({ ...props }) => {

    const [isAuthenticate, setAuthenticate] = useState(false);
    const [seller, setSeller] = useState(false);
    const [admin, setAdmin] = useState(false);
    let session = document.cookie.match(/session_key=([^;]*)/);
    const navigate=useNavigate();
    useEffect(() => {
      if (!session) {
        setAuthenticate(false);
        navigate("/login");
      }
      const func=async()=>{
        await GetRoleService(session, setSeller, setAdmin, setAuthenticate);
      }
      func();
    }, []);

    return (
      <div>
        <SellerNavBar isAuthenticate={isAuthenticate} setAuthenticate={setAuthenticate} seller={seller}/>
        <Component {...props} isAuthenticate={isAuthenticate} setAuthenticate={setAuthenticate} />
      </div>
    );
  };

export default SellerLayoutHoc;
