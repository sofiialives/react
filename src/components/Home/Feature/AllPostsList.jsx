import React from "react";
import posts from "./posts";

export function AllPostsList() {
  return (
    <ul>
      {posts.map((item, index) => (
        <li key={index}>
          <p>
            By <span>{item.author}</span> | Aug 23, 2021
          </p>
          <h3>{item.text}</h3>
        </li>
      ))}
    </ul>
  );
}
