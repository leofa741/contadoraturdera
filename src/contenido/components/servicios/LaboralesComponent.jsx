import { LinearProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { ConentLayout } from '../../layout/ConentLayout'
import { LayoutBlockete } from '../../layout/LayoutBlockete'
import { LayoutServices } from '../../layout/LayoutServices'
import { LoaderComponent } from '../loader/LoaderComponent'
import { BannerServices } from './BannerServices'

export const LaboralesComponent = () => {
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
     <LoaderComponent />
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
    title="Laborales"

    descrip_1="Contamos con un equipo de profesionales altamente capacitados para brindarle un servicio de calidad y confianza. Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "

    descrip_2="PyMEs, empresas de servicios, comerciales, industriales, etc. brindando soluciones laborales integrales a empresas, instituciones y particulares "

>

</LayoutServices>
<BannerServices
    title="Laborales"

    subtitle="
    Nuestros servicios incluyen: 
     "

    >
  <ul className="right_icone">
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>    Liquidación de sueldos, jornales y cargas sociales</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>   Confección y presentación de declaraciones juradas y boletas de sindicatos </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Emisión de recibos de haberes y registración en el libro de sueldos </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Liquidaciones finales</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>     Inscripciones varias, altas y bajas de empleados, confección de certificaciones de servicios</li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Asesoramiento proactivo sobre los distintos Convenios Colectivos de Trabajo </li>
                <div className="my_20">
                    <img src="assets/images/right.png"/>
                </div>
                <li> Impresión y entrega de recibos de haberes </li>
               

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