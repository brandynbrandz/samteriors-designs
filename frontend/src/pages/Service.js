import React from "react";
import Header from "../components/Header";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials";
import BrandLogo from "../components/BrandLogo";

import CallToAction from "../components/CallToAction";
import Funfact from "../components/Funfact";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <>
      <Header />
      <PageHeader
        bgImg={process.env.PUBLIC_URL + "../assets/img/page-header.jpg"}
        title="OUR SERVICES"
        content="Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
      />
      <PageAbout
        title={"Our Services"}
        heading="Provide best <br/> Business Solutions"
        thumb={process.env.PUBLIC_URL + "/assets/img/about.jpg"}
        content="<b>Businex</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      />
      <Services classes="sm-top" />
      <PricingTable />
      <Testimonial />
      <BrandLogo />
      <Funfact />
      <CallToAction />
      <Footer />
      <MobileMenu />
      <LoginRegister />
    </>
  );
};

export default ServicePage;
