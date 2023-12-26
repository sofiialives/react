import React from "react";
import { AllPostsList } from "./AllPostsList";

export function Feature() {
  return (
    <section>
      {/* Featured Post */}
      <section>
        <h2>Featured Post</h2>
        <section>
          <img src="" alt="palma" />
          <p>
            By <span>John Doe</span> | May 23, 2022
          </p>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button>Read More</button>
        </section>
      </section>
      {/* All Posts */}
      <section>
        <h2>All Posts</h2>
        <AllPostsList />
      </section>
    </section>
  );
}
