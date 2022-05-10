import React from "react";
import proProjectList from "../data/proProjectsList.json";

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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6"></div>
        </div>
      </div>

      {/* PROJECTS SCROLL NAVIGATION */}

      {/* PROJECTS LIST */}

      {proProjectList.map(
        ({ id, title, number, image, description, skills }) => (
          <div key={id} className="projects__list-container">
            <div className="row d-flex g-5">
              <div className="col-6">
                <h2 className="project__list-text" style={{ fontSize: "3em" }}>{title}</h2>
                <p className="project__list-text">{description}</p>

                <div className="d-flex projects__skills-container">
                  <ul className="projects__skills-list">
                    {skills.slice(0, 2).map((skill) => {
                      return <li>{skill}</li>;
                    })}
                  </ul>

                  <ul className="projects__skills-list">
                    {skills.slice(2).map((skill) => {
                      return <li>{skill}</li>;
                    })}
                  </ul>
                </div>

                {/* BUTTON */}
                <div className="d-flex justify-content-end mx-5">
                <div className="primary-button__container dark-btn">
                  <hr className="primary-button__line dark-btn" />
                  <a href="/projects" target="_blank">
                    <button className="primary-button dark-btn">Case Studies</button>
                  </a>
                </div>
                </div>

              </div>

              <div className="col-6">

                <div className="project__image-container">
                  <h2 className="project__number">{number}</h2>
                <img
                  src={process.env.PUBLIC_URL + image}
                  alt={title + "project preview"}
                  className="project__image"
                />
                </div>



              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}
