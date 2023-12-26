import React from "react";
import medias from "./medias.json";

export function SocialMediasList() {
  return (
    <ul>
      {medias.map((item, index) => (
        <li key={index}>
          <ul>
            <li>
              <a href={item.facebook}>
                <svg width="16">
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li>
              <a href={item.twitter}>
                <svg width="16">
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li>
              <a href={item.inst}>
                <svg width="16">
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li>
              <a href={item.linkedin}>
                <svg width="16">
                  <use href=""></use>
                </svg>
              </a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
