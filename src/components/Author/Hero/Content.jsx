import React from "react";
import { IconList } from "../../Footer/IconListSection/IconList";

export default function Content({ author }) {
  return (
    <section>
      <h2>Hey there, I’m {author.author} and welcome to my Blog</h2>
      <p>{author.text}</p>
      <IconList />
    </section>
  );
}
