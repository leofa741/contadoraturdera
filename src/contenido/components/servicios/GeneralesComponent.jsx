import { LinearProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { ConentLayout } from '../../layout/ConentLayout'
import { LayoutBlockete } from '../../layout/LayoutBlockete'
import { LayoutServices } from '../../layout/LayoutServices'
import { BannerServices } from './BannerServices'

export const GeneralesComponent = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
      
    customFetch(3000,productos).then((data) => setItems(data));
   }, []);

  if (items.length === 0) {
      return (
       <>
        <ConentLayout
        title="Estudio Contable e Impositivo MG & Asoc"
        descrip_1=""
        
        descrip_2="  "
        descrip_block="contadores.mg.asoc@gmail.com "
       >

     <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
    <h5>Cargando... </h5> 
      <LinearProgress  />
    </Stack>
    
       </ConentLayout>
        
        </>
      );
      
  }
  
  else{
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
        <LayoutBlockete
    descrip_block="Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "
    >
      </LayoutBlockete>
   
   </>
  )
}
}