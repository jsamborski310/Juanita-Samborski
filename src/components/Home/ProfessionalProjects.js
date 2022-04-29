import React from "react";
import proProjectList from "../../data/proProjectsList.json";
import { Tab, Row, Col, Nav } from "react-bootstrap";

export default function ProfessionalProjects() {
  return (
    <section id="proProjects" className="proProjects__container anchor ">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey="first"
        className="proProjects__tab-container"
      >
    {/* {proProjectList.map(({ id, title, role, number, image, shortTitle }) => ( */}
        <Row>
          <Col sm={6}>
            {/* {proProjectList.map(({ id, title, role, number }) => ( */}
              <Nav className="flex-column">
                <Nav.Item>

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
                    <div className="px-4 pt-3">
                      <h4>{title}</h4>
                      <p>{role}</p>
                    </div>
                  </Nav.Link>
                  ))}
                </Nav.Item>
              
              </Nav>
          
          </Col>

          <Col sm={6}>
            {/* {proProjectList.map(({ id, shortTitle, number, image }) => ( */}
              <Tab.Content>
              {proProjectList.map(({ id, shortTitle, number, image }) => (
                <Tab.Pane 
                    key={id}
                    eventKey={id}
                >
                  <div className="proProjects__project-container">
                    <div className="proProjects__triangle"></div>
                    <img
                      className="proProjects__image"
                      src={process.env.PUBLIC_URL + image}
                      alt="Dinner table with friends eating restaurant food."
                    />

                    <div className="d-flex align-items-center justify-content-between proProjects__img-title">
                      <div className="proProjects__number">
                        <h1>{number}</h1>
                      </div>
                      <h2>{shortTitle}</h2>
                    </div>
                  </div>
                </Tab.Pane>
             ))}
              </Tab.Content>
       

          </Col>
        </Row>
        {/* ))} */}
      </Tab.Container>
    </section>
  );
}
