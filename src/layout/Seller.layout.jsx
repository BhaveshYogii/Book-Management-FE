import React, { useState, useEffect } from "react";
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
    const navigate = useNavigate();
    useEffect(() => {
      if (!session) {
        setAuthenticate(false);
        navigate("/login");
      }
      const func = async () => {
        await GetRoleService(session, setSeller, setAdmin, setAuthenticate);
      };
      func();
    }, []);

    return (
      <div>
        {seller && (
          <>
            <SellerNavBar
              isAuthenticate={isAuthenticate}
              setAuthenticate={setAuthenticate}
              seller={seller}
            />
            <Component
              {...props}
              isAuthenticate={isAuthenticate}
              setAuthenticate={setAuthenticate}
              seller={seller}
            />
          </>
        )}
        {!seller && (
          <div
            className="flex flex-col justify-center items-center"
            style={{ minHeight: "100vh" }}
          >
            <h1 style={{ fontSize: "1.5rem" }}>Sorry !</h1>
            <p>You are not authorized to access this page.</p>
            <a href="/" className="cursor-pointer text-blue-500">Go back to home</a>
          </div>
        )}
      </div>
    );
  };

export default SellerLayoutHoc;
