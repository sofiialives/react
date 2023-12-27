import React, { useState } from "react";
import item from "./publications";

export function Reviews() {
  const [index, setIndex] = useState(0);

  const changeIndex = (value) => setIndex(index + value);
  const currentItem = item[index];

  return (
    <section>
      <section>
        <p>TESTIMONIALS</p>
        <h2>What people say about our blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </section>
      <section>
        <h3>{currentItem.text}</h3>
        <div>
          <img src={currentItem.img} alt={currentItem.name} />
          <h3>{currentItem.name}</h3>
          <p>{currentItem.city}</p>
        </div>

        <p>
          {index + 1}/{item.length}
        </p>
        <section>
          <button
            type="button"
            disabled={index === 0}
            onClick={() => changeIndex(-1)}
          >
            Back
          </button>
          <button
            type="button"
            disabled={index + 1 === item.length}
            onClick={() => changeIndex(1)}
          >
            Next
          </button>
        </section>
      </section>
    </section>
  );
}
