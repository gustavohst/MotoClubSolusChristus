/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionOurMission() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Missão</h2>
              <br />
              <p className="description">
                Vamos nessa galera, andar de moto
              </p>
              <br />

            </Col>
            <Col lg="3" md="12">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/carity.jpg")}
                />
            </Col>
             <Col lg="3" md="12">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/carity.jpg")}
                />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionOurMission;
