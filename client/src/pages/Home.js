import React from 'react'
import Header from '../components/Home/Header';
import About from "../components/Home/About"
import Toolkit from "../components/Home/Toolkit";
import PersonalProjects from '../components/Home/PersonalProjects'
import Contact from "../components/Home/Contact";
import Sidebar from "../components/Home/Sidebar"
import ProfessionalProjects from '../components/Home/ProfessionalProjects';

export default function Home() {
  return (
    <div style={{backgroundColor:"black"}}>
      <Sidebar/>
      <Header/>
      <About/>
      <ProfessionalProjects/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </div>
  )
}
