import React from "react";

export default function FooterMain() {
  return (
    <div className="row justify-content-end">
      <div className="col-10 footer__main-footer">
        <p>Copyright Ⓒ 2016-2022. All Rights Reserved.</p>

        <div className="footer__main-footer-icons">
          <a
            href="https://github.com/jsamborski310"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "/icons/github-black.png"}
              alt="Github Icon."
              className="sidebar__menu-contact-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/juanita-samborski/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "/icons/linkedin-in-brands.png"}
              alt="Linkedin Icon."
              className="sidebar__menu-contact-icon"
            />
          </a>

          <a href="mailto:juanita@48fourteen.com">
            <img
              src={process.env.PUBLIC_URL + "/icons/email-add-black.png"}
              alt="Email Icon."
              className="sidebar__menu-contact-icon"
            />
          </a>

          <a
            href="https://twitter.com/SamborskiUp"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "/icons/twitter-brands.png"}
              alt="Twitter Icon."
              className="sidebar__menu-contact-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
