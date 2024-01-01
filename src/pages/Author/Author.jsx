import React, { useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import sites from "../../components/Blog/AllSections/sites";
import Hero from "../../components/Author/Hero/Hero";
import Posts from "../../components/Author/Posts/Posts";

function Author() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  const { authorId } = useParams();
  const author = sites.find((site) => site.id === Number(authorId));

  return (
    <main>
      <Link to={backLinkHref.current}>&#8592; Go Back</Link>
      <Hero author={author} />
      <Posts author={author}  />
    </main>
  );
}

export default Author;
