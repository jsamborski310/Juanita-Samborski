import React, { useEffect } from "react";
import Carousel from "../components/ProjectsCarousel";
import proProjectList from "../data/proProjectsList.json";
import useMediaQuery from "../hooks/useMediaQuery";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Bolivar() {
  // FOR LAYING DOWN THE UI
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.saveStyles(".desktop");
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to("#layoutImages", {
          scrollTrigger: {
            trigger: "#layoutImages",
            start: "top top",
            // end: "+=100%",
            // pinSpacing: "true",
            pin: ".project__inner-layout-container",
            end: "bottom bottom",
            // pin: ".project__black-background",

            scrub: true,
            nullTargetWarn: false,
            // markers: "true",
          },
        });
      },
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.saveStyles(".desktop");
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to("#layoutImages", {
          scrollTrigger: {
            trigger: "#layoutImages",
            start: "top top",
            // end: "+=100%",
            // pinSpacing: "true",
            pin: "#layoutContent",
            end: "bottom bottom",

            scrub: true,
            nullTargetWarn: false,
            // markers: "true",
          },
        });
      },
    });
  }, []);

  // FOR CAROUSEL (See Hooks)
  const isMobile = useMediaQuery("(min-width:991px)");

  // ----------------------------------

  return (
    <div>
      {/* HEADER */}
      <section className="project__container">
        <img
          className="project__main-image"
          src={process.env.PUBLIC_URL + "/images/Bolivar-LAB.jpg"}
          alt="Friends eating fries and pizza."
        />
        <img
          className="project__main-image-abstract"
          src={process.env.PUBLIC_URL + "/images/square-squared-grid.png"}
          alt="Abstract. Grid of squares."
        />

        <div className="project__main-info d-flex align-items-center">
          <p className="project__main-project-number">05</p>
          <h1 className="project__main-title">Bolivar Threads</h1>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <div className="project__details-container">
        <div className="row g-5 pb-5">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="project__details-section">
              <h4>Client</h4>
              <p>Bolivar Threads</p>
            </div>
            <div className="project__details-section">
              <h4>Business Type</h4>
              <p>Monogram eCommerce Shop</p>
            </div>
            <div className="project__details-section">
              <h4>Website</h4>
              <p>bolivarthreads.com</p>
            </div>
            <div className="project__details-section">
              <h4>Completed</h4>
              <p>2019</p>
            </div>
            <div className="project__details-section">
              <h4>Status</h4>
              <p>Managed and maintained by Bolivar Threads</p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-7">
            <p>
              In small-town Ellensburg, Washington, food delivery options were
              limited. Two college friends endeavored to fill that gap. They put
              together a simple one page website and provided a phone number for
              customers to text their order from any restaurant in the
              surrounding area. With their exceptional and reliable customer
              service, word-of-mouth fueled the growth of the business.
            </p>
            <p>
              After several years of success, Ano Delivery was ready to expand.
              They reached out to a talented backend developer to build out a
              platform that would streamline their process, to make it easy for
              customers to place their order, restaurants to receive the order,
              and drivers to deliver the order.
            </p>
            <p>
              That backend developer, in turn, reached out to me to create a
              design that was simple, cohesive, and user-friendly, and to
              implement it on the front-end.
            </p>
          </div>
        </div>

        {/* CONTRIBUTIONS */}
        <div className="row d-flex justify-content-end mt-5 mb-5 project__contribution-container">
          <img
            src={process.env.PUBLIC_URL + "/images/abstract-plus-grid-2.png"}
            alt="Grid of plus symbol."
            className="project__contribution-image"
          />

          <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <h4 className="mb-5">Contributions</h4>

            <div className="row g-5 pt-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 project__contributions-item">
                <p>Website Design</p>
                <hr />
                <p>Wireframing</p>
                <hr />
                <p>UI Design</p>
                <hr />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 project__contributions-item">
                <p>UX Flow</p>
                <hr />
                <p>WordPress Development</p>
                <hr />
                <p>CSS</p>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* THE SETUP */}
        <div className="row mt-5 pb-5 g-5 d-flex align-items-center">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 pe-7">
            <h4 className="mb-5">The Set Up</h4>
            <p>
              The environment was established by the backend developer. With
              many years of experience in the field, he worked with a language
              and a framework that would support the needs of the project and
              ensure stability.
            </p>
            <p>
              Before implementing the design created in Adobe XD on the
              front-end, I updated an outdated version of Bootstrap, cleaned up
              and restructured the existing HTML and CSS.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 project__tools-box">
            <img
              src={
                process.env.PUBLIC_URL + "/images/abstract-diagonal-square.png"
              }
              alt="Grid of diagonal lines in square."
              className="project__tools-image-background"
            />

            <img
              src={
                process.env.PUBLIC_URL + "/images/abstract-squares-corner.png"
              }
              alt="Grid of plus symbol."
              className="project__tools-image"
            />

            <h4 className="mb-5">Environment & Tools</h4>
            <ul className="project__tool-list">
              <li>WordPress</li>
              <li>Elementor</li>
              <li>WPRocket</li>
              <li>CSS</li>
              <li>Adobe XD</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>

        {/* BOLIVAR OVERVIEW */}
        {/* <div className="container" style={{ height: "100vh", position: "relative" }}> */}
          <div className="row" 
          // style={{ height: "100vh" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar.png"}
              alt="Bolivar word."
              // className="project__tools-image"
              // style={{ position: "absolute", zIndex: "0", width: "70%", top: "-35vh", left: "-40px" }}
              style={{ width: "70%", marginLeft: "-10px" }}
            />

            <div className="col-12 col-sm-12 col-md-6 col-lg-6"></div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6"
              style={{ marginBottom: "150px" }}
            >
              <h4 className="mb-5">Loren Ipsum</h4>
              <p>
                Before implementing the design created in Adobe XD on the
                front-end, I updated an outdated version of Bootstrap, cleaned
                up and restructured the existing HTML and CSS.
              </p>
            </div>
            </div>

            {/* IMAGES OF THREADS */}
            <div className="project__bolivar-threads-images" style={{ position: "relative" }}>
              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-threads-1.png"}
                alt="Bolivar word."
                // className="project__tools-image"
                style={{
                  position: "absolute",
                  width: "40%",
                  left: "-2vw",
                  top: "-15vh",
                  boxShadow: "rgb(0 0 0 / 22%) 0px 3px 50px",
                  zIndex: "0",
                }}
              />

              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-threads-2.png"}
                alt="Bolivar word."
                // className="project__tools-image"
                style={{
                  position: "absolute",
                  left: "20vh",
                  zIndex: "30",
                  width: "70vw",
                  boxShadow: "rgb(0 0 0 / 22%) 0px 3px 50px",
                }}
              />

              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-threads-3.png"}
                alt="Bolivar word."
                // className="project__tools-image"
                style={{
                  position: "absolute",
                  top: "30vh",
                  zIndex: "20",
                  width: "60vw",
                  boxShadow: "rgb(0 0 0 / 22%) 0px 3px 50px",
                }}
              />
            </div>
          {/* </div> */}
        {/* </div> */}

        {/* PRODUCT PICTURES */}

        {/* <div className="container" style={{position: "relative"}}> */}
          <div className="row mt-5 mb-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-7">
              <h4 className="mb-5">Loren Ipsum</h4>
              <p>
                Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-5"></div>
          </div>

          {/* --images-- */}
          <div className="row d-flex g-3 align-contents-end">
            <div className="col-6 col-md-2 col-lg-2"></div>
            <div className="col-6 col-md-2 col-lg-2"></div>

            <div className="col-6 col-md-2 col-lg-2">
              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-product-1.png"}
                alt="Bolivar word."
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-product-2.png"}
                alt="Bolivar word."
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-product-3.png"}
                alt="Bolivar word."
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-6 col-md-2 col-lg-2">
              <img
                src={process.env.PUBLIC_URL + "/images/Bolivar-product-4.png"}
                alt="Bolivar word."
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        {/* </div> */}

        {/* STYLE GUIDE */}
        <div className="pt-5 pb-5 project__style-guide-box">
          <div id="desc">
            <h4 className="mb-5">Style Guide</h4>
            <p>
              The color pallete was inspired by the company's logo. Typography
              and font styles were selected for simplicity and readability.
            </p>
          </div>
          <div id="blank"></div>

          <div id="typo" className="mt-5">
            <h3 className="mb-5">Typeface</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-Typography-1.png"}
              width="50%"
              alt="Screenshots of typeface."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-Typography-2.png"}
              width="50%"
              alt="Screenshots of typeface."
            />
          </div>

          <div id="typoHeading">
            <h3 className="mb-5 mt-5">Styles</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-styles.png"}
              // width="70%"
              alt="Screenshots of font styles."
            />
          </div>
          <div id="comp">
            <h3 className="mb-5">Colors</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-colors.png"}
              width="100%"
              alt="Screenshots of colors. Yellow, black, gray, and white."
            />
          </div>

          <div id="button">
            <h3 className="mb-5 mt-5">Buttons</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-buttons.png"}
              width="70%"
              alt="Screenshots of buttons."
            />
          </div>
        </div>
      </div>

      {/* ORGANIZING PRODUCTS OVERVIEW */}

      <div className="project__details-container">
        <div className="row mt-5 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5"></div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-7 pb-5">
            <h4 className="mb-5">Loren Ipsum</h4>
            <p>
              Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <img
          src={
            process.env.PUBLIC_URL + "/images/Bolivar-Organizing-Products.png"
          }
          width="100%"
          alt="Screenshots of buttons."
        />
      </div>

      {/* LAYING DOWN THE DESIGN */}

      <div id="mainContainer" className="project__layout-container clearfix">
        {/* <div
          // id="blackContainer" className="project__black-background"
          id="innerLayoutContainer"
          className="project__inner-layout-container"
        ></div> */}

        <div id="layoutContainer" className="project__layout-container-inner">
          <div id="layoutContent" className="project__layout-desc">
            <div id="description" className="project__layout-content-inner">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/abstract-square-and-dots.png"
                  }
                  alt="Screenshots of original website structure."
                  className="project__layout-description-image"
                />

                <h4 className="mb-5">Laying Down the UI</h4>
                <p>
                  Loren ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <div id="layoutImages" className="project__container-images">
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-home.png"}
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery home page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-shop.png"}
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery restaurant page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-product-page.png"}
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery restaurant page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-about.png"}
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery cart page."
            />
          </div>
        </div>
      </div>

      {/* DESIGN DETAILS */}
      <div className="project__details-container row align-content-center pt-5 pb-5 ">
        <div
          className="
          col-sm-12 col-md-6 col-lg-6
          order-sm-2 order-md-1 order-lg-1
        "
        ></div>
        <div
          className="
          col-sm-12 col-md-6 col-lg-6
          order-sm-1 order-md-2 order-lg-2
        "
        >
          <h4 className="mb-5">Loren Ipsum</h4>
          <p>
            Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>

      {/* ADDITIONAL PROJECT IMAGES */}
      <div
        className="project__details-container project__additional-container row align-items-center d-flex g-5"
        style={{ minHeight: "100vh", minHeight: "-webkit-fill-available", marginBottom: "100px" }}
      >
        <div className="col-sm-12 col-md-9 col-lg-9" style={{ zIndex: "10" }}>
          <img
            src={process.env.PUBLIC_URL + "/images/Bolivar-Customize-Bag.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
          />
        </div>
        <div
          className="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center"
          style={{ zIndex: "10" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Bolivar-text-layers.png"}
            className="img-fluid mb-5 project__images"
            alt="Ano Delivery cart page."
          />
        </div>

        <img
          src={
            process.env.PUBLIC_URL + "/images/abstract-grid-dashed-lines.png"
          }
          alt="Screenshots of original website structure."
          className="project__additional-abstract-image"
        />
      </div>

      {/* MORE PROJECTS CAROUSEL */}

      <div className="project__details-container project__carousel">
        {isMobile ? (
          <Carousel show={2}>
            {proProjectList.map(({ id, image, title, number, role }) => (
              <div className="project__more-container">
                <div key={id} style={{ padding: "50px" }}>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt={title}
                    className="project__more-images"
                  />
                  <div className="d-flex align-items-center">
                    <p className="project__more-number pe-4">{number}</p>
                    <div>
                      <h4>{title}</h4>
                      <p>{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel show={1}>
            {proProjectList.map(({ id, image, title, number, role }) => (
              <div className="project__more-container">
                <div key={id} style={{ padding: "50px" }}>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt={title}
                    className="project__more-images"
                  />
                  <div className="d-flex align-items-center">
                    <p className="project__more-number pe-4">{number}</p>
                    <div>
                      <h4>{title}</h4>
                      <p>{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>

      {/* END */}
    </div>
  );
}
