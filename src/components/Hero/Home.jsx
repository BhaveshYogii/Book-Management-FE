import React from "react";
import Hero from "./Hero";
import Search from "../Search/Search";
import DefaultLayoutHoc from "../../layout/Default.layout.jsx";
import Footer from "../Footer/Footer";
const Home = (props) => {
  return (
    <>
      <Hero />
      <Search isAuthenticate={props.isAuthenticate} setAuthenticate={props.setAuthenticate}/>
      <Footer/>
    </>
  );
};

export default DefaultLayoutHoc(Home);
