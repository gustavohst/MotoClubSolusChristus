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

// core components

function getFileName(path) {
  var array = path.split("/");
  return array[array.length - 1];
}

function SectionBodyModal(props) {

  var photoDir = getFileName(props.directors.Dir.Photo);
  var photoViceDir = getFileName(props.directors.ViceDir.Photo);

  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="sc-modal-min-height">
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
                    {(props.directors.Dir == "" || photoDir == "") && (props.directors.ViceDir == "" || photoViceDir == "") &&
                      <Col className="mr-auto ml-auto" md="3" sm="4">
                        <p>Em breve...</p>
                      </Col>
                    }
                    {(props.directors.Dir != "" && photoDir != "") &&
                      <Col className="mr-auto ml-auto" md="4" sm="5">
                      
                        <div>
                          <img
                            alt="..."
                            className="img-thumbnail img-custom sc-img-dimension img-no-padding img-responsive"
                            src={require("assets/img/representations/Directors/" + photoDir)}
                          />
                          <p><strong>Diretor</strong></p>
                          <p>{props.directors.Dir.Name}</p>
                          {/* <p>(xx)xxxxx-xxxx</p> */}
                        </div>
                      </Col>
                    }
                    {(props.directors.ViceDir != "" && photoViceDir != "") &&
                    <Col className="mr-auto ml-auto" md="4" sm="5">
                      <div>
                        <img
                          alt="..."
                          className="img-thumbnail img-custom sc-img-dimension img-no-padding img-responsive"
                          src={require("assets/img/representations/Directors/" + photoViceDir)}
                        />
                        <p><strong>Vice-Diretor</strong></p>
                        <p>{props.directors.ViceDir.Name}</p>
                        {/* <p>(xx)xxxxx-xxxx</p> */}
                      </div>
                    </Col>
                    }
                    {/* {props.directors.Communication != "XXXXX" &&
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div>
                        <img
                          alt="..."
                          className="img-thumbnail img-custom img-no-padding img-responsive"
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <p><strong>Dir. Comunicação</strong></p>
                        <p>{props.directors.Communication}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    }
                  {props.directors.Social != "XXXXX" &&
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div>
                        <img
                          alt="..."
                          className="img-thumbnail img-custom img-no-padding img-responsive"
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <p><strong>Diretor Social</strong></p>
                        <p>{props.directors.Social}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    }
                    {props.directors.RoadCaptain != "XXXXX" &&
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div>
                        <img
                          alt="..."
                          className="img-thumbnail img-custom img-no-padding img-responsive"
                          src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                        />
                        <p><strong>Road Captain</strong></p>
                        <p>{props.directors.Communication}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    }
                    {props.directors.RoadMissionary != "XXXXX" &&
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div>
                        <img
                          alt="..."
                          className="img-thumbnail img-custom img-no-padding img-responsive"
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <p><strong>Road Missionary</strong></p>
                        <p>{props.directors.RoadMissionary}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    }
                    {props.directors.Admin != "XXXXX" &&
                    <Col className="mr-auto ml-auto" md="3" sm="4">
                      <div>
                        <img
                          alt="..."
                          className="img-thumbnail img-custom img-no-padding img-responsive"
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <p><strong>Diretor Administrativo</strong></p>
                        <p>{props.directors.Admin}</p>
                        <p>(xx)xxxxx-xxxx</p>
                      </div>
                    </Col>
                    } */}
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Col className="mr-auto ml-auto" md="3" sm="4">
                    <p>Em breve...</p>
                  </Col>
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
