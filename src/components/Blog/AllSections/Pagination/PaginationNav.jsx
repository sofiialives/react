import React from "react";

export function PaginationNav({ nPage, changeIndex, currentPage}) {
  return (
    <nav>
      <ul>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => changeIndex(-1)}
          >
            Prev
          </button>
        </li>
        <li>
          <button
            type="button"
            disabled={currentPage === nPage}
            onClick={() => changeIndex(1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
