import React from "react";
import User from "./User";
import Icon from "./Icon";
import sites from "../../Blog/AllSections/sites";

export default function Preview({ blogId }) {
  console.log(blogId);
  const blog = sites.find((blog) => blog.id === Number(blogId));

  console.log(blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section key={blogId}>
      <User blog={blog} />
      <h2>{blog.title}</h2>
      <Icon blog={blog} />
    </section>
  );
}
