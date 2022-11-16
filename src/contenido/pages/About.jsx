import { Box,  LinearProgress} from '@mui/material';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react'
import { BannerComponent, BannerFooter } from '../components'
import { customFetch } from '../database/customfech';
import productos from '../database/datadb';
import { ConentLayout } from '../layout/ConentLayout'

export const About = () => {
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
  
      <LinearProgress  />
    </Stack>
    
       </ConentLayout>
        
        </>
      );
      
  }
  
  else{


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
}