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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(" + require("assets/img/logo/LogoSolusChristus.webp") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">Solus Christus MCC</h1> */}
              <div className="fog-low">
                {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
              </div>
              <div className="fog-low right">
                {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
              </div>
            </div>
            {/* <h2 className="presentation-subtitle text-center"> */}
              {/* Moto Clube Cristão  */}
            {/* </h2> */}
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.webp") + ")"
          }}
        />
      <h6 className="category category-absolute">
          Coded by Silas Silva and Gustavo Tenório{" "}
          {/* <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a> */}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
