import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TeachersDay from "../../assets/ImageGalleryPictures/TeachersDay.jpg";
import IndependenceDay1 from "../../assets/ImageGalleryPictures/IndependenceDay1.JPG";
import IndependenceDay2 from "../../assets/ImageGalleryPictures/IndependenceDay2.JPG";
import IndependenceDay3 from "../../assets/ImageGalleryPictures/independenceDay3.JPG";
import Expo from "../../assets/ImageGalleryPictures/Expo.JPG";
import "./ImageGallery.css";

function ImageGallery() {
  return (
    <div className="mianDivIG">
      <div className="mainImageGallery">
        <Carousel fade>
          <Carousel.Item>
            <img className="image" src={TeachersDay} alt="First slide" />
            <Carousel.Caption>
              <div className="carouselText">
                {/* <h4>Image</h4>
                <p>Image Description</p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={IndependenceDay1} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
                {/* <h4>Image</h4>
                <p>Image Description</p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={IndependenceDay2} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
                {/* <h4>Image</h4>
                <p>Image Description</p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="image" src={IndependenceDay3} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
                {/* <h4>Image</h4>
                <p>Image Description</p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="image" src={Expo} alt="Second slide" />
            <Carousel.Caption>
              <div className="carouselText">
                {/* <h4>Image</h4>
                <p>Image Description</p> */}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageGallery;
