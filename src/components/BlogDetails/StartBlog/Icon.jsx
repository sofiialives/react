import React from "react";

export default function Icon({ blog }) {
  return (
    <section>
      {blog.icon}
      <p>{blog.category}</p>
    </section>
  );
}
