import React from "react";

export function OverviewList() {
  const statistics = [
    { title: "12+", text: "Blogs Published" },
    { title: "18K+", text: "Views on Finsweet" },
    { title: "30K+", text: "Total active Users" },
  ];
  return (
    <ul>
      {statistics.map((item, index) => (
        <li key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
