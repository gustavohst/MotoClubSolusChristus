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
  { src: require("assets/img/carousel/01.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/03.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/23.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/04.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/05.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/22.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/06.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/21.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/07.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/17.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/08.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/09.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/10.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/19.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/11.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/20.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/13.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/14.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/16.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/18.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/12.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/25.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/26.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/27.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/29.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/30.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/31.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/32.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/33.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/34.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/35.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/36.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/37.png"), altText: "Solus Christus" },
  { src: require("assets/img/carousel/24.png"), altText: "Solus Christus" }
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
                          captionText=""
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
