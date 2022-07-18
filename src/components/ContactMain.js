import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactMain() {
  // Contact Form

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

  // ---------------------
  return (
    <section className="contactMain__container d-flex align-items-center">
      <div className="row g-5">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <h3>Contact</h3>
          <h2>Let's create something together...</h2>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          {/* FORM  */}
          <div className="form-container">
            <Form className="signup-form-main" onSubmit={handleSubmit}>
              <Form.Group className="signup-form-fields">
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
                <div className="primary-button__container contactMain">
                  <hr className="primary-button__line contactMain" />
                  <Button
                    className="contactMain__form-button"
                    value="submit"
                    type="submit"
                  >
                    <div className="primary-button contactMain ">{status}</div>
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
