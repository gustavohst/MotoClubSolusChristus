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

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Entre em Contato</h2>
              <br />
              <p className="description">
                Para conhecer melhor o motoclube e poder nos ajudar em nossos projetos sociais.
              </p>
              <br />
              <h3 className="title">Email</h3>
              <br />
              <p className="description">
                soluschristusmcc@gmail.com
              </p>
              {/* <Button
                className="btn-round"
                color="danger"
                href="/nucleo-icons"
                target="_blank"
              >
                View Demo Icons
              </Button>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="https://nucleoapp.com/?ref=1712"
                outline
                target="_blank"
              >
                View All Icons
              </Button> */}
            </Col>
            <Col lg="2" md="12"></Col>
             <Col lg="4" md="12">
              <div className="icons-container">
                <br /><br /><br /><br /><br />
                <strong>SOLUS CHRISTUS MCC - BRASIL</strong>
                
                <p className="description">E conhecereis a verdade, e a verdade vos libertará.</p>
                <p>João 8:32</p>
                {/* <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" /> */}
              </div> 
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
