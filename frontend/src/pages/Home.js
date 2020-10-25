import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <CallToAction />
      <LoginRegister />
      <Footer />
    </>
  );
};

export default Home;
