import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Sidebar from "./components/SidebarMain";
import Ano from "./projects/Ano";
import ContactMain from "./components/ContactMain";

import "./App.css";
import FooterMain from "./components/FooterMain";

function App() {
 
  let location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? null : <Sidebar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project/ano-delivery" element={<Ano />} />
      </Routes>
      {location.pathname === "/" ? null : <ContactMain/>}
      {location.pathname === "/" ? null : <FooterMain />}
    </div>
  );
}

export default App;
