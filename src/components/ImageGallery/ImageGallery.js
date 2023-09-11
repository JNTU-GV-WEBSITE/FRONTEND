import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageGallery.css';

function ImageGallery() {
    return (
      <Carousel className="image">
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/websiteHomeBanner/10.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Image 1</h3>
            <p>Description of image 1.</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/websiteHomeBanner/4.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Image 2</h3>
            <p>Description of image 2.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/websiteHomeBanner/6.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Image 3</h3>
            <p>Description of image 3.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://jntugv.edu.in/images/9266a0f9fc226ffbf57a3beb4c6b6388/websiteHomeBanner/1.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Image 4</h3>
            <p>Description of image 4.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ImageGallery;
  