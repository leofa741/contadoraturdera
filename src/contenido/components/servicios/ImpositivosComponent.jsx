import {  Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { ConentLayout } from '../../layout/ConentLayout'
import { LayoutBlockete } from '../../layout/LayoutBlockete'
import { LayoutServices } from '../../layout/LayoutServices'
import { LoaderComponent } from '../loader/LoaderComponent'
import { BannerServices } from './BannerServices'

export const ImpositivosComponent = () => {

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
    title="Impositivos"
    descrip_1="Contamos con un equipo de profesionales altamente capacitados para brindarle un servicio de calidad y confianza. Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "

    descrip_2="
    Necesitas un asesoramiento impositivo? Contactanos y te asesoraremos en todo lo relacionado a impuestos, ya sea para tu empresa o para vos como persona física."
   />

  

    <BannerServices
    title="Impositivos"

    subtitle="
    Nuestros servicios incluyen: 
     "

    >
  <ul className="right_icone">
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>   Liquidación mensual y anual de tributos nacionales y provinciales: </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  IVA, Ganancias, Bienes Personales, Ingresos Brutos (Local / Convenio Multilateral) </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Pedido de Devolución del Impuesto a las Ganancias por compra de Dólares  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Declaraciones Juradas y otros informes</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>    Asesoramiento y atención a Monotributistas: Inscripción | Recategorización | Modificación de Datos | Bajas  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Cambio de Obra Social a Monotributistas </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li>Regímenes de Retención (SICORE) </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li>   Tramitación de inscripciones ante organismos nacionales y provinciales </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li>    Confección y presentación de moratorias y planes de facilidades de pago Tercerización de tareas administrativas, conciliaciones, análisis de cuentas, otros</li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li>  Asistencia en la atención de inspecciones y requerimientos</li>


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