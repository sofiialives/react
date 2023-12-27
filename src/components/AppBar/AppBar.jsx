import React from "react";
import { NavLink } from "react-router-dom";

function AppBar() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <nav>
        <NavLink to="/"></NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppBar;
