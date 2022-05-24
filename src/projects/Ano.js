import React from "react";

export default function Ano() {
  return (
    <div>

      {/* HEADER */}
      <section className="project__container">
          <img 
            className="project__main-image"
            src={process.env.PUBLIC_URL + "/images/Ano-Delivery.jpg"} 
            alt="Friends eating fries and pizza." 
          />
          <img 
            className="project__main-image-abstract"
            src={process.env.PUBLIC_URL + "/images/square-squared-grid.png"} 
            alt="Abstract. Grid of squares."
          />

          <div className="project__main-info d-flex align-items-center">
            <p className="project__main-project-number">01</p>
            <h1 className="project__main-title">Ano Delivery</h1>
          </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <div className="project__details-container">
        <div className="row">
            <div className="col-5">
                <h3>Client</h3>
                <p>Ano Delivery</p>

            </div>
            <div className="col-7">

            </div>
        </div>
        </div>

    </div>
  );
}
