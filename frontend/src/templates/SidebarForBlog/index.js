import React from "react";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Anchor from "../../components/UI/Anchor";
import FeaturedBlog from "../../components/FeaturedBlog";
import SubscribeNewsletter from "../../components/Newsletter";

import Blogs from "../../data/Blog/blog";
import Categories from "../../data/Sidebar/sidebar";
// import BannerImg from "../../../public/assets/img/banner-poster.jpg";

const SidebarForBlog = ({ classes }) => {
  return (
    <Sidebar classes={`col-lg-3 ${classes}`}>
      <SidebarItem title={"CATEGORIES"} classes={"single-sidebar-item-wrap"}>
        <List classes={"sidebar-list"}>
          {Categories.categories.map((category) => (
            <LI key={category.id}>
              <Anchor path={category.cate_link}>{category.cate_name}</Anchor>
            </LI>
          ))}
        </List>
      </SidebarItem>

      <SidebarItem
        title={"FEATURED POSTS"}
        classes={"single-sidebar-item-wrap"}
      >
        <div className={"latest-blog-widget"}>
          {Blogs.reverse()
            .slice(0, 4)
            .map((post) => (
              <FeaturedBlog
                key={post.id}
                id={post.id}
                title={post.title}
                publishDate={post.publishDate}
                thumb={post.thumb}
              />
            ))}
        </div>
      </SidebarItem>

      <SidebarItem classes={"single-sidebar-item-wrap"}>
        <SubscribeNewsletter mailchimpUrl="https://gmail.us2.list-manage.com/subscribe/post?u=696736434709b1f7c18a2765b&amp;id=c5f58b02d8" />
      </SidebarItem>

      <SidebarItem classes={"single-sidebar-item-wrap"}>
        {/* <img src={BannerImg} alt="Banner" /> */}
        <img
          src={`${process.env.PUBLIC_URL + "/assets/img/banner-poster.jpg"}`}
          alt="Banner"
        />
      </SidebarItem>
    </Sidebar>
  );
};

export default SidebarForBlog;
