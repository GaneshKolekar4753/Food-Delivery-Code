import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Crausel from "../components/Crausel";

const Home = () => {
  return (
    <>
      <div>
      <div><Navbar /></div>
      <div><Crausel/></div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div><Footer/></div>
      </div>
    </>
  );
};

export default Home;
