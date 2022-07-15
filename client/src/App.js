import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Project from "./pages/Projects";
import Sidebar from "./components/SidebarMain";

import ContactMain from "./components/ContactMain";

import "./App.css";
import FooterMain from "./components/FooterMain";

// Project Pages
import Ano from "./projects/Ano";
import Bolivar from "./projects/Bolivar"
import FileEvictions from "./projects/FileEvictions";

function App() {
 
  let location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? null : <Sidebar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/project/ano-delivery" element={<Ano />} />
        <Route path="/project/bolivar-threads" element={<Bolivar />} />
        <Route path="/project/file-evictions" element={<FileEvictions />} />
      </Routes>
      {location.pathname === "/" ? null : <ContactMain/>}
      {location.pathname === "/" ? null : <FooterMain />}
    </div>
  );
}

export default App;
