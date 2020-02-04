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
      <div className="section section-buttons">
        <Container>
          <div className="title">
            <h2>Nossa história</h2>
          </div>
          <div id="buttons">
            <div className="title">
              <h3>
                <small>
                <details>
                    <summary>Em 04 de dezembro de 2018, após Siqueira sair do ESQUEDRÃO DE CRISTO MM e ficar cumprindo um luto estipulado de 12 meses pelo ministéri, o mesmo no início de março de 2019, fez contato com o Athos 2 MC (MT), com a finalidade de ao fim de seu luto, adentrar nas fileiras daquele clube cristão e levantar a bandera ATHOS 2 no estado de Pernambuco, demonstrando a vontade de seguir seu Chamado evangelístico.

                  Assim, junto com Paulo Paiva e Shina, todos ex integrantes do ECMM, começaram um trabalho de recrutamento para ao fim do luto dos mesmos, iniciarem uma nova história no ATHOS 2 MC. Nessa ocasião, FERNANDO até então fundador do HERDEIROS MG, resolve baixar a bandeira e agregar ao novo projeto. Agora seriam 7 membros: SHINA, PAULO PAIVA, SIQUEIRA, COUTINHO (ex ECMM), CARIOCA (ex KERIGMA-RJ), FERNANDO e SILAS (ex HERDEIROS MG), seriam responsáveis pelo novo trabalho. No entanto, o projeto não foi para frente e desistimos do A2...
                  </summary>
                  <br/>
                  Entre os dias 26 e 29 de maio, Paulo Paiva e Siqueira, elaboraram o rascunho do ESTATUTO e LOGOMARCA do pretendido SOLUS CHRISTUS MG PERNAMBUCO.
                  Em 30 de março de 2019, convocamos a primeira reunião na casa de Siqueira e juntamente com Paulo Paiva que desenvolveu a arte final, foi apresentado ao grupo o projeto SOLUS CHRISTUS MCC. Presentes na reunião de fundação: Carioca, Fernando, Coutinho, Silas, Siqueira, Shina e Paulo Paiva.
                  Ficou acordado então no dia 30 de março de 2019, que o presidente do SOLUS CHRISTUS MCC, seria o nosso Senhor JESUS CRISTO... Que nosso clube não seria para honrar homens, mas sim para Cristo e que toda regra que viesse a atrapalhar nossa atividade fim, deveria ser retirada do estatuto, dessa maneira foi feito um estatudo onde o fardo é leve e o julgo suave. Devemos então agradar somente a Deus e não a homens, temos compromisso com a causa biker, porém esta nunca poderá ser maior que as Escrituras Sagradas.
                  Agora tinhamos o projeto SCMCC, porém ainda sim Siqueira, Paulo Paiva e Shina tinham um luto restante de 9 meses a cumprir antes de levantar a bandeira.
                  No mês seguinte o Pr. Moraes (SP) e o Pr. Rúbem (PB), resolveram sair do ATHOS 2 e agregaram ao SCMCC, vale salientar que o A2 em seu estatuto, não hvia luto para se cumprir. De mesma forma Tigrão (DF) e Vitorino (DF), estes sem luto vieram somar ao novo clube.
                  Apesar de não termos lutos a cumprir, resolvemos esperar até o dia 25 de junho de 2019 para o levantamento de nossa bandeira, tendo comom padrinhos o OURIÇOS DO ASLFALTO MC (PE).
                  </details>
                  <br/>
                  <strong>SOLUS CHRISTUS MCC - BRASIL</strong>

                  <p>E conhecereis a verdade, e a verdade vos libertará.</p>
                  <p>João 8:32</p>
                </small>
              </h3>
            </div>
          </div>

        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;
