import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Ano() {

  console.clear();

  // ScrollTrigger.create({
   
  //   // scroller: "#mainContainer",
  //   // trigger: "#description",
  //   trigger: "#layoutContainer",
  //   start: "top 15px",
  //   endTrigger: "#layoutContainer",
  //   // end: "+=1000",

  //   end: "bottom bottom",
  //   // pin: true,
  //   // pin: true,
  //   // pinnedContainer: '#layoutContainer',
  //   // pinType: "fixed",
  //   // pinType: "transform",
  //   pin: "#layoutContainer",
  //   // pin: ".project__layout-content-inner",
   
  //   // pinSpacing: false,
  //   // scrub:1,
  //   scrub:true,
  //   nullTargetWarn: false, 
  //   // markers: "true"
  // });

  // ScrollTrigger.create({

  //   trigger: "#layoutContainer",
  //   start: "top top",
  //   // endTrigger: "#layoutContainer",
  //   endTrigger: "#layoutImages",
  //   // end: "+=1000",
  //   end: "bottom bottom",
  //   // pinnedContainer: "#mainContainer",
  //   pin: "#layoutContainer",
  //   scrub:true,
  //   nullTargetWarn: false, 
  //   markers: "true",
  // });

  // ScrollTrigger.create({

  //   trigger: "#mainContainer",
  //   start: "top top",
  //   // endTrigger: "#layoutContainer",
  //   endTrigger: "#mainImages",
  //   // end: "+=1000",
  //   end: "bottom bottom",
  //   pinnedContainer: "#layoutContainer",
  //   pin: "#mainContainer",
  //   scrub:true,
  //   nullTargetWarn: false, 
  //   markers: "true",
  // });
  ScrollTrigger.create({

    trigger: "#layoutImages",
    start: "top top",
    // endTrigger: "#layoutImages",
    end: "bottom bottom",
    pin: ".project__black-background",
    scrub: true,
    nullTargetWarn: false, 
    markers: "true"
  });

  ScrollTrigger.create({

    trigger: "#layoutImages",
    start: "top top",
    // endTrigger: "#layoutImages",
    end: "bottom bottom",
    pin: ".project__layout-content-inner",
    scrub: true,
    nullTargetWarn: false, 
    markers: "true"
  });

 

  ScrollTrigger.refresh();


// -----------------------------------
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
        <div className="row g-5 pb-5">
          <div className="col-5">
            <div className="project__details-section">
              <h4>Client</h4>
              <p>Ano Delivery</p>
            </div>
            <div className="project__details-section">
              <h4>Business Type</h4>
              <p>Online food ordering and delivery platform</p>
            </div>
            <div className="project__details-section">
              <h4>Website</h4>
              <p>In progress</p>
            </div>
          </div>

          <div className="col-7">
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
              platform that would streamline orders, and make it easy for
              customers, restaurants, and drivers.
            </p>
            <p>
              That backend developer, in turn, reached out to me to design &
              implement the application so that it was visually appealing and
              usable.
            </p>
          </div>
        </div>

        {/* CONTRIBUTIONS */}
        <div className="row d-flex justify-content-end mt-5 mb-5">
          <div className="col-9">
            <h4>Contributions</h4>

            <div className="row g-5 ps-5 pt-5">
              <div className="col-6">
                <p>Website Redesign</p>
                <hr />
                <p>Wireframing</p>
                <hr />
                <p>UI Design</p>
                <hr />
              </div>
              <div className="col-6">
                <p>Front-End Development</p>
                <hr />
                <p>HTML</p>
                <hr />
                <p>CSS</p>
                <hr />
              </div>
            </div>
          </div>
        </div>

        {/* THE SETUP */}
        <div className="row mt-5 pb-5 g-5 d-flex align-items-center">
          <div className="col-7 pe-7">
            <h4 className="mb-5">The Set Up</h4>
            <p>
              Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="col-5 project__tools-box">
            <h4 className="mb-5">Environment & Tools</h4>
            <ul className="project__tool-list">
              <li>C# programming language</li>
              <li>ASP.NET framework</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Visual Studio</li>
              <li>GitHub</li>
              <li>Adobe XD</li>
            </ul>
          </div>
        </div>

        {/* ORIGINAL STRUCTURE */}

        <div className="row mt-5 mb-5 d-flex align-items-center">
          <div className="col-3"></div>
          <div className="col-6">
            <h4 className="mb-5">Original Structure</h4>
            <p>
              Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="col-3"></div>

          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ano-delivery-original-structure.png"
            }
            alt="Screenshots of original website structure."
          />
        </div>

        {/* STYLE GUIDE */}
        <div className="pt-5 pb-5 project__style-guide-box">
          <div className="project__style-guide-box-desc">
            <h4 className="mb-5">Style Guide</h4>
            <p>
              Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="project__style-guide-blank"></div>

          <div className="mt-5 project__style-guide-typo">
            <h3 className="mb-5">Typeface</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/ano-delivery-typeface.png"}
              width="50%"
              alt="Screenshots of typeface."
            />
            <h3 className="mb-5 mt-5">Styles</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/ano-delivery-styles.png"}
              width="80%"
              alt="Screenshots of font styles."
            />
          </div>
          <div className="project__style-guide-comp">
            <h3 className="mb-5">Colors</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/ano-delivery-colors.png"}
              width="100%"
              alt="Screenshots of colors. Yellow, black, gray, and white."
            />
            <h3 className="mb-5 mt-5">Buttons</h3>
            <img
              src={process.env.PUBLIC_URL + "/images/ano-delivery-buttons.png"}
              width="100%"
              alt="Screenshots of buttons."
            />
          </div>
        </div>
      </div>



      {/* LAYING DOWN THE DESIGN */}
    
        <div id="mainContainer" className="project__layout-container">

        <div id="blackContainer" className="project__black-background"></div>
      
          <div id="layoutContainer" className="project__layout-container-inner">
            
            

              {/* <div className="pt-5 project__layout-images"> */}
                <div 
                id="layoutImages"
                className="project__container-images">
                <img
                  src={process.env.PUBLIC_URL + "/images/ano-delivery-home.png"}
                  className="img-fluid w-100 mb-5 project__images"
                  alt="Ano Delivery home page."
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/ano-delivery-restaurant.png"
                  }
                  className="img-fluid w-100 mb-5 project__images"
                  alt="Ano Delivery restaurant page."
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/ano-delivery-cart.png"}
                  className="img-fluid w-100 mb-5 project__images"
                  alt="Ano Delivery home page."
                />
                </div>
              {/* </div> */}


              <div id="layoutContent" className="project__layout-desc">
                <div id="description" className="project__layout-content-inner">
                  <h4 className="mb-5">Laying Down the UI</h4>
                  <p>
                    Loren ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
           
          </div>
        </div>
     
     

      {/* DESIGN DETAILS */}
      {/* <div>
        <h4>Loren Ipsum</h4>
        <p>
          Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.         
        </p>
    </div> */}

{/* END */}
    </div>
  );
}
