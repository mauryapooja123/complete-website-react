import React from "react";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import NavbarPage from "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import CardPage from "../Card/CardPage";
import { Carousel } from "react-bootstrap";

import header from "../../img/header.png";
import tech1 from "../../img/tech1.jpg";
import tech2 from "../../img/tech2.jpg";
import tech3 from "../../img/tech3.jpg";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="mb-4">
          <img className="d-block w-100" src={tech3} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tech2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="mb-4">
          <img className="d-block w-100" src={tech1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <CardPage />
    </>
  );
}

export default Home;
