import React from "react";

export default function Projects() {
  return (
    <section className="projects__container">
      <div className="projects__header-container">
      {/* HEADER SECTION */}
      {/* -----Page Title----- */}
      <div className="projects__title">
        <div className="projects__corner-top"></div>
        <div className="projects__corner-left"></div>

        <h1 className="projects__heading">projects</h1>

        <div className="projects__corner-rContainer">
          <div className="projects__corner-right"></div>
          <div className="projects__corner-bottom"></div>
        </div>
      </div>

      {/* -----Page Title----- */}
      <div className="row align-items-end projects__hero-columns">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p className="p-5 ml-5 projects__overview">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6"></div>
      </div>
      </div>

    {/* PROJECTS SCROLL NAVIGATION */}

    {/* PROJECTS LIST */}

  <div className="projects__list-container">
    <div className="row d-flex">
      <div className="col-6">
        <h2>Ano Delivery</h2>
        <p>Online food ordering and delivery platform.</p>

        <div className="d-flex">
          <ul className="projects__skills-list">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
          <ul className="projects__skills-list">
            <li>Skill 4</li>
            <li>Skill 5</li>
            <li>Skill 6</li>
          </ul>
        </div>
      </div>
      <div className="col-6">

        <img src={process.env.PUBLIC_URL + "/images/Ano-Delivery.jpg"} alt="" />

      </div>
    </div>
  </div>

    </section>
  );
}
