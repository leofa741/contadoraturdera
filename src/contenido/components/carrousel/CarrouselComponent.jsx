import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export const CarrouselComponent = () => {
  return (
    <Carousel fade>
    <Carousel.Item  >
    <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/bannercont3.png?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3   style={{color:"black"}}>ASESORAMIENTO CONTABLE</h3>
        <p   style={{color:"black"}}>Estudio Contable e Impositivo MG & Asoc</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/contador-publico1.jpg?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3   style={{color:"black"}}>ASESORAMIENTO CONTABLE</h3>
        <p  style={{color:"black"}}>Servicios Contables, Impositivos, Generales</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Carousel.Caption 
    className='carousel-caption'
    >
        <h3  >ASESORAMIENTO CONTABLE</h3>
        <p   style={{color:"black"}}>
          Servicios Societarios, Laborales, Administrativos
        </p>
      </Carousel.Caption>
      <img
        className="d-block w-100"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/servicio-contabilidad.png?raw=true"
        alt="Third slide"    
      />

      
    </Carousel.Item>
  </Carousel>
  )
}
