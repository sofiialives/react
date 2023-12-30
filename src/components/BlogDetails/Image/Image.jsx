import React from "react";
import sites from "../../Blog/AllSections/sites";

export default function Image({ blogId }) {
  console.log(blogId);
  const blog = sites.find((blog) => blog.id === Number(blogId));

  console.log(blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section key={blogId}>
      <img src={blog.fullImg} alt={blog.author} />
    </section>
  );
}
