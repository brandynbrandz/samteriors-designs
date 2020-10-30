import React from "react";
import Header from "../components/Header";
import Blog from "../templates/Blog";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

const BlogHomePage = () => {
  return (
    <>
      <Header />
      <Blog blog_type={"grid"} sidebar={true} sidebar_position={"right"} />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </>
  );
};

export default BlogHomePage;
