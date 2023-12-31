import React from "react";
import icons from "../forList/icons";

export function IconList() {
  return (
    <ul>
      {icons.map((item, index) => (
        <li key={index}>
          <a href={item.to}>{item.icon}</a>
        </li>
      ))}
    </ul>
  );
}
