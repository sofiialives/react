import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "./LinkSection/Link";
import Logo from "../../img/icons/Logo";

function AppBar() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <NavLink to="/">
        <Logo />
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
