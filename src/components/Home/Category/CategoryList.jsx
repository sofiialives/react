import React from "react";
import categories from "./categories";

export default function CategoryList() {
  return (
    <ul>
      {categories.map((item, index) => (
        <li key={index}>
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
