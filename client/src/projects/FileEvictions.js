import React, { useEffect } from "react";
import Carousel from "../components/ProjectsCarousel";
import proProjectList from "../data/proProjectsList.json";
import useMediaQuery from "../hooks/useMediaQuery";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FileEvictions() {
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
          src={process.env.PUBLIC_URL + "/images/FileEvictions-Welcome.png"}
          alt="Friends eating fries and pizza."
        />
        <img
          className="project__main-image-abstract"
          src={process.env.PUBLIC_URL + "/images/square-squared-grid.png"}
          alt="Abstract. Grid of squares."
        />

        <div className="project__main-info d-flex align-items-center">
          <p className="project__main-project-number">02</p>
          <h1 className="project__main-title">FileEvictions</h1>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <div className="project__details-container">
        <div className="row g-5 pb-5">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <div className="project__details-section">
              <h4>Client</h4>
              <p>FileEvictions</p>
            </div>
            <div className="project__details-section">
              <h4>Business Type</h4>
              <p>Software for Evictions.</p>
            </div>
            <div className="project__details-section">
              <h4>Website</h4>
              <p>fileevictions.com</p>
            </div>
            <div className="project__details-section">
              <h4>Completed</h4>
              <p>2022</p>
            </div>
            <div className="project__details-section">
              <h4>Status</h4>
              <p>Company website is completed. Software is in development.</p>
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
                <p>WordPress Development</p>
                <hr />
                <p>Wireframing</p>
                <hr />
                <p>Project Management</p>
                <hr />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 project__contributions-item">
                <p>UI Design</p>
                <hr />
                <p>UX Flow</p>
                <hr />
                <p>HTML & CSS</p>
                <hr />
                <p>Content Writing</p>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* ENVIRONMENT & TOOLS */}
        <div className="row mt-5 pb-5 g-5 d-flex">
          <div className="project__tools-box">
            <img
              src={
                process.env.PUBLIC_URL + "/images/abstract-diagonal-square.png"
              }
              alt="Grid of diagonal lines in square."
              className="project__tools-image-background"
              style={{ right: "-50px" }}
            />

            <img
              src={
                process.env.PUBLIC_URL + "/images/abstract-squares-corner.png"
              }
              alt="Grid of plus symbol."
              className="project__tools-image"
            />

            <h4 className="mb-5">Environment & Tools</h4>
            <ul className="project__tool-list" style={{ columnCount: "3" }}>
              <li>WordPress</li>
              <li>Elementor</li>
              <li>WP Rocket</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Asana</li>
            </ul>
          </div>
        </div>

        {/* THE SETUP */}
        <div className="row mt-5">
          <h4 className="mb-5">The Set Up</h4>
          <p>
            The environment was established by the backend developer. With many
            years of experience in the field, he worked with a language and a
            framework that would support the needs of the project and ensure
            stability.
          </p>
          <p>
            Before implementing the design created in Adobe XD on the front-end,
            I updated an outdated version of Bootstrap, cleaned up and
            restructured the existing HTML and CSS.
          </p>
        </div>
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
                  The user interface was designed for simplicity, so that a user
                  may be able to quickly locate a restaurant, select their meal,
                  and place an order. HTML and CSS were used to implement the
                  new, visually appealing design that enticed users with images
                  of food options.
                </p>
              </div>
            </div>
          </div>

          <div id="layoutImages" className="project__container-images">
            <img
              src={process.env.PUBLIC_URL + "/images/FileEvictions-Home-2.png"}
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery home page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/FileEvictions-Help.png"}
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery restaurant page."
            />
            <img
              src={
                process.env.PUBLIC_URL + "/images/FileEvictions-Upcoming.png"
              }
              className="img-fluid mb-5 project__images"
              alt="Ano Delivery cart page."
            />
          </div>
        </div>
      </div>

      {/* STYLE GUIDE */}

      <div className="project__details-container row align-items-end">
        <div className="row mt-5 mb-5">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 mb-5">
            <h4 className="mb-5">Style Guide</h4>
            <p>
              Although highly skilled in backend development, design and
              front-end development were not in the developers' wheelhouse. So,
              he structured the website with one goal in mind: make it work.
            </p>
          </div>

          <img
            src={
              process.env.PUBLIC_URL + "/images/FileEvictions-StyleGuide.png"
            }
            alt="Screenshots of original website structure."
          />
        </div>
      </div>

      {/* DESIGN DETAILS */}
      <div className="project__details-container row pt-5 pb-5 mt-5">
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
          <h4 className="mb-5">Designing for multiple users</h4>
          <p>
            The platform has three types of users: Customers, Restaurants, and
            Drivers. In addition to ensuring that customers are able to easily
            place an order, I designed a user interface for restaurant owners
            that enabled them to update their store information, and quickly
            view and manage all incoming orders.
          </p>
        </div>
      </div>

      {/* ADDITIONAL PROJECT IMAGES */}
      <div
        className="project__details-container project__additional-container row d-flex align-items-center justify-content-center mb-5"
        style={{ height: "100vh" }}
      >
        <div style={{ zIndex: "10", width: "80%" }}>
          <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-sketch.jpg"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
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

      {/* DASHBOARD DETAILS*/}
      <div className="project__details-container row align-content-center pt-5 pb-5 mt-5">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <h4 className="mb-5">Designing for multiple users</h4>
          <p>
            The platform has three types of users: Customers, Restaurants, and
            Drivers. In addition to ensuring that customers are able to easily
            place an order, I designed a user interface for restaurant owners
            that enabled them to update their store information, and quickly
            view and manage all incoming orders.
          </p>
        </div>
      </div>

      {/* DASHBOARD IMAGES */}

      <div className="project__details-container row align-content-center pb-5 g-5">
        <div className="col-sm-12 col-md-6 col-lg-6">

        <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Dashboard.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
            style={{boxShadow: "0 3px 50px #00000020"}}
          />
        <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Client.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
            style={{boxShadow: "0 3px 50px #00000020"}}
          />
        <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Tasks.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
            style={{boxShadow: "0 3px 50px #00000020"}}
          />

        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 pt-5">

        <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Messages.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
            style={{boxShadow: "0 3px 50px #00000020"}}
          />
        <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Attorney-Agreement.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
            style={{boxShadow: "0 3px 50px #00000020"}}
          />
        <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Attorney-Email.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Ano Delivery active orders page."
            style={{boxShadow: "0 3px 50px #00000020"}}
          />
          
        </div>        

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
