import React from 'react'
import { LayoutServices } from '../../layout/LayoutServices'
import { BannerServices } from './BannerServices'

export const GeneralesComponent = () => {
  return (
   <>

   <LayoutServices
        title="Servicios Generales"

       descrip_1="Contamos con un equipo de profesionales que se encargan de la administración de su empresa, con el fin de que usted pueda dedicarse a lo que realmente le gusta, su negocio. Nuestro objetivo es que usted pueda concentrarse en su negocio y nosotros nos encarguemos de la administración de su empresa. Nuestro servicio de administración de empresas incluye:"

         descrip_2=" - Asesoramiento en la toma de decisiones
          "  


        >

        </LayoutServices>

        <BannerServices
    title="Servicios Generales"

    subtitle="
    Nuestros servicios incluyen: 
     "

    >
  <ul className="right_icone">
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>     Pedido de Devolución del Impuesto a las Ganancias por compra de Dólares</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>    Cambio de Obra Social a Monotributistas </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Pedido de Antecedentes Penales</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Trámites ante Anses</li>
                
             </ul>

        </BannerServices >
   
   
   </>
  )
}
