import React from "react";
import icons from "./icon";

export function LogoList() {
  return (
    <ul>
      {icons.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.icon}</a>
        </li>
      ))}
    </ul>
  );
}
