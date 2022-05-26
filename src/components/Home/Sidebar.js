import React, {useState, useEffect} from 'react';
import { Offcanvas } from "react-bootstrap";

export default function Sidebar() {

  // Controls offcanvas menu open/close
  const [show, setShow] = useState(false);
  const handleClose = () => setTimeout(() => setShow(false), 1000)
  const handleShow = () => setShow(true);

  useEffect(()=> {
    console.log(show)

  }, [show])

  // --------------------

  return (
    <div className='sidebar__container'>

    {/* Top Right Menu */}
      <div>
        <div className='triangle-topright'></div>

        {/* Top Right Menu Button */}
        <button className='sidebar__topright-menu-button' onClick={handleShow}>
          <img
              src={process.env.PUBLIC_URL + "/images/Menu-Icon.png"}
              alt="Hamburger Menu Icon."
              className='sidebar__menu-icon-top-right'
              height="25px"
            />
          </button>
      </div>

    {/* Sidebar Menu */}
      <div className='sidebar__sidebar'>

      {/* Logo */}
        <div>
        <a href="/" rel='noreferrer' target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/images/Logo.png"}
              alt="Juanita Samborski Logo."
              className='sidebar__logo'
              height="60px"
            />
          </a>
        </div>

      {/* Menu Hamburger */}
        <div className='sidebar__menu-icon-section'>
          <h3 className='sidebar__menu-title'>menu</h3>


      {/* Offset Menu Button Sidebar */}
          <button className='sidebar__menu-button' onClick={handleShow}>
            <img
              src={process.env.PUBLIC_URL + "/images/Menu-Icon.png"}
              alt="Hamburger Menu Icon."
              className='sidebar__menu-icon'
              height="25px"
            />
          </button>

        {/* Offset Menu */}
          <Offcanvas show={show} onHide={handleClose} className="sidebar__offcanvas-start">
            <Offcanvas.Header>

                <div onClick={handleClose} className="borderless-button__container sidebar__close-menu">
                    <hr className="borderless-button__line" />
                    <button className="borderless-button">Close</button>
                </div>

            </Offcanvas.Header>
            <Offcanvas.Body>
           
            <nav>
              <ul className='sidebar__menu-items-list'>
                <li onClick={handleClose}><a href="#home"><h2>Home</h2></a></li>
                <li onClick={handleClose}><a href="#about"><h2>About</h2></a></li>
                <li onClick={handleClose}><a href="#toolkit"><h2>Toolkit</h2></a></li>
                <li onClick={handleClose}><a href="#personalProjects"><h2>Personal Projects</h2></a></li>
                <li onClick={handleClose}><a href="#contact"><h2>Contact</h2></a></li>
              </ul>
            </nav>

            </Offcanvas.Body>
          </Offcanvas>

      </div>

      {/* Footer Icons */}
        <div className='sidebar__menu-footer-icons'>

        <a href="https://github.com/jsamborski310" rel='noreferrer' target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/icons/github-black.png"}
            alt="Github Icon."
            className='sidebar__menu-contact-icon' 
          />
        </a>

        <a href="https://www.linkedin.com/in/juanita-samborski/" rel='noreferrer' target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/icons/linkedin-in-brands.png"}
            alt="Linkedin Icon."
            className='sidebar__menu-contact-icon'         
          />  
        </a>

        <a href="mailto:juanita@48fourteen.com">
          <img
            src={process.env.PUBLIC_URL + "/icons/email-add-black.png"}
            alt="Email Icon."
            className='sidebar__menu-contact-icon'        
          />  
        </a> 


        <a href="https://twitter.com/SamborskiUp" rel='noreferrer' target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/icons/twitter-brands.png"}
            alt="Twitter Icon."
            className='sidebar__menu-contact-icon'       
          />     
        </a>                 

        </div>
      </div>
      
    </div>
  )
}
