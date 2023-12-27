import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "./LinkSection/Link";

function AppBar() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <NavLink to="/">
        <img src="" alt="logo" />
      </NavLink>
      <nav>
        <NavLink to="/"></NavLink>
        <Link />
      </nav>
      <button type="button">Subscribe</button>
    </header>
  );
}

export default AppBar;
