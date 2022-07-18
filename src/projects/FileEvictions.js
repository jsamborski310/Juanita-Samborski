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

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to("#layoutImages", {
          scrollTrigger: {
            trigger: "#layoutImages",
            start: "top top",
            pin: ".project__inner-layout-container",
            end: "bottom bottom",
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

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to("#layoutImages", {
          scrollTrigger: {
            trigger: "#layoutImages",
            start: "top top",
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
          alt="Vector of man filling out an application."
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
              With years of experience as a landlord, the client struggled with
              the downside of renting: Evictions. Attorneys are expensive, the
              legal process convoluted, and court delays often resulted in
              greater financial loss. So, he sought out a solution that would
              help other landlords like him.
            </p>
            <p>
              Initially, the client wanted a simple website that would allow
              Users to easily complete forms that would, in turn, generate the
              legal documents required to evict a tenant in the state of New
              Jersey.
            </p>
            <p>And that's where I come in.</p>
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

        {/* THE SETUP */}
        <div className="row mt-5 pt-5 pb-5">
          <h4 className="mb-5">The Set Up</h4>
          <p>
            During several meetings with the client, and many more hours
            research, brainstorming and planning, it became clear this was a
            project much larger than anticipated, with potential that had yet to
            be uncovered.
          </p>
          <p>
            While the original goal may have been to create a simple WordPress
            website with a forms plugin, it wasn't a well-suited solution; there
            were too many limitations. We agreed that a custom solution was
            needed.
          </p>
          <p>
            I set out to build the FileEvictions' website on WordPress. This
            would provide Users with information about the company and details
            about the legal process for evictions. The portal, however, was to
            be built in Vue.js. With my UI designs created in Adobe XD, I helped
            manage a team of developers to begin building the software.
          </p>
        </div>

        {/* ENVIRONMENT & TOOLS */}
        <div className="row mt-5 g-5 d-flex project__fileevictions-tool-box-container">
          <div className="project__tools-box">
            <img
              src={
                process.env.PUBLIC_URL + "/images/abstract-diagonal-square.png"
              }
              alt="Grid of diagonal lines in square."
              className="project__tools-image-background"
              style={{ right: "-50px", top: "-70px" }}
            />

            <img
              src={
                process.env.PUBLIC_URL + "/images/abstract-squares-corner.png"
              }
              alt="Grid of plus symbol."
              className="project__tools-image"
            />

            <h4 className="mb-5">Environment & Tools</h4>
            <ul className="project__tool-list project__fileevictions-tool-list">
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
      </div>

      {/* LAYING DOWN THE DESIGN */}

      <div id="mainContainer" className="project__layout-container clearfix">
        <div id="layoutContainer" className="project__layout-container-inner">
          <div id="layoutContent" className="project__layout-desc">
            <div id="description" className="project__layout-content-inner">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/abstract-square-and-dots.png"
                  }
                  alt="Abstract. Square and dots."
                  className="project__layout-description-image"
                />

                <h4 className="mb-5">Laying Down the UI</h4>
                <p>
                  With a lot of content that needed to be included on the
                  company website, it was important to organize the information
                  being provided. White space, accordions, navigations and other
                  methods were used to reduce eye strain and help with focus. I
                  installed and configured WordPress and plugins that allowed me
                  to quickly build out the frontend.
                </p>
              </div>
            </div>
          </div>

          <div id="layoutImages" className="project__container-images">
            <img
              src={process.env.PUBLIC_URL + "/images/FileEvictions-Home-2.png"}
              className="img-fluid mb-5 project__images"
              alt="FileEvictions Home page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/FileEvictions-Help.png"}
              className="img-fluid mb-5 project__images"
              alt="FileEvictions Help page."
            />
            <img
              src={
                process.env.PUBLIC_URL + "/images/FileEvictions-Upcoming.png"
              }
              className="img-fluid mb-5 project__images"
              alt="FileEvictions Upcoming Features page."
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
              Our custom portal allows our Users, both landlords and attorneys,
              to manage evictions from a dashboard and complete forms. I created
              this style guide so that I could re-use components when designing
              the UI, and later handed it off to the development team.
            </p>
          </div>

          <img
            src={
              process.env.PUBLIC_URL + "/images/FileEvictions-StyleGuide.png"
            }
            alt="FileEvictions Style Guide."
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
          <h4 className="mb-5">It began with several sketches</h4>
          <p>
            Before opening up Adobe XD to design the UI, I began mapping out the
            layout with rough sketches. There were several iterations, but each
            gave the client and I the opportunity to discuss features and
            functionality we wanted Users to have.
          </p>
        </div>
      </div>

      {/* ADDITIONAL PROJECT IMAGES */}
      <div
        className="project__details-container project__additional-container row d-flex align-items-center justify-content-center mb-5"
        style={{ 
          // minHeight: "100vh",
          minHeight: "-webkit-fill-available" 
        }}
      >
        <div style={{ zIndex: "10", width: "80%" }}>
          <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-sketch.jpg"}
            className="img-fluid w-100 mb-5 project__images"
            alt="Three pages with sketches of the FileEvictions portal in the planning phase."
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
          <h4 className="mb-5">A glimpse of the portal</h4>
          <p>
            The FileEvictions portal is quite extensive. It provides Users, both
            landlords and attorneys, with a guided process to file evictions.
            Users can complete tailored forms that generate legal documents, and
            they have access to several organizational tools to make the legal
            process less cumbersome.
          </p>
        </div>
      </div>

      {/* DASHBOARD IMAGES */}

      <div className="project__details-container row align-content-center pb-5 g-5">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Dashboard.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="FileEvictions Dashboard."
            style={{ boxShadow: "0 3px 50px #00000020" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Client.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="FileEvictions Client page."
            style={{ boxShadow: "0 3px 50px #00000020" }}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Tasks.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="FileEvictions Tasks page."
            style={{ boxShadow: "0 3px 50px #00000020" }}
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 project__fileevictions-portal-layout">
          <img
            src={process.env.PUBLIC_URL + "/images/FileEvictions-Messages.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="FileEvictions Messages page."
            style={{ boxShadow: "0 3px 50px #00000020" }}
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/FileEvictions-Attorney-Agreement.png"
            }
            className="img-fluid w-100 mb-5 project__images"
            alt="FileEvictions Attorney onboarding page. Attorney-Client agreement section."
            style={{ boxShadow: "0 3px 50px #00000020" }}
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/FileEvictions-Attorney-Email.png"
            }
            className="img-fluid w-100 mb-5 project__images"
            alt="FileEvictions Attorney onboarding page. Email Communication settings section."
            style={{ boxShadow: "0 3px 50px #00000020" }}
          />
        </div>
      </div>

      {/* MORE PROJECTS CAROUSEL */}

      <div className="project__details-container project__carousel">
        {isMobile ? (
          <Carousel show={2}>
            {proProjectList.map(({ id, image, title, number, role, slug }) => (
              <div className="project__more-container">
                <div key={id} style={{ padding: "50px" }}>
                <a href={/project/ + slug}>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt={title}
                    className="project__more-images"
                  />
                  <div className="d-flex align-items-center"
                  style={{color: "#000000"}}>
                    <p className="project__more-number pe-4">{number}</p>
                    <div>
                      <h4>{title}</h4>
                      <p>{role}</p>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel show={1}>
            {proProjectList.map(({ id, image, title, number, role, slug }) => (
              <div className="project__more-container">
                <div key={id} style={{ padding: "50px" }}>
                <a href={/project/ + slug}>
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt={title}
                    className="project__more-images"
                  />
                  <div className="d-flex align-items-center"
                  style={{color: "#000000"}}>
                    <p className="project__more-number pe-4">{number}</p>
                    <div>
                      <h4>{title}</h4>
                      <p>{role}</p>
                    </div>
                  </div>
                  </a>
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
