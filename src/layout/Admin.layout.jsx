import React from "react";
import AdminNavbar from "../components/Navbar/AdminNavbar";

const AdminLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <AdminNavbar />
        <Component {...props} />
      </div>
    );
  };

export default AdminLayoutHoc;
