import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Goals from "./Pages/Planning/Goals";
import ProductLayout from "./Pages/Products/ProductLayout";
import BlogDetailsPage from "./Pages/Blog/BlogDetailsPage";
import BlogPage from "./Pages/Blog/BlogPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="services/:slug" element={<Services />} />
        <Route path="goals/:slug" element={<Goals />} />
        <Route path="/products/:slug" element={<ProductLayout />} />
        <Route path="blog" element={<BlogPage />} />{" "}
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="contactus" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
