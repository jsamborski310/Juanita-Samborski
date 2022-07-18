import React from "react";

export default function Header() {
  return (
    <section id="home" className="header__container anchor">
      {/* Abstract Images */}
      <img
        src={process.env.PUBLIC_URL + "/images/abstract-dots-grid.png"}
        alt="Grid of dots."
        className="header__image-dots-grid"
        height="180px"
      />

      <img
        src={process.env.PUBLIC_URL + "/images/abstract-plus-grid.png"}
        alt="Grid of plus symbol."
        className="header__image-plus-grid"
        height="180px"
      />

      {/* Title */}
      <div className="header__section">
        <div>
          <div className="header__title-designer">
            <div className="square"></div>
            <h1 className="header__title">Designer</h1>
          </div>
          <div className="header__title-developer">
            <div className="square"></div>
            <h1 className="header__title header__title2">Developer</h1>
          </div>
        </div>

        <div>
          <h1 className="header__title-symbol">&</h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row header__skills">
        <div className="col-6 order-sm-2 order-md-1 order-lg-1">
          <div className="borderless-button__container">
            <hr className="borderless-button__line" />
            <button className="borderless-button">Scroll</button>
          </div>
        </div>

        <div
          className="
            col-6 order-sm-1 order-md-2 order-lg-2
            header__bottom-right"
        >
          <div>
            <h3 className="header__skills-subtitle">Savvy With</h3>
            <ul className="header__skills-list">
              <li>Full Stack Development</li>
              <li>WordPress Development</li>
              <li>UX/UI Design</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
