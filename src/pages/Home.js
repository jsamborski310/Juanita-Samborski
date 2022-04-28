import React from 'react'
import Header from '../components/Home/Header';
import About from "../components/Home/About"
import Toolkit from "../components/Home/Toolkit";
import PersonalProjects from '../components/Home/PersonalProjects'
import Contact from "../components/Home/Contact";
import Sidebar from "../components/Home/Sidebar"

export default function Home() {
  return (
    <>
      <Sidebar/>
      <Header/>
      <About/>
      <Toolkit/>
      <PersonalProjects/>
      <Contact/>
    </>
  )
}
