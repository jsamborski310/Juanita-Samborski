import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Sidebar from "./components/SidebarMain";
import Ano from "./projects/Ano";

import "./App.css";

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
    </div>
  );
}

export default App;
