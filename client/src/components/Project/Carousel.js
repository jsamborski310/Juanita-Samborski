import React, { useEffect, useState } from "react";
import "../../css/carousel.css";


export default function Carousel(props) {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }
    if (diff < -5) {
      prev();
    }
    setTouchPosition(null);
  };

  // ----------------------

  return (
    <section>
      {/* HEADER  */}
      <div className="project__details-container project__more-projects">
        <div className="project__more-projects-heading d-grid">
          <h6>Projects</h6>
          <h1>More</h1>
        </div>
        {/* Button */}
        <div className="d-flex justify-content-end mx-5">
          <div className="primary-button__container dark-btn">
            <hr className="primary-button__line dark-btn" />
            <a href="/projects">
              <button className="primary-button dark-btn">Next Project</button>
            </a>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}

      <div className="carousel-container">
        <div className="carousel-wrapper">
          {currentIndex > 0 && (
            <button onClick={prev} className="left-arrow">
              &lt;
            </button>
          )}
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              {children}
            </div>
          </div>

          {currentIndex < length - show && (
            <button onClick={next} className="right-arrow">
              &gt;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
