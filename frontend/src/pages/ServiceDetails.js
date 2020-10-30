import React from "react";
import Header from "../components/Header";
import ServiceDetails from "../templates/ServiceDetails";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import BrandLogo from "../components/BrandLogo";
import CallToAction from "../components/CallToAction";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";

const ServiceDetailsPage = () => {
  return (
    <>
      <Header />
      <ServiceDetails />
      <BrandLogo />
      <Funfact />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </>
  );
};

export default ServiceDetailsPage;
