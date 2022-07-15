import React from "react";
import proProjectList from "../data/proProjectsList.json";

export default function Projects() {
  return (
    <>
    <div className="projects__container">
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
            Over the years, I've had the opportunity to design and develop websites for a wide range of clients. These projects feature some of my work and shed a bit of light on my process.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6"></div>
        </div>
      </div>

      {/* PROJECTS SCROLL NAVIGATION */}

      {/* PROJECTS LIST */}

      {proProjectList.map(
        ({ id, title, number, image, description, skills, slug }) => (
          <div key={id} className="projects__list-container">
            <div className="row d-flex g-5">

              <div className="
              col-12 col-sm-12 col-md-6 col-lg-6 
              order-2 order-md-1 order-lg-1
              ">
                <h2 className="projects__list-text" style={{ fontSize: "3em" }}>
                  {title}
                </h2>
                <p className="projects__list-text">{description}</p>

                <div className="d-flex projects__skills-container">
                  <ul data-columns="2" className="projects__skills-list">
                    {skills.map((skill) => {
                      return <li>{skill}</li>;
                    })}
                  </ul>
                </div>

                {/* BUTTON */}
                <div className="d-flex justify-content-end mx-5">
                  <div className="primary-button__container dark-btn">
                    <hr className="primary-button__line dark-btn" />
                    <a href={/project/ + slug}>
                      <button className="primary-button dark-btn">
                        Case Study
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div className="
              col-12 col-sm-12 col-md-6 col-lg-6
              order-1 order-md-2 order-lg-2
              ">
                <div className="projects__image-container">
                  <p className="projects__number">{number}</p>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt={title + "project preview"}
                    className="projects__image"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      )}

    </div>
    </>
  );
}
