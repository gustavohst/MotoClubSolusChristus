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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="pt-o" id="carousel">
        <Container>
        <Row>
        
          {items.map(item => (
        <Col className="mr-auto ml-auto" md="12" >      
            
                <img src={item.src} alt={item.altText} className="img-gallery-custom  img-responsive" />
                </Col>  
          ))}
          
            </Row>
        </Container>
        <br />
      </div>{" "}
    </>
  );
}

export default SectionGallery;
