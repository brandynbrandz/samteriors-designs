import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <LoginRegister />
    </>
  );
};

export default Home;
