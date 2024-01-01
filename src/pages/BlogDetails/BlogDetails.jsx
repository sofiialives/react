import React, { useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Preview from "../../components/BlogDetails/StartBlog/Preview";
import Image from "../../components/BlogDetails/Image/Image";
import Blog from "../../components/BlogDetails/BlogSection/Blog";
import Other from "../../components/BlogDetails/OtherBlogs/Other";
import { Join } from "../../components/Home/Join/Join";

function BlogDetails() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  const { blogId } = useParams();

  return (
    <main>
      <Link to={backLinkHref.current}>&#8592; Go Back</Link>
      <Preview blogId={blogId} />
      <Image blogId={blogId} />
      <Blog blogId={blogId} />
      <Other />
      <Join />
    </main>
  );
}

export default BlogDetails;
