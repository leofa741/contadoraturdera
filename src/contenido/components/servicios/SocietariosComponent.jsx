import {  Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { ConentLayout } from '../../layout/ConentLayout'
import { LayoutBlockete } from '../../layout/LayoutBlockete'
import { LayoutServices } from '../../layout/LayoutServices'
import { LoaderComponent } from '../loader/LoaderComponent'
import { BannerServices } from './BannerServices'

export const SocietariosComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      
    customFetch(5000,productos).then((data) => setItems(data));
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
 
 <Stack sx={{ width: '100%', color: 'grey.500',justifyContent:'center' , alignItems:'center' }} spacing={2}>   
   <LoaderComponent />
  </Stack>    
       </ConentLayout>        
        </>
      );      
  }
  
  else{
  return (
    <>
        <LayoutServices
            title="Societarios"

            descrip_1="Contamos con un equipo de profesionales altamente capacitados para brindarle un servicio de calidad y confianza. Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "

            descrip_2="Consultanos via online o por telefono, te asesoraremos y te daremos una solucion a tu medida. "  >

            </LayoutServices>
         
    <BannerServices
    title="Societarios"
    subtitle="
    Nuestros servicios incluyen:"    >
  <ul className="right_icone">
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>    Constitución, modificación y adecuación de sociedades</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Elección del tipo societario acorde al emprendimiento y ponderando el impacto impositivo tanto en la sociedad como en sus integrantes </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Asistencia técnica en la inscripción (presentación de documentación, contestación de vistas, etc.) y publicación de edictos y pago de tasas retributivas  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Reorganizaciones societarias (transformación, fusión y escisión de sociedades)
<br/> Aumento y/o reducción del Capital social
<br/> Disolución y liquidación de sociedades</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Control cumplimiento normas societarias establecidas por la Ley de Sociedades Comerciales, en lo pertinente a libros, administración, socios, asambleas y documentación  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>   Asistencia en la presentación de balances </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li> Asistencia en la presentación de estados contables </li>     
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
