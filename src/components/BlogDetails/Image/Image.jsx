import React from "react";
import sites from "../../Blog/AllSections/sites";

export default function Image({ blogId }) {
  const blog = sites.find((blog) => blog.author === blogId);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section key={blogId}>
      <img src={blog.fullImg} alt={blog.author} />
    </section>
  );
}
