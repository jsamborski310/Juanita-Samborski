import React from "react";

export default function Projects() {
  return (
    <section className="projects__container">

      <div className="projects__title">
        <div className="projects__corner-top"></div>
        <div className="projects__corner-left"></div>

        <h1 className="projects__heading">projects</h1>

        <div className="projects__corner-rContainer">
          <div className="projects__corner-right"></div>       
          <div className="projects__corner-bottom"></div> 
        </div>
      </div>

  
      <div className="row align-items-end projects__hero-columns">
      <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="p-5 ml-5 projects__overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6"></div>
      </div>


    </section>
  );
}
