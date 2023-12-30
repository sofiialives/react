import React, { useState } from "react";
import sites from "../sites";
import { PaginationNav } from "./PaginationNav";
import { NavLink, useLocation } from "react-router-dom";

export default function Pagination() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 5;
  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  const news = sites.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(sites.length / newsPerPage);

  const changeIndex = (value) => setCurrentPage(currentPage + value);

  return (
    <>
      <section>
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <NavLink to={`/blog/${index}`} state={{ from: location }}>
                <img src={item.picture} alt={item.title} />
                <p>{item.text}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <PaginationNav
        nPage={nPage}
        currentPage={currentPage}
        changeIndex={changeIndex}
      />
    </>
  );
}
