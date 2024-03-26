import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./PressRelease.css";

const Press = () => {
  return (
    <div className="carosel-container">
      <div>
        <h4 style={{ marginTop: "30px", marginBottom: "30px", color: "wheat" }}>
          Press Release
        </h4>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/xuv700-press-releses-720x405px_rush-like-never-before.jpg?rev=0944b8d93e2e441cbbbfdcf3bdcf7f36&extension=webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/xuv700-press-releses-720x405px_xuv700-price-reveal.jpg?rev=56e516557a0940bb95e0f1703734646f&extension=webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/xuv700-press-releses-720x405px_introduces-two-variants.jpg?rev=2cbb2f99bfdd4bb9b14064605805597b&extension=webp" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/xuv700-press-releses-720x405px_25000-bookings-in-57-minutes.jpg?rev=df29aef20d6c462db25eaf9e58daf667&extension=webp" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Press;
