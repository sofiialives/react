import React from "react";
import { NavLink } from "react-router-dom";
import links from "../../Footer/forList/navlinks";

export function Link() {
  return (
    <ul>
      {links.map((item, index) => (
        <li key={index}>
          <NavLink to={item.to}>{item.text}</NavLink>
        </li>
      ))}
    </ul>
  );
}
