import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import AppBar from "./AppBar/AppBar";
import { Footer } from "./Footer/Footer";

const Home = lazy(() => import("../pages/Home/Home"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Privacy = lazy(() => import("../pages/PrivacyPolicy/Privacy"));

function App() {
  return (
    <div>
      <AppBar />
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
