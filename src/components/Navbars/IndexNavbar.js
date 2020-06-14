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
// nodejs library that concatenates strings
import classnames from "classnames";

// import AudioPlayer from "react-h5-audio-player";
// import ReactAudioPlayer from "react-audio-player";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate margin-default-left">
          
          <NavbarBrand className="font-size-custom"
            data-placement="bottom"
            href="/index"
            target="_self"
            title="Solus Christus MCC"
          >
          Solus Christus MCC
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/channel/UCLDVHcYc5Lu49XkDLL05slA"
                target="_blank"
                title="Siga nosso canal no Youtube"
              >
                <i className="fa fa-youtube" />
                <p className="d-lg-none">Youtube</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/soluschristusmcc/"
                target="_blank"
                title="Nos siga no Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/soluschristusmcc/"
                target="_blank"
                title="Nos siga no Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem >
              
            </NavItem>
          </Nav>
          <audio className="radio-player margin-default-right" title="Hino Solus Christus"
              autoPlay="true"
              loop="true"
              controls
              src={require("assets/audio/hino.mp3")}>
          </audio>
          {/* <audio className="radio-player margin-default-right" title="Rádio Solus Christus"
              autoPlay="true"
              loop="true"
              controls
              src="http://109.169.76.155:25073/;stream.mp3">
          </audio> */}
          {/* <AudioPlayer title="Rádio Solus Christus" className="radio-color margin-default-right" autoPlay src="http://109.169.76.155:25073/;stream.mp3" onPlay={e => console.log("onPlay")}/> */}
          {/* <ReactAudioPlayer volume="1.0" autoPlay title="Rádio Solus Christus" className="radio-player margin-default-right" src="http://109.169.76.155:25073/;stream.mp3" controls  /> */}
        </Collapse>
      
        </Container>
    </Navbar>
    
  );
}

export default IndexNavbar;
