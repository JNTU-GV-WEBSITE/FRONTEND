import React from "react";
import { Carousel } from "react-bootstrap";
import FirstImage from "./Image Gallery Photos/FirstImage.jpg";
import SecondImage from "./Image Gallery Photos/SecondImage.jpg";
import ThirdImage from "./Image Gallery Photos/ThirdImage.jpg";
import FourthImage from "./Image Gallery Photos/FourthImage.jpg";
import FifthImage from "./Image Gallery Photos/FifthImage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageGallery.css";

function ImageGallery() {
  return (
    <Carousel className="image">
      <Carousel.Item>
        <img src={FirstImage} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  src={SecondImage} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={ThirdImage} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  src={FourthImage} alt="Fourth slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img  src={FifthImage} alt="Fifth slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageGallery;
