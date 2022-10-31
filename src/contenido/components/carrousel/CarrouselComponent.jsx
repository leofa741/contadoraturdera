import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export const CarrouselComponent = () => {
  return (
    <Carousel fade>
    <Carousel.Item  >
    <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/contador-publico-calculo_9843-400x267.jpg?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>ASESORAMIENTO CONTABLE</h3>
        <p>Estudio Contable e Impositivo MG & Asoc</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/bannercont3.webp?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>ASESORAMIENTO CONTABLE</h3>
        <p>Servicios Contables, Impositivos, Generales</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/Contador-público-como-revisor-fiscal.webp?raw=true"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>ASESORAMIENTO CONTABLE</h3>
        <p>
          Servicios Societarios, Laborales, Administrativos
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
