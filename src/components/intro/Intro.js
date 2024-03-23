import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="carosel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="caro-img"
            src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/hero-banner-carousel-images/xuv-700/new-15-01-2024/website-banner-03.jpg?rev=2cb4b9b269284d7681aefb53686e7264&extension=webp"
            text="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caro-img"
            src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/hero-banner-carousel-images/xuv-700/new-15-01-2024/website-banner-02.jpg?rev=0fbb54b8392c4a108de7a9de0a7d190d&extension=webp"
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caro-img"
            src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/hero-banner-carousel-images/xuv-700/banner-1920x1080.jpg?rev=8d5151796c514737b2f2bbcd2e52df07&extension=webp"
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Intro;
