import React from "react";
import sites from "../../Blog/AllSections/sites";
import { Link, useLocation } from "react-router-dom";
import icons from "../../Footer/forList/icons";

export function Authors() {
  const location = useLocation();
  
  return (
    <section>
      <ul>
        {sites.map((item, index) => (
          <li key={index}>
            <Link to={`/about/${index}`} state={{ from: location }}>
              <img src={item.avatar} alt={item.author} />
              <p>Content Writer @Company</p>
            </Link>
            <ul>
              {icons.map((item, index) => (
                <li key={index}>
                  <a href={item.to}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
