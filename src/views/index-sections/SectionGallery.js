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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import InstagramEmbed from 'react-instagram-embed';
// core components

const items = [
  { src: require("assets/img/carousel/01.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/02.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/03.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/04.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/05.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/06.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/07.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/08.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/09.webp"), altText: "Solus Christus" }
];

function SectionGallery() {
  return (
    <>
      <div>
        <Container className="sc-clean-photo">
          <Row>
          <InstagramEmbed 
            url='https://www.instagram.com/p/CA_wVkmAMev/?utm_source=ig_web_copy_link'
            maxWidth={320}
            hideCaption={true}
            hide={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
          <InstagramEmbed 
            url='https://www.instagram.com/p/CA7o-AXpejs/?utm_source=ig_web_copy_link'
            maxWidth={320}
            maxHeight={320}
            hideCaption={true}
            hide={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
            </Row>
        </Container>
        <br />
      </div>{" "}
    </>
  );
}

export default SectionGallery;
