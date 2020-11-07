import React from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";

import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import BrandLogo from "../components/BrandLogo";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import About from "../components/About/home";
import Services from "../components/Services";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";
import Features from "../components/Features";

// import ServiceThumb from "../../public/assets/img/about.jpg";

const AboutPage = () => {
  return (
    <>
      <Header />
      <PageHeader
        bgImg={process.env.PUBLIC_URL + "/assets/img/page-header.jpg"}
        title="ABOUT US"
        content="Samteriors always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
        headRoute="ABOUT"
      />
      <About
        title={"Our Team"}
        heading="Meet Our <br/> Expert Member"
        thumb={process.env.PUBLIC_URL + "/assets/img/about.jpg"}
        content="<b>Samteriors</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      />
      <Services />
      <Features classes={"sm-top"} />
      <Testimonials />
      <Team />
      <BrandLogo />
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </>
  );
};

export default AboutPage;
