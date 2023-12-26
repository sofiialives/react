import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import AppBar from "./AppBar/AppBar";

const Home = lazy(() => import("../pages/Home/Home"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

function App() {
  return (
    <div>
      <AppBar />
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index path="/" element={<Home />} />
          <Route path="/blog" element={<About />} />
          <Route path="/about" element={<Blog />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
