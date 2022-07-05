import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Accept": 'application/json',
        // "Content-Type": "application/json;charset=utf-8",
        "Content-Type": "application/json",
      },
    });

    
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <section id="contact" className="contact__container anchor">
      {/* Abstract Images */}

        <img
          src={process.env.PUBLIC_URL + "/images/abstract-gridLines.png"}
          alt="Abstract grid with vertical lines."
          width="400px"
          height="auto"
          className="contact__container-background-image"
        />
     

      {/* Contact Section */}

      <section className="contactHome__container">
        <div className="row g-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3>Contact</h3>
            <h2>Let's create something together...</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            {/* FORM  */}
            <div className="form-container">
              <Form className="signup-form" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    className="name-input"
                    type="text"
                    id="name"
                    placeholder="name"
                    name="name"
                    required
                  ></Form.Control>
                  <Form.Control
                    className="email-input"
                    type="text"
                    id="email"
                    placeholder="email"
                    name="email"
                    required
                  ></Form.Control>
                  <Form.Control
                    className="textarea-input"
                    as="textarea"
                    placeholder="tell me about your project"
                    id="message"
                    name="message"
                    rows="3"
                    required
                  ></Form.Control>
                  <div className="primary-button__container contactHome">
                    <hr className="primary-button__line contactHome" />
                    <Button
                      className="contactHome__form-button"
                      value="submit"
                      type="submit"
                    >
                      <div className="primary-button contactHome ">
                        {status}
                      </div>
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="row">
        <div className="col-10 contact__home-footer">
          <p>Copyright Ⓒ 2016-2022. All Rights Reserved.</p>

          <div className="contact__menu-footer-icons">
            <a
              href="https://github.com/jsamborski310"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={process.env.PUBLIC_URL + "/icons/github-white-2x.png"}
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
                src={process.env.PUBLIC_URL + "/icons/linkedin-white-2x.png"}
                alt="Linkedin Icon."
                className="sidebar__menu-contact-icon"
              />
            </a>

            <a href="mailto:juanita@48fourteen.com">
              <img
                src={process.env.PUBLIC_URL + "/icons/email-white-2x.png"}
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
                src={process.env.PUBLIC_URL + "/icons/twitter-white-2x.png"}
                alt="Twitter Icon."
                className="sidebar__menu-contact-icon"
              />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
