import React from "react";
import sites from "../../Blog/AllSections/sites";
import { NavLink } from "react-router-dom";

export default function OtherList() {
  const randomArray = (array) => {
    const randomArr = [...array];
    for (let i = 0; i < randomArr.length; i++) {
      const randomIdx = Math.floor(Math.random() * (i + 1));
      [randomArr[i], randomArr[randomIdx]] = [
        randomArr[randomIdx],
        randomArr[i],
      ];
    }
    return randomArr;
  };

  const array = randomArray(sites);
  const slicedSites = array.slice(0, 3);
  return (
    <ul>
      {slicedSites.map((item, index) => (
        <li key={index}>
          <NavLink to={`/blog/${index}`}>
            <img src={item.picture} alt={item.author} />
            <p>
              By <span>{item.author}</span> | {item.date}
            </p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
