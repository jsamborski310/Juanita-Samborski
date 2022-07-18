import React from "react";
import toolkitIcons from "../../../data/toolkit.json";

export default function Toolkit() {
  return (
    <section id="toolkit" className="toolkit__container anchor">

      {/* Abstract Images */}
      <div className="toolkit__abstract-image-left-angle">
        <img
          src={process.env.PUBLIC_URL + "/images/box-angle.png"}
          alt="Corner lines."
          width="150px"
          height="auto"
        />
      </div>

      <div className="toolkit__abstract-image-right-angle">
        <img
          src={process.env.PUBLIC_URL + "/images/box-angle-right.png"}
          alt="Corner lines."
          width="150px"
          height="auto"
        />
      </div>

      <div className="toolkit__abstract-image-box">
        <img
          src={process.env.PUBLIC_URL + "/images/boxed-angled-lines.png"}
          alt="Abstract box with repeated lines angled."
          width="400px"
          height="400px"
        />
      </div>

      {/* Section Title */}
      <div className="row toolkit__row">
        <div className="col col-12 col-lg-3 col-md-3 col-sm-12 toolkit__title">
          <h1>Toolkit</h1>
        </div>

        <div className="col col-12 col-lg-2 col-md-2 col-sm-12 toolkit__subtitle">
          <h3>Experience</h3>
        </div>

        {/* Skills Icons */}
        <div className="col col-12 col-lg-7 col-md-7 col-sm-12 toolkit__icon-container">
          {toolkitIcons.map(({ id, altText, image }) => (
            <div key={id}>
              <img src={process.env.PUBLIC_URL + image} alt={altText} width="auto" height="50px" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
