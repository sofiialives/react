import React from "react";
import { LogoList } from "./LogoList";

export function Logo() {
  return (
    <section>
      <section>
        <p>
          We are <br /> <span>Featured in</span>
        </p>
      </section>
      <LogoList />
    </section>
  );
}
