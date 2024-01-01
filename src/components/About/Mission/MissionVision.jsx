import React from "react";

export function MissionVision() {
  const sections = [
    {
      name: "Our mision",
      title: "Creating valuable content for creatives all around the world",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
    {
      name: "Our Vision",
      title: "A platform that empowers individuals to improve",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.",
    },
  ];
  return (
    <section>
      <ul>
        {sections.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
