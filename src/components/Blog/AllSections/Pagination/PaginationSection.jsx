import React, { useState } from "react";
import sites from "../sites";
import { PaginationNav } from "./PaginationNav";

export default function Pagination() {
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
              <img src={item.picture} alt={item.title} />
              <p>{item.text}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
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
