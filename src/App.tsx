import { useEffect, useState } from "react";
import About from "./About";

import Header from "./Header";
import Home from "./Home";
import Project from "./Project";

import Resume from "./Resume";
import PopUp from "./PopUp";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Card from "./Card";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
