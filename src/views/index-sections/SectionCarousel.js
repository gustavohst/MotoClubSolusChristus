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
  { src: require("assets/img/carousel/03.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/23.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/04.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/05.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/22.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/06.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/21.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/07.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/17.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/08.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/09.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/10.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/19.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/11.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/20.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/13.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/14.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/16.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/18.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/12.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/25.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/26.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/27.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/29.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/30.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/31.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/32.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/33.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/34.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/35.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/36.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/37.webp"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/24.webp"), altText: "Solus Christus" }
];

function SectionCarousel() {
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
      <div id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                    <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          //captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
