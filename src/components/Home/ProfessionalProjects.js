import React from "react";
import proProjectList from "../../data/proProjectsList.json";
import { Tab, Row, Col, Nav } from "react-bootstrap";

export default function ProfessionalProjects() {
  return (
    <section id="proProjects" className="proProjects__container anchor ">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="1"
        className="proProjects__tab-container"
      >
        <Row className="proProjects__inner-container">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Nav 
                // className="flex-column"
            >
              <Nav.Item className="proProjects__nav-item">
                {/* TAB */}
                {proProjectList.map(({ id, title, role, number }) => (
                  <Nav.Link
                    key={id}
                    eventKey={id}
                    className="d-flex flex-row justify-content-start align-items-center proProjects__tabs"
                  >
                    <div className="proProjects__tab-number">
                      <h2>{number}</h2>
                    </div>
                    <div className="px-4 pt-3 proProjects__tab-info">
                      <h4>{title}</h4>
                      <p>{role}</p>
                    </div>
                  </Nav.Link>
                ))}
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <Tab.Content>
              {proProjectList.map(
                ({ id, title, shortTitle, number, image }) => (
                  <Tab.Pane key={id} eventKey={id}>
                    <div className="proProjects__project-container">
                      <div className="proProjects__triangle"></div>
                      <img
                        className="proProjects__image"
                        src={process.env.PUBLIC_URL + image}
                        alt={title + "project preview"}
                      />

                      <div className="d-flex align-items-center justify-content-between proProjects__img-title">
                        <div className="proProjects__number">
                          <h1>{number}</h1>
                        </div>
                        <h2>{shortTitle}</h2>
                      </div>
                    </div>
                  </Tab.Pane>
                )
              )}
            </Tab.Content>

            <div className="primary-button__container">
              <hr className="primary-button__line" />
              <a href="/projects" target="_blank">
                <button className="primary-button">Case Studies</button>
              </a>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
}
