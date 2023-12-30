import React from "react";
import sites from "../../Blog/AllSections/sites";
import User from "./User";
import Icon from "./Icon";

export default function Preview({ blogId }) {
  const blog = sites.find((blog) => blog.author === blogId);
  if (!blog) {
    console.log(
      "Available author names:",
      sites.map((blog) => blog.author)
    );
    console.log("Provided blogId:", blogId);
    return <div>Blog not found</div>;
  }
  return (
    <section key={blogId}>
      <User blog={blog} />
      <h2>Step-by-step guide to choosing great font pairs</h2>
      <Icon blog={blog} />
    </section>
  );
}
