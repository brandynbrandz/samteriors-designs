import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import About from "../components/About/home";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Funfact from "../components/Funfact";
import BrandLogo from "../components/BrandLogo";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Features classes="sp-top" />

      <BrandLogo />
      <Funfact />
      <CallToAction />
      <MobileMenu />
      <LoginRegister />
      <Footer />
    </>
  );
};

export default Home;
