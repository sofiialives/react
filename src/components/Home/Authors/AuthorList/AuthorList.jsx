import React from "react";
import authors from "../forList/author";
import Facebook from "../../../../icons/Facebook";
import Instagram from "../../../../icons/Instagram";
import Twitter from "../../../../icons/Twitter";
import Linkedin from "../../../../icons/Linkedin";

export function AuthorsList() {
  return (
    <ul>
      {authors.map((item, index) => (
        <li key={index}>
          <img src={item.pic} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.job}</p>
          <ul>
            <li>
              <a href={item.facebook}>
                <Facebook />
              </a>
            </li>
            <li>
              <a href={item.twitter}>
                <Twitter />
              </a>
            </li>
            <li>
              <a href={item.instagram}>
                <Instagram />
              </a>
            </li>
            <li>
              <a href={item.linkedin}>
                <Linkedin />
              </a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
