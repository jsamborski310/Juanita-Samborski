import React from 'react'
import Header from '../home/components/Header'
import About from "../home/components/About"
import Toolkit from "../home/components/Toolkit";
import PersonalProjects from '../home/components/PersonalProjects'
import Contact from "../home/components/Contact";
import Sidebar from "../home/components/Sidebar"
import ProfessionalProjects from '../home/components/ProfessionalProjects';

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
