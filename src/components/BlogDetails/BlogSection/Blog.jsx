import React from "react";
import sites from "../../Blog/AllSections/sites";

export default function Blog({ blogId }) {
  console.log(blogId);
  const blog = sites.find((blog) => blog.id === Number(blogId));

  console.log(blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section key={blogId}>
      <p>{blog.blog}</p>
    </section>
  );
}
