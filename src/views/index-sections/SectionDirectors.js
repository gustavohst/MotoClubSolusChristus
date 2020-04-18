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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <div className="section section-dark">
        <div id="images">
          <Container>
            <div className="title text-center">
              <h2><strong>Comando</strong></h2>
              <hr />
            </div>
            <Row>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/faces/cruz.png")}
                />
                <h4 className="text-center">PRESIDENTE</h4>
                <p className="title text-center"><strong>Jesus Cristo</strong></p>
              </Col>
            </Row>
            <Row>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <h4 className="text-center">Diretor PE</h4>
                <p className="title text-center blockquote-footer"><strong>Siqueira</strong></p>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <h4 className="text-center">Diretor ES</h4>
                <p className="title text-center blockquote-footer"><strong>Nome</strong></p>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                />
                <h4 className="text-center">Diretor BR</h4>
                <p className="title text-center blockquote-footer"><strong>Tigrão</strong></p>
                {/* <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <p className="text-center">John Keynes</p> */}
              </Col>
            </Row>
            <Row>
            <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                />
                <h4 className="text-center">Diretor PB</h4>
                <p className="title text-center blockquote-footer"><strong>Pr. Rubens</strong></p>
              </Col>
              <Col className="mr-auto ml-auto" md="3" sm="3">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/faces/SCMCC.png")}
                />
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <h4 className="text-center">Diretor SP</h4>
                <p className="title text-center blockquote-footer"><strong>Pr. Moraes</strong></p>
                {/* <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
                <p className="text-center">John Keynes</p> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionTypography;
