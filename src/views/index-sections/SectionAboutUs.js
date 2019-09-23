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
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionAboutUs() {
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2>Quem somos</h2>
          </div>
          <div id="buttons">
            <div className="title">
              <h3>
                <small>
                  O Solus Christus MCC é um Moto Clube Cristão Nacional
                  é um dos maiores moto clubes evangélicos do mundo. Sua missão,
                   busca evangelizar e ser exemplo no trânsito.
                   </small>
              </h3>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;
