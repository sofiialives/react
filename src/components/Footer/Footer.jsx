import React from "react";
import { NavLink } from "react-router-dom";
import { Subscribe } from "./SubscribeSection/Subscribe";
import { List } from "./ListSection/List";
import { IconList } from "./IconListSection/IconList";

export function Footer() {
  return (
    <footer>
      <NavLink to="/">
        <img src="" alt="logo" />
      </NavLink>
      <List />
      <Subscribe />
      <p>
        Finstreet 118 2561 Fintown <br /> Hello@finsweet.com 020 7993 2905
      </p>
      <IconList />
    </footer>
  );
}
