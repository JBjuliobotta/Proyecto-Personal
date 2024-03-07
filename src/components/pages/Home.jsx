import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div>
        <h1>Bienvenido Somos Envioos, tu mensajería de confianza</h1>
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img className="h-25 w-auto d-inline-block  "  src="src/ImgEnvioos/carousel1.jpg" alt="carousel1" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="h-25 w-auto d-inline-block  "  src="src/ImgEnvioos/carousel2.jpg" alt="carousel2" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="h-25  w-auto d-inline-block  "  src="src/ImgEnvioos/carousel3.jpg" alt="carousel3" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
