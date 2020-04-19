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
  // // Pernambuco
  // const [modalPE, setModalPE] = React.useState(false);
  // const toggleModalPE = () => {
  //   setModalPE(!modalPE);
  // };

  // // Rio Grande do Norte
  // const [modalRN, setModalRN] = React.useState(false);
  // const toggleModalRN = () => {
  //   setModalRN(!modalRN);
  // };

  // // Distrito Federal
  // const [modalDF, setModalDF] = React.useState(false);
  // const toggleModalDF = () => {
  //   setModalDF(!modalDF);
  // };

  // // Amazonas
  // const [modalAM, setModalAM] = React.useState(false);
  // const toggleModalAM = () => {
  //   setModalAM(!modalAM);
  // };
  
  // // Mato Grosso
  // const [modalMT, setModalMT] = React.useState(false);
  // const toggleModalMT = () => {
  //   setModalMT(!modalMT);
  // };

  // // Paraíba
  // const [modalPB, setModalPB] = React.useState(false);
  // const toggleModalPB = () => {
  //   setModalPB(!modalPB);
  // };

  // // São Paulo
  // const [modalSP, setModalSP] = React.useState(false);
  // const toggleModalSP = () => {
  //   setModalSP(!modalSP);
  // };

  // // Paraná
  // const [modalPR, setModalPR] = React.useState(false);
  // const toggleModalPR = () => {
  //   setModalPR(!modalPR);
  // };

  // // Rio de Janeiro
  // const [modalRJ, setModalRJ] = React.useState(false);
  // const toggleModalRJ = () => {
  //   setModalRJ(!modalRJ);
  // };
  
  // // Minas Gerais
  // const [modalMG, setModalMG] = React.useState(false);
  // const toggleModalMG = () => {
  //   setModalMG(!modalMG);
  // };

  // // Ceará
  // const [modalCE, setModalCE] = React.useState(false);
  // const toggleModalCE = () => {
  //   setModalCE(!modalCE);
  // };
    
  // // Bahia
  // const [modalBA, setModalBA] = React.useState(false);
  // const toggleModalBA = () => {
  //   setModalBA(!modalBA);
  // };

  // // Espírito Santo
  // const [modalES, setModalES] = React.useState(false);
  // const toggleModalES = () => {
  //   setModalES(!modalES);
  // };

  // // Lisboa
  // const [modalLisboa, setModalLisboa] = React.useState(false);
  // const toggleModalLisboa = () => {
  //   setModalLisboa(!modalLisboa);
  // };

  // // Guimaraes
  // const [modalGuimaraes, setModalGuimaraes] = React.useState(false);
  // const toggleModalGuimaraes = () => {
  //   setModalGuimaraes(!modalGuimaraes);
  // };

  // // Chile
  // const [modalChile, setModalChile] = React.useState(false);
  // const toggleModalChile = () => {
  //   setModalChile(!modalChile);
  // };

  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const represents = [
    { Name: "Pernambuco", Abbr: "PE", Directors: { Dir: "Siqueira", ViceDir: "Flávio", Social: "XXXXX", Communication: "Padilha" } } ,
    { Name: "Rio Grande do Norte", Abbr: "RN", Directors: { Dir: "Rildo", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Distrito Federal", Abbr: "DF", Directors: { Dir: "Tigrão", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Amazonas", Abbr: "AM", Directors: { Dir: "Andrade", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Mato Grosso", Abbr: "MT", Directors: { Dir: "Lunardo", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Paraíba", Abbr: "PB", Directors: { Dir: "Rubens", ViceDir: "Melqui", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "São Paulo", Abbr: "SP", Directors: { Dir: "Moraes", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Paraná", Abbr: "PR", Directors: { Dir: "André", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Rio de Janeiro", Abbr: "RJ", Directors: { Dir: "Daniel", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Minas Gerais", Abbr: "MG", Directors: { Dir: "Régis", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Ceará", Abbr: "CE", Directors: { Dir: "Wisley", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Espírito Santo", Abbr: "ES", Directors: { Dir: "Juvenal", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Bahia", Abbr: "BA", Directors: { Dir: "Mário", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Lisboa-PT", Abbr: "lisboa", Directors: { Dir: "Jota", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Guimarães-PT", Abbr: "guimaraes", Directors: { Dir: "Jamerson", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } },
    { Name: "Chile", Abbr: "chile", Directors: { Dir: "Mago", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX" } }
  ]

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
              {
                represents.map(represent => (
                  <Col className="mr-auto ml-auto" md="2" sm="3"  >
                    {/* Button trigger modal */}
                    <a className="btn-round" color="danger" outline type="button" onClick={toggleModal}>
                      <img alt="..." className="img-rounded img-no-padding img-responsive" src={require("assets/img/faces/" + represent.Abbr + ".png")}/>
                      <div className="title text-center">
                        <p><strong>{represent.Name}</strong></p>
                      </div>
                    </a>
                    {/* Modal */}
                    <Modal size="lg" isOpen={modal} toggle={toggleModal}>
                      <div className="modal-header">
                        <button aria-label="Close" className="close" type="button" onClick={toggleModal}>
                          <span aria-hidden={true}>×</span>
                        </button>
                        <h5 className="modal-title text-center" id="exampleModalLabel"><strong>{represent.Name}</strong></h5>
                      </div>
                      <div className="modal-body">
                        <SectionBodyModal directors={represent.Directors} />
                      </div>
                    </Modal>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionTypography;