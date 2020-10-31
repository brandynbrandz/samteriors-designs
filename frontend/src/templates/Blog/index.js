import React from "react";
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import BlogContent from "./BlogContent";
import SidebarForBlog from "../SidebarForBlog";

const Blog = ({ sidebar_position, blog_type, sidebar }) => {
  return (
    <>
      <PageHeader
        bgImg={process.env.PUBLIC_URL + "/assets/img/page-header.jpg"}
        title={"From Brandz-Interior Latest"}
        content={
          "Brandz-Interior always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
        }
        headRoute="BLOG"
      />

      <PageWrapper classes={"blog-page-content-area sp-y"}>
        {sidebar === true && sidebar_position === "left" ? (
          <SidebarForBlog classes={"order-1 order-lg-0"} />
        ) : null}

        <BlogContent
          blog_type={blog_type}
          cols={sidebar ? "col-lg-9" : "col-12"}
          classes={sidebar_position === "left" ? "order-0 order-lg-1" : null}
        />

        {sidebar === true && sidebar_position === "right" ? (
          <SidebarForBlog />
        ) : null}
      </PageWrapper>
    </>
  );
};

export default Blog;
