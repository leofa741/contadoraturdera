import { LinearProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { ConentLayout } from '../../layout/ConentLayout'
import { LayoutBlockete } from '../../layout/LayoutBlockete'
import { LayoutServices } from '../../layout/LayoutServices'
import { BannerServices } from './BannerServices'

export const ContablesComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      
    customFetch(2000,productos).then((data) => setItems(data));
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
    title="Contables"

    descrip_1="Contamos con un equipo de profesionales altamente capacitados para brindarle un servicio de calidad y confianza. Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "

    descrip_2="
    brindando soluciones contables integrales a empresas, instituciones y particulares "
>


</LayoutServices>

   <BannerServices
    title="Contables"

    subtitle="Nuestros servicios contables son: "  >
     <ul className="right_icone">
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Confección y análisis de Estados Financieros y contables periódicos y anuales  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Preparación de Estados Contables  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>Confección de diferentes modelos de informes, anexos y notas complementarias  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Certificaciones e informes: de Ingresos, de Ventas, de Origen de Fondos (Bs de Uso o Inmuebles), de Ingresos y Egresos </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>   Apoyo a las actividades de control interno, brindando soporte periódico.  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Servicios de auditoría externa y revisiones limitadas de estados contables y financieros  </li>
                <div className="my_20">  
                    <img src="assets/images/right.png"/>
                </div>
                <li>   Servicios de auditoría interna, operativa y revisiones de controles internos. </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li>    Análisis y proyección de Estados Contables </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li>   Informes y Certificaciones contables </li>

             </ul>

   </BannerServices>
   <LayoutBlockete
    descrip_block="Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "
    >
      </LayoutBlockete>
    
   </>
  )
}
}
