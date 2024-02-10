import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import GetRoleService from "../Service/GetRoleService";
import DefaultLayoutHoc from "../../layout/Default.layout";
const Home = (props) => {
  return (
    <>
      <Hero />
      <Search isAuthenticate={props.isAuthenticate} setAuthenticate={props.setAuthenticate}/>
    </>
  );
};

export default DefaultLayoutHoc(Home);
