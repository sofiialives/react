import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "./LinkSection/Link";
import Logo from "../../icons/Logo";

function AppBar() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav>
        <Link />
      </nav>
      <button type="button">Subscribe</button>
    </header>
  );
}

export default AppBar;
