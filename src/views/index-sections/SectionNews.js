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
      <div className="section-buttons section-dark">
        <Container>
          <div className="title">
            <h2>Notícias</h2>
          </div>
          <div id="buttons">
            <div className="title">
              <h4>Aniversário do Solus Christus</h4>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;
