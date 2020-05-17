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
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="text-center footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            {/* <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul> */}
            <ul>
              <li>
                <small>Sola fide (somente a fé)</small>
              </li>
              <li>
                <small>Sola scriptura (somente a Escritura)</small>
              </li>
              <li>
                <small>Solus Christus (somente Cristo)</small>
              </li>
              <li>
                <small>Sola gratia (somente a graça)</small>
              </li>
              <li>
                <small>Soli Deo gloria (glória somente a Deus)</small>
              </li>
            </ul>
          </nav>
          {/* <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span>
          </div> */}
        </Row>
        <Row>

        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
