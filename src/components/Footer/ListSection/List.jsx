import React from "react";
import links from "../forList/navlinks";
import { NavLink } from "react-router-dom";

export function List() {
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
