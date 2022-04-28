import React from "react";
import Header from "./components/Header"
import About from "./components/About"
import Toolkit from "./components/Toolkit";
import PersonalProjects from './components/PersonalProjects'
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar"
import './App.css'

function App() {
  return (
    <>

      <Sidebar/>
      <Header/>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </>
  );
}

export default App;
