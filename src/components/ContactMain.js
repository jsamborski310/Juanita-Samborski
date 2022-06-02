import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactMain() {
  return (
    <section className="contactMain__container d-flex align-items-center">
      <div className="row g-5">
        <div className="col-6">
          <h3>Contact</h3>
          <h2>Let's create something together...</h2>
        </div>
        <div className="col-6">
          {/* FORM  */}
          <div className="form-container">
            <Form className="signup-form">
              <Form.Group>
                <Form.Control
                  className="name-input"
                  type="text"
                  placeholder="name"
                  name="name"
                ></Form.Control>
                <Form.Control
                  className="email-input"
                  type="text"
                  placeholder="email"
                  name="email"
                ></Form.Control>
                <Form.Control
                  className="textarea-input"
                  as="textarea"
                  placeholder="tell me about your project"
                  name="textarea"
                  rows="3"
                ></Form.Control>                
                <div className="primary-button__container contactMain">
                  <hr className="primary-button__line contactMain" />
                  <Button className="contactMain__form-button" value="submit" type="submit">
                    <div className="primary-button contactMain ">Send Note</div>
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
