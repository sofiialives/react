import React from "react";
import sites from "../../Blog/AllSections/sites";

export default function Blog({ blogId }) {
  const blog = sites.find((blog) => blog.author === blogId);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section key={blogId}>
      <p>{blog.blog}</p>
    </section>
  );
}
