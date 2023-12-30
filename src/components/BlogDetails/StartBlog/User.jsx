import React from "react";

export default function User({blog}) {
  return (
    <section>
      <img src={blog.avatar} alt="" />
      <section>
        <h3>{blog.author}</h3>
        <p>{blog.date}</p>
      </section>
    </section>
  );
}
