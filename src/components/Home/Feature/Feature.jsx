import React from "react";
import { AllPostsList } from "./AllPostsList";
import { Featured } from "./FeaturedSection/Featured";

export function Feature() {
  return (
    <section>
      <section>
        <h2>Featured Post</h2>
        <Featured />
      </section>
      {/* All Posts */}
      <section>
        <h2>All Posts</h2>
        <AllPostsList />
      </section>
    </section>
  );
}
