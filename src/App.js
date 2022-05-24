import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Sidebar from "./components/SidebarMain";
import Ano from "./projects/Ano";

import "./App.css";

function App() {
  // const rgb = [255, 0, 0];

  // Randomly change to showcase updates
  // setInterval(setContrast, 1000);

  

  function setContrast() {
    // Randomly update colours
    // rgb[0] = Math.round(Math.random() * 255);
    // rgb[1] = Math.round(Math.random() * 255);
    // rgb[2] = Math.round(Math.random() * 255);

    // http://www.w3.org/TR/AERT#color-contrast
    // const brightness = Math.round(
    //   (
    //     parseInt(rgb[0]) * 299 +
    //     parseInt(rgb[1]) * 587 +
    //     parseInt(rgb[2]) * 114) /
    //     1000
    // );

  //  let textColour = "";

  //   if(document.body.style.backgroundColor === "000000") {
  //     textColour = "#ffffff";
  //   }
  //   else {
  //     textColour = "#000000"
  //   } 
  //   return document.body.style.color = textColour;

        // if ( brightness < 70 ) {
        //   textColour = "blue";
        // } 
        // else {
        //   textColour = "red";
        // }

    // const textColour = brightness > 125 ? "blue" : "pink";

let textColour = '';

    const backgroundColour = window.getComputedStyle(document.body, null).getPropertyValue('background-color');


        if (backgroundColour === "#000000" || "black" || "rgb(255, 255, 255)" ) {
          textColour = "#ffffff";
          document.body.style.color = textColour;
        } else {
          textColour = "#000000";
          document.body.style.color = textColour;
        } 

        console.log("text", textColour, "background", backgroundColour)

    // const backgroundColour = brightness < 125 ? "white" : "black";
    // const backgroundColour = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

    // ("#all").css("color", textColour);
    // ("#all").css("background-color", backgroundColour);

    // let setup = document.querySelector('#setup');
    // setup.textContent = textColour;
    // setup.style.backgroundColour = backgroundColour;
    
    // document.body.style.backgroundColor = backgroundColour;

    

  }

  setContrast()

  // -----------------

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
