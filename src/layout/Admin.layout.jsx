import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/Admin/AdminNavBar";
import { useNavigate } from "react-router-dom";
import GetRoleService from "../components/Service/GetRoleService";
import Login from "../components/Login/Login";

const AdminLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    const [isAuthenticate, setAuthenticate] = useState(false);
    const [seller, setSeller] = useState(false);
    const [admin, setAdmin] = useState(false);
    let session = document.cookie.match(/session_key=([^;]*)/);
    const navigate = useNavigate();

    useEffect(() => {
      if (!session) {
        setAuthenticate(false);
        navigate("/login");
      }
      const func = async () => {
        await GetRoleService(session, setSeller,setAdmin, setAuthenticate);
      };
      func();
    }, [isAuthenticate]);

    return (
      <div>
        
            <AdminNavbar
              isAuthenticate={isAuthenticate}
              setAuthenticate={setAuthenticate}
              admin={admin}
            />
            <Component
              {...props}
              isAuthenticate={isAuthenticate}
              setAuthenticate={setAuthenticate}
              admin={admin}
            />
 
      </div>
    );
  };

export default AdminLayoutHoc;
