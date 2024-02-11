import React,{useEffect, useState} from "react";
import Navbar from "../components/NavBar/Navbar";
import GetRoleService from "../components/Service/GetRoleService";
import { useNavigate } from "react-router-dom";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {

    const [isAuthenticate, setAuthenticate] = useState(false);
    const [seller, setSeller] = useState(false);
    const [admin, setAdmin] = useState(false);
    let session = document.cookie.match(/session_key=([^;]*)/);
    // const navigate = useNavigate();

    useEffect(() => {
      const func=()=>{
        if (!session) {
          setAuthenticate(false);
        }
        GetRoleService(session, setSeller, setAdmin, setAuthenticate);
      }
      func();
    }, []);

    return (
      <div>
        <Navbar isAuthenticate={isAuthenticate} setAuthenticate={setAuthenticate} seller={seller} admin={admin}/>
        <Component {...props} isAuthenticate={isAuthenticate} setAuthenticate={setAuthenticate}/>
      </div>
    );
  };

export default DefaultLayoutHoc;
