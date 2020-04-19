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
import SectionBodyModal from "views/index-sections/SectionBodyModal.js";

// reactstrap components
import { 
  Button,
  Container, 
  Row, 
  Col,
  Modal
} from "reactstrap";

// core components

function SectionTypography() {

  //Constants Modal 
  // Pernambuco
  const [modalPE, setModalPE] = React.useState(false);
  const toggleModalPE = () => {
    setModalPE(!modalPE);
  };

  // Rio Grande do Norte
  const [modalRN, setModalRN] = React.useState(false);
  const toggleModalRN = () => {
    setModalRN(!modalRN);
  };

  // Distrito Federal
  const [modalDF, setModalDF] = React.useState(false);
  const toggleModalDF = () => {
    setModalDF(!modalDF);
  };

  // Amazonas
  const [modalAM, setModalAM] = React.useState(false);
  const toggleModalAM = () => {
    setModalAM(!modalAM);
  };
  
  // Mato Grosso
  const [modalMT, setModalMT] = React.useState(false);
  const toggleModalMT = () => {
    setModalMT(!modalMT);
  };

  // Paraíba
  const [modalPB, setModalPB] = React.useState(false);
  const toggleModalPB = () => {
    setModalPB(!modalPB);
  };

  // São Paulo
  const [modalSP, setModalSP] = React.useState(false);
  const toggleModalSP = () => {
    setModalSP(!modalSP);
  };

  // Paraná
  const [modalPR, setModalPR] = React.useState(false);
  const toggleModalPR = () => {
    setModalPR(!modalPR);
  };

  // Rio de Janeiro
  const [modalRJ, setModalRJ] = React.useState(false);
  const toggleModalRJ = () => {
    setModalRJ(!modalRJ);
  };
  
  // Minas Gerais
  const [modalMG, setModalMG] = React.useState(false);
  const toggleModalMG = () => {
    setModalMG(!modalMG);
  };

  // Ceará
  const [modalCE, setModalCE] = React.useState(false);
  const toggleModalCE = () => {
    setModalCE(!modalCE);
  };
    
  // Bahia
  const [modalBA, setModalBA] = React.useState(false);
  const toggleModalBA = () => {
    setModalBA(!modalBA);
  };

  // Espírito Santo
  const [modalES, setModalES] = React.useState(false);
  const toggleModalES = () => {
    setModalES(!modalES);
  };

  // Lisboa
  const [modalLisboa, setModalLisboa] = React.useState(false);
  const toggleModalLisboa = () => {
    setModalLisboa(!modalLisboa);
  };

  // Guimaraes
  const [modalGuimaraes, setModalGuimaraes] = React.useState(false);
  const toggleModalGuimaraes = () => {
    setModalGuimaraes(!modalGuimaraes);
  };

  // Chile
  const [modalChile, setModalChile] = React.useState(false);
  const toggleModalChile = () => {
    setModalChile(!modalChile);
  };

  return (
    <>
      <div className="section section-dark">
        <div id="images">
          <Container>
            <div className="title text-center">
              <h2><strong>Representações</strong></h2>
              <hr />
            </div>
            <Row>
              {/* Pernambuco */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalPE}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/PE.png")}/>
                  <div className="title text-center">
                    <p><strong>Pernambuco</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal size="lg" isOpen={modalPE} toggle={toggleModalPE}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalPE}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Pernambuco</strong></h5>
                  </div>
                  <div className="modal-body">
                    <SectionBodyModal />
                  </div>
                </Modal>
              </Col>
              {/* Rio Grande do Norte */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalRN}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/RN.png")}/>
                  <div className="title text-center">
                    <p><strong>Rio Grande do Norte</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalRN} toggle={toggleModalRN}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalRN}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Rio Grande do Norte</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Rildo</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Distrito Federal */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalDF}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/DF.png")}/>
                  <div className="title text-center">
                    <p><strong>Distrito Federal</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalDF} toggle={toggleModalDF}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalDF}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Distrito Federal</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Tigrão</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Amazonas */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalAM}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/AM.png")}/>
                  <div className="title text-center">
                    <p><strong>Amazonas</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalAM} toggle={toggleModalAM}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalAM}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Amazonas</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Andrade</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Mato Grosso */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalMT}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/MT.png")}/>
                  <div className="title text-center">
                    <p><strong>Mato Grosso</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalMT} toggle={toggleModalMT}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalMT}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Mato Grosso</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Lunardo</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Paraíba */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalPB}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/PB.png")}/>
                  <div className="title text-center">
                    <p><strong>Paraíba</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalPB} toggle={toggleModalPB}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalPB}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Paraíba</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Rubens</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
            </Row>
            <Row>
              {/* São Paulo */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalSP}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/SP.png")}/>
                  <div className="title text-center">
                    <p><strong>São Paulo</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalSP} toggle={toggleModalSP}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalSP}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>São Paulo</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Moraes</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Paraná */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalPR}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/PR.png")}/>
                  <div className="title text-center">
                    <p><strong>Paraná</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalPR} toggle={toggleModalPR}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalPR}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Paraná</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: André</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Rio de Janeiro */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalRJ}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/RJ.png")}/>
                  <div className="title text-center">
                    <p><strong>Rio de Janeiro</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalRJ} toggle={toggleModalRJ}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalRJ}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Rio de Janeiro</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Daniel</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Minas Gerais */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalMG}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/MG.png")}/>
                  <div className="title text-center">
                    <p><strong>Minas Gerais</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalMG} toggle={toggleModalMG}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalMG}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Minas Gerais</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Régis</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Ceará */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalCE}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/CE.png")}/>
                  <div className="title text-center">
                    <p><strong>Ceará</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalCE} toggle={toggleModalCE}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalCE}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Ceará</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Wisley</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Bahia */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalBA}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/BA.png")}/>
                  <div className="title text-center">
                    <p><strong>Bahia</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalBA} toggle={toggleModalBA}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalBA}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Bahia</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Mário</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
            </Row>
            <Row>
              {/* Espírito Santo */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalES}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/ES.png")}/>
                  <div className="title text-center">
                    <p><strong>Espírito Santo</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalES} toggle={toggleModalES}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalES}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Espírito Santo</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Juvenal</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Lisboa */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalLisboa}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/lisboa.png")}/>
                  <div className="title text-center">
                    <p><strong>Lisboa-PT</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalLisboa} toggle={toggleModalLisboa}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalLisboa}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Lisboa-PT</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Jota</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Guimaraes */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalGuimaraes}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/guimaraes.png")}/>
                  <div className="title text-center">
                    <p><strong>Guimarães-PT</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalGuimaraes} toggle={toggleModalGuimaraes}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalGuimaraes}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Guimarães-PT</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Jamerson</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
              {/* Chile */}
              <Col className="mr-auto ml-auto" md="2" sm="3"  >
                {/* Button trigger modal */}
                <a className="btn-round" color="danger" outline type="button" onClick={toggleModalChile}>
                  <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/chile.png")}/>
                  <div className="title text-center">
                    <p><strong>Chile</strong></p>
                  </div>
                </a>
                {/* Modal */}
                <Modal isOpen={modalChile} toggle={toggleModalChile}>
                  <div className="modal-header">
                    <button aria-label="Close" className="close" type="button" onClick={toggleModalChile}>
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h5 className="modal-title text-center" id="exampleModalLabel"><strong>Chile</strong></h5>
                  </div>
                  <div className="modal-body">
                    <div className="title text-center">
                      <p>Diretor: Mago</p>
                      <p>(xx)xxxxx-xxxx</p>
                    </div>
                  </div>
                </Modal>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionTypography;
