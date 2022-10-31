import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carrousel.css';

export const CarrouselComponent = () => {
  return (
    <Carousel fade>
    <Carousel.Item  >
    <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/banner-bg-bottom.png?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/service-banner-img.jpg?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/testimonial_bg.png?raw=true"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}