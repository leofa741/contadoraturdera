

import React from 'react'
import { BannerFooter, CarrouselComponent } from '../components';

import { ConentLayout } from '../layout/ConentLayout';



export const Home = () => {
  return (
   <>
   <CarrouselComponent />

   <ConentLayout  
    title="MG & Asoc"
    descrip_1="Nos dedicamos a la contabilidad y asesoramiento de empresas y particulares."
    descrip_2="Estudio Contable e Impositivo MG & Asoc
    Somos un estudio contable e impositivo con más de 20 años de experiencia en el mercado. Nuestro objetivo es brindar un servicio integral de calidad, con un trato personalizado y cercano, para que nuestros clientes puedan concentrarse en su actividad principal."
    descrip_block="
    Estudio Contable e Impositivo MG & Asoc  "
   >

<div  id="about"  className="bg_gray py-70">
         <div className="container">
            <div className="row ">
              
               <div className="who_we_area title text-left col-md-6 col-sm-6 col-4pad wow fadeInUp">
                  <h1 className="PT-90">  
                      Quienes Somos
                    </h1>
                  <div className="hed_img"> 
                     <img src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/headding-img.png?raw=true"/>
                  </div>
                  <p className="about-bottom-s  wow fadeInUp" >Somos un estudio joven, emprendedor, compuesto por profesionales con distintas especializaciones, que nace para acompañar a la pymes y pequeños negocios conocidos como “start ups” que no cuentan una estructura administrativa – contable o que están iniciando actividade</p>
               
               </div>
               <div className="who_we_area col-md-6 col-sm-6 col-4pad wow fadeInUp">
                  <img src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/s_b.png?raw=true"/>
               </div>
            </div>
         </div>
      </div>


   </ConentLayout>   
   <BannerFooter  /> 
   </>
  )
}
