import React from "react";
import { Hero } from "../../components/Blog/Hero/Hero";
import { All } from "../../components/Blog/AllSections/All";
import { Category } from "../../components/Blog/Category/Category";
import { Join } from "../../components/Home/Join/Join";

function Blog() {
  return (
    <>
      <Hero />
      <All />
      <Category />
      <Join />
    </>
  );
}

export default Blog;
