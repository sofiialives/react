import React from "react";
import { Hero } from "../../components/About/Hero/Hero";
import { Overview } from "../../components/About/Overview/Overview";
import { MissionVision } from "../../components/About/Mission/MissionVision";
import { Team } from "../../components/About/Team/Team";
import { Start } from "../../components/About/Start/Start";
import { Authors } from "../../components/About/Authors/Authors";
import { Join } from "../../components/Home/Join/Join";

function About() {
  return (
    <main>
      <Hero />
      <Overview />
      <MissionVision />
      <Team />
      <Start />
      <Authors />
      <Join />
    </main>
  );
}

export default About;
