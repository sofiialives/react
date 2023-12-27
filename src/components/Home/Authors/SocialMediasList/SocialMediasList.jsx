import React from "react";
import medias from "../forList/medias";

export function SocialMediasList() {
  return (
    <ul>
      {medias.map((item, index) => (
        <li key={index}>
          <ul>
            <li>
              <a href={item.facebook}>
                <svg>
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li>
              <a href={item.twitter}>
                <svg>
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li>
              <a href={item.inst}>
                <svg>
                  <use href=""></use>
                </svg>
              </a>
            </li>
            <li>
              <a href={item.linkedin}>
                <svg>
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
