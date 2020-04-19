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
import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import { isTemplateExpression } from "typescript";

// core components

function SectionBodyModal(props) {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="">
        <Container>
          <Row>
            <Col md="12">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Diretoria
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Agenda
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <Row>
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                    
                      <div className="title text-center">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                        <p><strong>Diretor</strong></p>
                        <p>{props.directors.Dir}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div className="title text-center">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <p><strong>Vice-Diretor</strong></p>
                        <p>{props.directors.ViceDir}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div className="title text-center">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <p><strong>Diretor Social</strong></p>
                        <p>{props.directors.Social}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div className="title text-center">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                        />
                        <p><strong>Dir. Comunicação</strong></p>
                        <p>{props.directors.Communication}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <p>Em breve...</p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionBodyModal;
