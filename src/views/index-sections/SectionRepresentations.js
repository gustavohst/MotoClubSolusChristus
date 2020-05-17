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
  const toggleModalPE = () => { setModalPE(!modalPE); };

  // Rio Grande do Norte
  const [modalRN, setModalRN] = React.useState(false);
  const toggleModalRN = () => { setModalRN(!modalRN); };

  // Distrito Federal
  const [modalDF, setModalDF] = React.useState(false);
  const toggleModalDF = () => { setModalDF(!modalDF); };

  // Amazonas
  const [modalAM, setModalAM] = React.useState(false);
  const toggleModalAM = () => { setModalAM(!modalAM); };
  
  // Mato Grosso
  const [modalMT, setModalMT] = React.useState(false);
  const toggleModalMT = () => { setModalMT(!modalMT); };

  // Paraíba
  const [modalPB, setModalPB] = React.useState(false);
  const toggleModalPB = () => { setModalPB(!modalPB); };

  // São Paulo
  const [modalSP, setModalSP] = React.useState(false);
  const toggleModalSP = () => { setModalSP(!modalSP); };

  // Paraná
  const [modalPR, setModalPR] = React.useState(false);
  const toggleModalPR = () => { setModalPR(!modalPR); };

  // Rio de Janeiro
  const [modalRJ, setModalRJ] = React.useState(false);
  const toggleModalRJ = () => { setModalRJ(!modalRJ); };
  
  // Minas Gerais
  const [modalMG, setModalMG] = React.useState(false);
  const toggleModalMG = () => { setModalMG(!modalMG); };

  // Ceará
  const [modalCE, setModalCE] = React.useState(false);
  const toggleModalCE = () => { setModalCE(!modalCE); };
    
  // Bahia
  const [modalBA, setModalBA] = React.useState(false);
  const toggleModalBA = () => { setModalBA(!modalBA); };

  // Espírito Santo
  const [modalES, setModalES] = React.useState(false);
  const toggleModalES = () => { setModalES(!modalES); };

  // Lisboa
  const [modalLisboa, setModalLisboa] = React.useState(false);
  const toggleModalLisboa = () => { setModalLisboa(!modalLisboa); };

  // Guimaraes
  const [modalGuimaraes, setModalGuimaraes] = React.useState(false);
  const toggleModalGuimaraes = () => { setModalGuimaraes(!modalGuimaraes); };

  // Chile
  const [modalChile, setModalChile] = React.useState(false);
  const toggleModalChile = () => { setModalChile(!modalChile); };

  const represents = [
    { ID: 0, modal: modalPE, toggleModal: toggleModalPE, Name: "Pernambuco", Abbr: "PE", Directors: { Dir: "Siqueira", ViceDir: "Flávio", Social: "XXXXX", Communication: "Padilha", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } } ,
    { ID: 1, modal: modalRN, toggleModal: toggleModalRN, Name: "Rio Grande do Norte", Abbr: "RN", Directors: { Dir: "Rildo", ViceDir: "XXXXX", Social: "Caco", Communication: "XXXXX", RoadCaptain: "Hélio", RoadMissionary: "Santiago", Admin: "Cabanas" } },
    { ID: 2, modal: modalDF, toggleModal: toggleModalDF, Name: "Distrito Federal", Abbr: "DF", Directors: { Dir: "Tigrão", ViceDir: "Guilherme", Social: "Samurai", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 3, modal: modalAM, toggleModal: toggleModalAM, Name: "Amazonas", Abbr: "AM", Directors: { Dir: "Andrade", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 4, modal: modalMT, toggleModal: toggleModalMT, Name: "Mato Grosso", Abbr: "MT", Directors: { Dir: "Lunardo", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 5, modal: modalPB, toggleModal: toggleModalPB, Name: "Paraíba", Abbr: "PB", Directors: { Dir: "Rubens", ViceDir: "Melqui", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 6, modal: modalSP, toggleModal: toggleModalSP, Name: "São Paulo", Abbr: "SP", Directors: { Dir: "Moraes", ViceDir: "Uberlan", Social: "XXXXX", Communication: "Haddock", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 7, modal: modalPR, toggleModal: toggleModalPR, Name: "Paraná", Abbr: "PR", Directors: { Dir: "André", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 8, modal: modalRJ, toggleModal: toggleModalRJ, Name: "Rio de Janeiro", Abbr: "RJ", Directors: { Dir: "Daniel", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 9, modal: modalMG, toggleModal: toggleModalMG, Name: "Minas Gerais", Abbr: "MG", Directors: { Dir: "Régis", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 10, modal: modalCE, toggleModal: toggleModalCE, Name: "Ceará", Abbr: "CE", Directors: { Dir: "Wisley", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 11, modal: modalES, toggleModal: toggleModalES, Name: "Espírito Santo", Abbr: "ES", Directors: { Dir: "Estevam", ViceDir: "Herlom", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 12, modal: modalBA, toggleModal: toggleModalBA, Name: "Bahia", Abbr: "BA", Directors: { Dir: "Mário", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 13, modal: modalLisboa, toggleModal: toggleModalLisboa, Name: "Lisboa-PT", Abbr: "lisboa", Directors: { Dir: "Jota", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 14, modal: modalGuimaraes, toggleModal: toggleModalGuimaraes, Name: "Guimarães-PT", Abbr: "guimaraes", Directors: { Dir: "Jamerson", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } },
    { ID: 15, modal: modalChile, toggleModal: toggleModalChile, Name: "Chile", Abbr: "chile", Directors: { Dir: "Mago", ViceDir: "XXXXX", Social: "XXXXX", Communication: "XXXXX", RoadCaptain: "XXXXX", RoadMissionary: "XXXXX", Admin: "XXXXX" } }
  ]
  let cont=0;

  function changeOpacityOnOver(e) {
    
    e.target.style.opacity = 0.7;
  }

  function changeOpacityOnLeave(e) {
    e.target.style.opacity = 1;
  }

  return (
    <>
      <div className="section text-center">
        <div id="teste">
          <Container>
            <div className="title text-center border-bottom-size">
              <h2 className="double"><strong>Representações</strong></h2>
            </div>
            <Row>
              {
                represents.map(represent => (
                  <Col className="mr-auto ml-auto" md="2" sm="3"  >
                    {/* Button trigger modal */}
                    <a className="btn-round" color="danger" outline type="button" onClick={represent.toggleModal}>
                      <img alt="..." className="img-thumbnail img-custom img-no-padding img-responsive" onMouseLeave={changeOpacityOnLeave} onMouseOver={changeOpacityOnOver} src={require("assets/img/representations/" + represent.Abbr + ".png")}/>
                      <div className="title text-center">
                        <p><strong>{represent.Name}</strong></p>
                      </div>
                    </a>
                    {/* Modal */}
                    <Modal size="lg" isOpen={represent.modal} toggle={represent.toggleModal}>
                      <div className="modal-header">
                        <button aria-label="Close" className="close" type="button" onClick={represent.toggleModal}>
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