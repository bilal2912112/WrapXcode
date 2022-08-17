import React from "react";
import Navbar2 from "./components/NavBar2/Navbar";
import Navbar from "./components/Navbar/navbar";

import Footer from "./components/Footer/footer";
import Home from "./components/pages/Home/home";
import About from "./components/pages/About/about";
import Portfolio from "./components/pages/Portfolio/portfolio";
import Contact_Us from "./components/pages/Contact_Us/contact";
import Services from "./components/pages/Services/services";
import Faq from "./components/pages/Resources/FAQ/faq";
import Blog from "./components/pages/Resources/Blog/blog";
import WebDesign from "./components/pages/Services/webDesign/webDesign";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact_Us />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/webDesign" element={<WebDesign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
