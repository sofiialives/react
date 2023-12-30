import React from "react";
import CategorySecond from "../../../icons/CategorySecond";

export default function Icon({ blog }) {
  return (
    <section>
      <CategorySecond />
      <p>{blog.category}</p>
    </section>
  );
}
