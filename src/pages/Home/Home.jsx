import React from "react";
import { Hero } from "./Hero/Hero";
import { Feature } from "./Feature/Feature";
import { About } from "./About/About";
import { Category } from "./Category/Category";
import { Start } from "./Start/Start";
import { Authors } from "./Authors/Authors";
import { Logo } from "./Logo/Logo";
import { Reviews } from "./Reviews/Reviews";
import { Join } from "./Join/Join";

function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <About />
      <Category />
      <Start />
      <Authors />
      <Logo />
      <Reviews />
      <Join />
    </div>
  );
}

export default Home;
