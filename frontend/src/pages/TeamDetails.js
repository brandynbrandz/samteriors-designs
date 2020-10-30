import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import TeamDetails from "../templates/TeamDetails";
import MobileMenu from "../components/MobileMenu";
import BrandLogo from "../components/BrandLogo";
import CallToAction from "../components/CallToAction";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";

const TeamDetailsPage = () => {
  return (
    <>
      <Header />
      <TeamDetails />
      <BrandLogo />
      <Funfact />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </>
  );
};

export default TeamDetailsPage;
