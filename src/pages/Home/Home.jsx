import React from "react";
import { Hero } from "../../components/Home/Hero/Hero";
import { Feature } from "../../components/Home/Feature/Feature";
import { About } from "../../components/Home/About/About";
import { Category } from "../../components/Home/Category/Category";
import { Start } from "../../components/Home/Start/Start";
import { Authors } from "../../components/Home/Authors/Authors";
import { Reviews } from "../../components/Home/Reviews/Reviews";
import { Join } from "../../components/Home/Join/Join";
import { Logo } from "../../components/Home/Logo/Logo";

function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <About />
      <Category />
      <Start />
      <Authors />
      <Logo />
      <Reviews />
      <Join />
    </>
  );
}

export default Home;
