import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carrousel.css'

export const CarrouselComponent = () => {
  return (
    <Carousel fade 
    className="carrousel"
    >
    <Carousel.Item  interval={1000}>   
      
    <img
        className="img-responsive"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/s_b.png?raw=true"  alt="Second slide"           
        style={{width: "100%", height: "60%"}}        
      />

      <Carousel.Caption>
        <h3   style={{color:"white"}}>ASESORAMIENTO CONTABLE</h3>
        <p   style={{color:"white"}}>Estudio Contable e Impositivo MG & Asoc</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
          className="img-responsive"
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
        <h3 style={{color:"black"}} >ASESORAMIENTO CONTABLE</h3>
        <p   style={{color:"black"}}>
          Servicios Societarios, Laborales, Administrativos
        </p>
      </Carousel.Caption>
      <img
         className="img-responsive"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/servicio-contabilidad.png?raw=true"
        alt="Third slide"    
      />

      
    </Carousel.Item>
  </Carousel>
  )
}
