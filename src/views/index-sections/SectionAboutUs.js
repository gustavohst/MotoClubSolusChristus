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
      <div className="section">
        <Container>
          <div className="title text-center border-bottom-size">
            {/* <h2 className="double"><strong>Nossa história</strong></h2> */}
            <h2 className="double"><img className="img-responsive" src={require("assets/img/titles/aboutHistory.png")}></img></h2>
          </div>
          <div id="buttons">
            <div className="title">
              <h3>
                <div className="sc-about-content">
                  <p>
                    Em <strong>04</strong> de dezembro de <strong>2018</strong>, após <i>Siqueira</i> sair de seu ex moto clube e ficar cumprindo um luto estipulado 
                    de 12 meses, o mesmo no início de março de 2019, fez contato com outro moto clube, com a finalidade de, no término de seu luto adentrar nas fileiras daquele 
                    clube e levantar sua bandeira no estado de Pernambuco. Demonstrando assim, a vontade de seguir seu chamado evangelístico.
                  </p> 
                  <div className="sc-about-content-hidden">
                    <p>
                      Assim, junto com <i>Paulo Paiva</i> e <i>Shina</i>, todos companheiros de seu ex moto clube, começaram um trabalho de recrutamento, 
                      para ao fim do luto dos mesmos iniciarem uma nova história neste clube. Nessa ocasião, <i>Fernando</i> até então fundador do <i>HERDEIROS MG</i>, 
                      resolve baixar a bandeira e agregar ao novo projeto. Agora com 7 membros: <i>Shina</i>, <i>Paulo Paiva</i>, <i>Siqueira</i>
                      , <i>Coutinho</i>, <i>Carioca</i>, <i>Fernando</i> e <i>Silas</i>, que tornaram responsáveis pelo novo trabalho. 
                      No entanto, o projeto de adentrar neste clube não foi continuado.
                    </p>
                    <p>
                      Entre os dias <strong>26</strong> e <strong>29</strong> de maio, <i>Paulo Paiva</i> e <i>Siqueira</i>, elaboraram o rascunho do
                      <i> Estatuto</i> e <i>Logomarca</i> do pretendido <strong>SOLUS CHRISTUS MG (PE)</strong>. Em <strong>30</strong> de março de <strong>2019</strong>, convocamos a 
                      primeira reunião na casa de <i>Siqueira</i> e juntamente com <i>Paulo Paiva</i> que desenvolveu a arte final, foi apresentado ao grupo o projeto 
                      <strong> SOLUS CHRISTUS MCC</strong>. Presentes na reunião de fundação estavam: <i>Carioca</i>, <i>Fernando</i>, <i>Coutinho</i>, 
                      <i> Silas</i>, <i>Siqueira</i>, <i>Shina</i> e <i>Paulo Paiva</i>. Como se tratava de um motoclube cristão, ficou então acordado 
                      no dia <strong>30</strong> de março de <strong>2019</strong>, que o presidente do <strong>SOLUS CHRISTUS MCC</strong>, seria o nosso <strong>Senhor JESUS CRISTO </strong> 
                      e que nosso clube não seria para honrar homens, mas sim para <strong>Cristo</strong> e que toda regra que viesse a atrapalhar nossa atividade fim, deveria ser retirada 
                      do estatuto, dessa maneira foi feito um estatuto onde o fardo é leve e o julgo suave. Devemos então agradar somente a <strong>Deus</strong> e não a homens, 
                      temos compromisso com a causa biker, porém esta nunca poderá ser maior que as <strong>Escrituras Sagradas</strong>. Agora tinhamos o projeto <strong>SCMCC</strong>, 
                      porém ainda assim <i>Siqueira</i>, <i>Paulo Paiva</i> e <i>Shina</i> tinham um luto restante de 9 meses a cumprir antes 
                      de levantar a bandeira. No mês seguinte o <i>Pr. Moraes (SP)</i> e o <i>Pr. Rúbem (PB)</i>, resolveram sair de seus antigos moto clubes 
                      e agregaram ao <strong>SCMCC</strong>, vale salientar que seus antigos moto clubes em seu estatuto, não havia luto para se cumprir. De mesma forma 
                      <i>Tigrão (DF)</i> e <i>Vitorino (DF)</i>, estes sem luto vieram somar ao novo clube. Apesar de não termos lutos a cumprir, resolvemos 
                      esperar até o dia <strong>25</strong> de junho de <strong>2019</strong> para o levantamento de nossa bandeira, tendo como padrinhos o 
                      <strong> OURIÇOS DO ASLFALTO MC (PE)</strong>.
                    </p>
                  </div>
                </div>
              </h3>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;
