import React from "react";
import { SocialMediasList } from "../SocialMediasList/SocialMediasList";
import authors from "../forList/author";

export function AuthorsList() {
  return (
    <ul>
      {authors.map((item, index) => (
        <li key={index}>
          <img src={item.pic} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.job}</p>
          <SocialMediasList />
        </li>
      ))}
    </ul>
  );
}
