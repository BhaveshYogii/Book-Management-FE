import React from "react";
import Hero from "./Hero";
import Search from "../Search/Search";
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
