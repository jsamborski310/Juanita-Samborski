import React, {useState, useEffect} from 'react';
import { Offcanvas } from "react-bootstrap";

export default function SidebarMain() {

  // Controls offcanvas menu open/close
  const [show, setShow] = useState(false);
  const handleClose = () => setTimeout(() => setShow(false), 1000)
  const handleShow = () => setShow(true);

  useEffect(()=> {
    console.log(show)

  }, [show])

  // --------------------

  return (
    <div className='sidebarMain__container'>

    {/* Top Right Menu */}
      <div className='sidebarMain__triangle-container'>
        <div className='sidebarMain__triangle-topright'></div>

        {/* Top Right Menu Button */}
        <button className='sidebarMain__topright-menu-button' onClick={handleShow}>
          <img
              src={process.env.PUBLIC_URL + "/icons/Menu-icon-white.png"}
              alt="Hamburger Menu Icon."
              className='sidebarMain__menu-icon-top-right'
              height="25px"
            />
          </button>
      </div>

    {/* Sidebar Menu */}
      <div className='sidebarMain__sidebar'>

      {/* Logo */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Logo.png"}
            alt="Juanita Samborski Logo."
            className='sidebarMain__logo'
            height="60px"
          />
        </div>

      {/* Menu Hamburger */}
        <div className='sidebarMain__menu-icon-section'>
          <h3 className='sidebarMain__menu-title'>menu</h3>


      {/* Offset Menu Button Sidebar */}
          <button className='sidebarMain__menu-button' onClick={handleShow}>
            <img
              src={process.env.PUBLIC_URL + "/icons/Menu-icon-white.png"}
              alt="Hamburger Menu Icon."
              className='sidebarMain__menu-icon'
              height="25px"
            />
          </button>

        {/* Offset Menu */}
          <Offcanvas show={show} onHide={handleClose} className="sidebarMain__offcanvas-start">
            <Offcanvas.Header>

                <div onClick={handleClose} className="borderless-button__container sidebarMain__close-menu">
                    <hr className="borderless-button__line" />
                    <button className="borderless-button">Close</button>
                </div>

            </Offcanvas.Header>
            <Offcanvas.Body>
           
            <nav>
              <ul className='sidebarMain__menu-items-list'>
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
        <div className='sidebarMain__menu-footer-icons'>

        <a href="https://github.com/jsamborski310" rel='noreferrer' target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/icons/github-white-2x.png"}
            alt="Github Icon."
            className='sidebarMain__menu-contact-icon' 
          />
        </a>

        <a href="https://www.linkedin.com/in/juanita-samborski/" rel='noreferrer' target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/icons/linkedin-white-2x.png"}
            alt="Linkedin Icon."
            className='sidebarMain__menu-contact-icon'         
          />  
        </a>

        <a href="mailto:juanita@48fourteen.com">
          <img
            src={process.env.PUBLIC_URL + "/icons/email-white-2x.png"}
            alt="Email Icon."
            className='sidebarMain__menu-contact-icon'        
          />  
        </a> 


        <a href="https://twitter.com/SamborskiUp" rel='noreferrer' target="_blank">
          <img
            src={process.env.PUBLIC_URL + "/icons/twitter-white-2x.png"}
            alt="Twitter Icon."
            className='sidebarMain__menu-contact-icon'       
          />     
        </a>                 

        </div>
      </div>
      
    </div>
  )
}
