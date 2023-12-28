import React from "react";
import { AllPostsList } from "./AllPostsList";
import { Featured } from "./FeaturedSection/Featured";

export function Feature() {
  const section = [
    { title: "Featured Post", component: <Featured /> },
    { title: "All Posts", component: <AllPostsList /> },
  ];
  return (
    <section>
      {section.map((item, index) => (
        <section key={index}>
          <h2>{item.title}</h2>
          {item.component}
        </section>
      ))}
    </section>
  );
}
