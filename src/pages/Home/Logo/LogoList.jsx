import React from "react";
import icons from "./icon.json";

export function LogoList() {
  return (
    <ul>
      {icons.map((item, index) => (
        <li key={index}>
          <a href={item.link}>
            <svg>
              <use href=""></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
