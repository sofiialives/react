import React from "react";
import sites from "../../Blog/AllSections/sites";
import { Link } from "react-router-dom";
import icons from "../../Footer/forList/icons";

export function Authors() {
  return (
    <section>
      <ul>
        {sites.map((item, index) => (
          <li key={index}>
            <Link to={`/about/${index}`}>
              <img src={item.avatar} alt={item.author} />
              <p>Content Writer @Company</p>
              <ul>
                {icons.map((item, index) => (
                  <li key={index}>
                    <a href={item.to}>{item.icon}</a>
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
