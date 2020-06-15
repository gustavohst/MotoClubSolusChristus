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

function SectionRepresentations() {

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
    { ID: 0, modal: modalPE, toggleModal: toggleModalPE, Name: "Pernambuco", Abbr: "PE", Directors: { Dir: { Name: "Siqueira", Photo: "assets/img/representations/Directors/siqueira-pe.jpeg" }, ViceDir: { Name: "Flávio", Photo: "assets/img/representations/Directors/flavio-pe.jpeg" } /*, Social: "", Communication: "Padilha", RoadCaptain: "", RoadMissionary: "", Admin: "" */} } ,
    { ID: 1, modal: modalRN, toggleModal: toggleModalRN, Name: "Rio Grande do Norte", Abbr: "RN", Directors: { Dir: { Name: "Rildo", Photo: "assets/img/representations/Directors/rildo-rn.jpeg" }, ViceDir: { Name:"Ricarfael", Photo: "assets/img/representations/Directors/ricardo-rn.jpeg" } /*, Social: "Caco", Communication: "", RoadCaptain: "Hélio", RoadMissionary: "Santiago", Admin: "Cabanas" */} },
    { ID: 2, modal: modalDF, toggleModal: toggleModalDF, Name: "Distrito Federal", Abbr: "DF", Directors: { Dir: { Name: "Tigrão", Photo: "assets/img/representations/Directors/tigrao-df.jpeg" }, ViceDir: { Name: "Guilherme" , Photo: "assets/img/representations/Directors/guilherme-df.jpeg" }/*, Social: "Samurai", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 3, modal: modalAM, toggleModal: toggleModalAM, Name: "Amazonas", Abbr: "AM", Directors: { Dir: { Name: "Andrade", Photo: "" }, ViceDir: { Name: "" , Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 4, modal: modalMT, toggleModal: toggleModalMT, Name: "Mato Grosso", Abbr: "MT", Directors: { Dir: { Name: "Lunardo", Photo: "" }, ViceDir: { Name: "" , Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 5, modal: modalPB, toggleModal: toggleModalPB, Name: "Paraíba", Abbr: "PB", Directors: { Dir: { Name: "Rubem", Photo: "assets/img/representations/Directors/rubem-pb.jpeg" }, ViceDir: { Name: "Melqui", Photo: "assets/img/representations/Directors/melqui-pb.jpeg" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 6, modal: modalSP, toggleModal: toggleModalSP, Name: "São Paulo", Abbr: "SP", Directors: { Dir: { Name: "Moraes", Photo: "assets/img/representations/Directors/moraes-sp.jpeg" }, ViceDir: { Name: "Uberlan", Photo: "" }/*, Social: "", Communication: "Haddock", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 7, modal: modalPR, toggleModal: toggleModalPR, Name: "Paraná", Abbr: "PR", Directors: { Dir: { Name: "André", Photo: "assets/img/representations/Directors/andre-pr.jpeg" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 8, modal: modalRJ, toggleModal: toggleModalRJ, Name: "Rio de Janeiro", Abbr: "RJ", Directors: { Dir: { Name: "Daniel", Photo: "assets/img/representations/Directors/daniel-rj.jpeg" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 9, modal: modalMG, toggleModal: toggleModalMG, Name: "Minas Gerais", Abbr: "MG", Directors: { Dir: { Name: "Régis", Photo: "" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 10, modal: modalCE, toggleModal: toggleModalCE, Name: "Ceará", Abbr: "CE", Directors: { Dir: { Name: "Wisley", Photo: "" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 11, modal: modalES, toggleModal: toggleModalES, Name: "Espírito Santo", Abbr: "ES", Directors: { Dir: { Name: "Estevam", Photo: "assets/img/representations/Directors/estevam-es.jpeg" }, ViceDir: { Name: "Herlon", Photo: "assets/img/representations/Directors/herlon-es.jpeg" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 12, modal: modalBA, toggleModal: toggleModalBA, Name: "Bahia", Abbr: "BA", Directors: { Dir: { Name: "Mário", Photo: "assets/img/representations/Directors/mario-ba.jpeg" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 13, modal: modalLisboa, toggleModal: toggleModalLisboa, Name: "Lisboa-PT", Abbr: "lisboa", Directors: { Dir: { Name: "Jota", Photo: "" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 14, modal: modalGuimaraes, toggleModal: toggleModalGuimaraes, Name: "Guimarães-PT", Abbr: "guimaraes", Directors: { Dir: { Name: "Jamerson", Photo: "" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } },
    { ID: 15, modal: modalChile, toggleModal: toggleModalChile, Name: "Chile", Abbr: "chile", Directors: { Dir: { Name: "Mago", Photo: "" }, ViceDir: { Name: "", Photo: "" }/*, Social: "", Communication: "", RoadCaptain: "", RoadMissionary: "", Admin: ""*/ } }
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
              {/* <h2 className="double"><strong>Representações</strong></h2> */}
              <h2 className="double"><img className="img-tittle-align-center img-responsive" src={require("assets/img/titles/representations.png")}></img></h2>
            </div>
            <Row>
              {
                represents.map(represent => (
                  <Col className="mr-auto ml-auto" md="2" sm="3"  >
                    {/* Button trigger modal */}
                    <a className="btn-round" color="danger" outline="true" type="button" onClick={represent.toggleModal}>
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
                        <strong><h5 className="modal-title text-center" id="exampleModalLabel">{represent.Name}</h5></strong>
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



export default SectionRepresentations;