import React from "react";

export default function About() {
  return (
    <section id="about" className="about__container anchor">

      {/* Abstract Images */}
      <div className="about__container-background">
        <img
          src={process.env.PUBLIC_URL + "/images/abstract-gridLines.png"}
          alt="Abstract grid with vertical lines."
          width="400px"
          height="auto"
        />
      </div>

      {/* About Content and Image */}
      <div className="container">
        <div className="row about__row">
            <div className="
                col-lg-6 col-md-6 col-sm-12 col-12 
                order-lg-1 order-md-1 order-sm-2 order-2">
            <p>
                I am forever curious. Interested in the interesting. Perpetually
                looking for ways to create designs that are bold and clean, and
                websites that are intuitive, simple and convenient.
            </p>
            <p>
                Since 2016, I have partnered with incredible non-profit
                organizations, medical associations, and small businesses to design
                and develop websites that streamlines their process, provides them
                with functionality that enhance their operations, and is useful and
                helpful to their users.
            </p>
            </div>
            <div className="
                col-lg-6 col-md-6 col-sm-12 col-12 
                order-lg-2 order-md-2 order-sm-1 order-1">
            <div>
                <img
                src={process.env.PUBLIC_URL + "/images/abstract-js.png"}
                alt="Juanita Samborski looking over shoulder at the river."
                width="400px"
                height="auto"
                />
            </div>
            <div className="primary-button__container">
                <hr className="primary-button__line" />
                <a href="./images/samborski-resume.pdf" download="Samborski Resume" target="_blank">
                  <button className="primary-button">
                    View Resume
                  </button>
                </a>
            </div>
            </div>
        </div>
      </div>

      {/* Scroll to Project Button */}
        <div className="borderless-button__container">
            <hr className="borderless-button__line" />
            <button className="borderless-button">Projects</button>
        </div>
      
    </section>
  );
}
