import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carrousel.css'

export const CarrouselComponent = () => {
  return (
    <Carousel fade 
    className="carrousel"
    >
   
    <Carousel.Item>
      <img
          className="img-responsive"
        src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/contador-publico1.jpg?raw=true"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3   style={{color:"black",
              textShadow: "2px 2px 4px #000000",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              lineHeight: "1.5",
              padding: "0 0 0 0",
              margin: "0 0 0 0",
              position: "absolute",
              top: "-30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
              width: "100%",
              color: "white",

      }}>ASESORAMIENTO CONTABLE</h3>
        <p  style={{color:"black",
              textShadow: "2px 2px 4px #000000",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              lineHeight: "1.5",
              
      }}>Servicios Contables, Impositivos, Generales</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Carousel.Caption 
    className='carousel-caption'
    >
       <h3   style={{color:"black",
              textShadow: "2px 2px 4px #000000",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              lineHeight: "1.5",
              padding: "0 0 0 0",
              margin: "0 0 0 0",
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
              width: "100%",
              color: "white",

      }}>ASESORAMIENTO CONTABLE</h3>
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
