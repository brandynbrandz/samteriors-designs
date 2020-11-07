import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from "../templates/Team";
import BrandLogo from "../components/BrandLogo";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";

const Team = () => {
  return (
    <>
      <Header />
      <PageHeader
        bgImg={process.env.PUBLIC_URL + "../assets/img/page-header.jpg"}
        title="KNOW ABOUT Samterior THE ULTIMATE TEAM"
        content="Samterior always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
        headRoute="TEAM"
      />
      <About
        title={"Our Team"}
        heading="Meet Our <br/> Expert Member"
        thumb={process.env.PUBLIC_URL + "/assets/img/about.jpg"}
        content="<b>Samterior</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      />

      <TeamMember />
      <BrandLogo />
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </>
  );
};

export default Team;
