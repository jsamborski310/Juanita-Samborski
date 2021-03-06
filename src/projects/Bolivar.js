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
          src={process.env.PUBLIC_URL + "/images/Bolivar-LAB.jpg"}
          alt="Two women, each with a purse on their lap."
        />
        <img
          className="project__main-image-abstract"
          src={process.env.PUBLIC_URL + "/images/square-squared-grid.png"}
          alt="Abstract. Grid of squares."
        />

        <div className="project__main-info d-flex align-items-center">
          <p className="project__main-project-number">03</p>
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
              In Houston, Texas, Bolivar Threads began as a passion project,
              personalizing bags and shirts for family and friends for their
              special events. Soon, demand began to grow and the owner realized
              she was in need of a streamlined process. Taking orders in person
              or over the phone became time-consuming and difficult to track.
            </p>
            <p>
              Bolivar Threads reached out to me to design and develop an
              eCommerce store that would allow customers to quickly select a
              product, customize it, and place an order. It was also important
              for the client to be able to maintain and update the website on
              their own over time.
            </p>
            <p>After several meetings with the client, I began setting up.</p>
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
              Once the domain was acquired and hosting established, I installed
              WordPress, a Content Management System. This CMS allows for growth
              and expansion, and because it's open-source, there are a plethora
              of compatible plugins, allowing the company to launch the website
              in a short period of time.
            </p>
            <p>
              Based on the project requirements, I installed and configured
              several plugins that provided the needed built-in functionality.
              This included Elementor Pro Fancy Product Designer, WooCommerce,
              and more.
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
        <div className="row">
          <img
            src={process.env.PUBLIC_URL + "/images/Bolivar.png"}
            alt="Bolivar word."
            style={{ width: "70%", marginLeft: "-10px" }}
          />

          <div className="col-12 col-sm-12 col-md-6 col-lg-6"></div>
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6"
            style={{ marginBottom: "150px" }}
          >
            <h4 className="mb-5">Starting from Scratch</h4>
            <p>
              To get a good feel for the clients' business, style, and goals, I
              visited her workspace. Though I am no photographer, I took a few
              pictures of her equipment for design inspiration.
            </p>
          </div>
        </div>

        {/* IMAGES OF THREADS */}
        <div
          className="project__bolivar-threads-images"
          style={{ position: "relative" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Bolivar-threads-1.png"}
            alt="Side view of thread spools. Colors: gold, pink, white."
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
            alt="Top view of thread spools. Colors: red, pink, burgandy, yellow, white."
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
            alt="Monogram machine."
            style={{
              position: "absolute",
              top: "30vh",
              zIndex: "20",
              width: "60vw",
              boxShadow: "rgb(0 0 0 / 22%) 0px 3px 50px",
            }}
          />
        </div>

        {/* PRODUCT PICTURES */}
        <div className="row mt-5 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-7">
            <h4 className="mb-5">Getting to know the Products</h4>
            <p>
              Good product images go a long way. With no photographer at hand, I
              took a few pictures of the products available for sale and
              photoshopped the background, to give them a clean, cohesive
              appearance.
            </p>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-5"></div>
        </div>

        {/* --images-- */}
        <div className="row d-flex g-3 pb-5 align-contents-end">
          <div className="col-6 col-md-2 col-lg-2"></div>
          <div className="col-6 col-md-2 col-lg-2"></div>

          <div className="col-6 col-md-2 col-lg-2">
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-product-1.png"}
              alt="Laptop back with the word computer and charger on the front."
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-product-2.png"}
              alt="Pouch with the words Wet Beach Stuff."
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-product-3.png"}
              alt="Pouch with the words My Toiletry."
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-6 col-md-2 col-lg-2">
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-product-4.png"}
              alt="Beauty box with a black bow."
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* STYLE GUIDE */}
        <div className="pt-5 pb-5 mt-5 project__style-guide-box">
          <div id="desc">
            <h4 className="mb-5">Style Guide</h4>
            <p>
              For the color pallete, I went with colors that were both bold and
              soft. Typography and font styles were selected for simplicity and
              readability, but also for boldness.
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
        <div className="row mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5"></div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-7 pb-5">
            <h4 className="mb-5">Getting Organized</h4>
            <p>
              There was a long list of products available to be customized. I
              organized them into specific categories to make it easier for the
              User to find their next favorite item.
            </p>
          </div>
        </div>

        <img
          src={
            process.env.PUBLIC_URL + "/images/Bolivar-Organizing-Products.png"
          }
          width="100%"
          alt="Website navigation, displaying list of products in specific categories."
        />
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
                  alt="Abstract of square with an X and dots."
                  className="project__layout-description-image"
                />

                <h4 className="mb-5">Laying Down the UI</h4>
                <p>
                  After sketching out a rough wireframe of the main pages, I
                  used Adobe XD to design the website. Once the client was
                  excited about the look, I got to work implementing the design
                  and developing the website using the plugins I had installed
                  and configured. Functionality was added to allow the User to
                  search for products by name or category, filter by price, add
                  an item to a wish list, and more.
                </p>
              </div>
            </div>
          </div>

          <div id="layoutImages" className="project__container-images">
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-home.png"}
              className="img-fluid mb-5 project__images"
              alt="Bolivar Threads home page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-shop.png"}
              className="img-fluid mb-5 project__images"
              alt="Bolivar Threads Shop page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-product-page.png"}
              className="img-fluid mb-5 project__images"
              alt="Bolivar Threads single product page."
            />
            <img
              src={process.env.PUBLIC_URL + "/images/Bolivar-about.png"}
              className="img-fluid mb-5 project__images"
              alt="Bolivar Threads About page."
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
          <h4 className="mb-5">Customizing Products</h4>
          <p>
            Not only are Users able to purchase products, they can add their own
            personal touches to them. After customizing the Fancy Product
            Designer plugin to fit the needs of the client, the User is easily
            able to place text on the item, select the font and thread color. An
            image of the customized product is then sent to Bolivar Threads to
            have the item monogrammed before being shipped off.
          </p>
        </div>
      </div>

      {/* ADDITIONAL PROJECT IMAGES */}
      <div
        className="project__details-container project__additional-container row align-items-center d-flex g-5"
        style={{
          // minHeight: "100vh",
          minHeight: "-webkit-fill-available",
          marginBottom: "100px",
        }}
      >
        <div className="col-sm-12 col-md-9 col-lg-9" style={{ zIndex: "10" }}>
          <img
            src={process.env.PUBLIC_URL + "/images/Bolivar-Customize-Bag.png"}
            className="img-fluid w-100 mb-5 project__images"
            alt="A view of the Fancy Product Designer interface, featuring a laptop case that is being customized."
          />
        </div>
        <div
          className="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center"
          style={{ zIndex: "10" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/Bolivar-text-layers.png"}
            className="img-fluid mb-5 project__images"
            alt="Form that allows the User to enter text, select a font, and pick a thread color."
          />
        </div>

        <img
          src={
            process.env.PUBLIC_URL + "/images/abstract-grid-dashed-lines.png"
          }
          alt="Abstract of grid with dashed lines."
          className="project__additional-abstract-image"
        />
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
                  style={{color: "#000000"}}
                  >
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
                  style={{color: "#000000"}}
                  >
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
