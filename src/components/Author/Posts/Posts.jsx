import React from "react";

export default function Posts({ author }) {
  const items = [
    {
      picture: "path",
      category: "BUSINESS",
      title: "Font sizes in UI design: The complete guide to follow",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      picture: "path",
      category: "ECONOMY",
      title: "How to build rapport with your web design clients",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section key={author.id}>
      {items.map((item, index) => (
        <li key={index}>
          <img src={item.picture} alt="pics" />
          <section>
            <p>{item.category}</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </section>
        </li>
      ))}
    </section>
  );
}
