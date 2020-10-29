import React from "react";
import Header from "../components/Header";
import ContactPage from "../templates/Contact";
import CallToAction from "../components/CallToAction";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactPage />
      <CallToAction />

      <Footer />
      <MobileMenu />
      <LoginRegister />
    </>
  );
};

export default Contact;
