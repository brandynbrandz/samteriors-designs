import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Funfact from "../components/Funfact";

const Home = () => {
  return (
    <>
      <Header />
      <Funfact />
      <CallToAction />
      <MobileMenu />
      <LoginRegister />
      <Footer />
    </>
  );
};

export default Home;
