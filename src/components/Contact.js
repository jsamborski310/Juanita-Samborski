import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact__container anchor">

      {/* Abstract Images */}
      <div className="contact__container-background">
        <img
          src={process.env.PUBLIC_URL + "/images/abstract-gridLines.png"}
          alt="Abstract grid with vertical lines."
          width="400px"
          height="auto"
        />
      </div>

      <img
          src={process.env.PUBLIC_URL + "/images/email-add-white.png"}
          alt="Abstract lined envelope with plus."
          className='contact__image-envelope'
          height="280px"
        />

        {/* Contact Section */}
        <div className='row contact__statement'>
            <div className='col-10 col-sm-10 col-md-5 col-lg-5'>
                <h2>
                    Let's create something together...
                </h2>
            </div>
            <div className='
            col-10 col-sm-10 col-md-8 col-lg-6
            contact__info'>
                <h4>
                    Reach Me By Email
                </h4>
                <div className='contact__email'>
                    <img src={process.env.PUBLIC_URL + "/icons/email-add-black.png"} alt="Email icon with plus sign." height="20px" width="auto"/>
                    <p>juanita(at)48fourteen(dot)com</p>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className='row'>
            <div className='col-10 contact__home-footer'>
             
              <p>Copyright Ⓒ 2016-2022. All Rights Reserved.</p> 
           
    
              <div className='contact__menu-footer-icons'>

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
      
    </section>
  )
}
