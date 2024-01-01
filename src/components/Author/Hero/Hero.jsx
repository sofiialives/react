import React from "react";
import Content from "./Content";

export default function Hero({ author }) {
  return (
    <section key={author.id}>
      <img src={author.avatar} alt={author.author} />
      <Content author={author}/>
    </section>
  );
}
