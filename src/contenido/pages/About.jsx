import React from 'react'
import { BannerComponent, BannerFooter } from '../components'
import { ConentLayout } from '../layout/ConentLayout'

export const About = () => {
  return (
    <>

    <BannerComponent />
    <ConentLayout 
    title="About Us"
    descrip_1="Somos una firma joven, emprendedora, conformada por profesionales con diferentes especializaciones, que nace para acompañar a las pequeñas y medianas empresas y pequeñas empresas conocidas como “start ups” que no cuentan con estructura administrativa o contable o que están iniciando actividades."
    
    descrip_2="
   No dudes en contactarnos, estamos para ayudarte. "
    descrip_block="
    Estudio Contable e Impositivo MG & Asoc  "
   >

   
<ul>
                                    <li>Servicios Contables</li>
                                    <li>Asesoramiento Impositivo</li>
                                    <li>Asesoramiento Laboral</li>
                                    <li>Asesoramiento Legal</li>
                                    <li>Asesoramiento Financiero</li>
                                    <li>Asesoramiento Tributario</li>
                                    <li>Asesoramiento de Seguros</li>
                                    <li>Asesoramiento de Inversiones</li>
                                    <li>Asesoramiento societarios</li>
                                   
                                </ul>
   

   </ConentLayout> 
   <BannerFooter  
    descripcion="
    Atendemos a monotributistas, autónomos, pequeñas y medianas empresas, profesionales, comercios, industrias, etc. Nuestra misión es brindar un servicio integral de calidad, con un trato personalizado y cercano, para que nuestros clientes puedan concentrarse en su actividad principal."
    
    />
   </>
  )
}
