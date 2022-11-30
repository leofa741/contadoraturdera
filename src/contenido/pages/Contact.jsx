import {  Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BannerComponent, ContactComponent, LoaderComponent } from '../components'
import { customFetch } from '../database/customfech';
import productos from '../database/datadb';
import { ConentLayout } from '../layout/ConentLayout'

export const Contact = () => {

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
    <BannerComponent />
    <ConentLayout 
    title="Contact Us"
    descrip_1="  Contactanos y te responderemos a la brevedad. "
    descrip_2="
    Estamos en las redes sociales. También puedes contactarnos por WhatsApp. "
        descrip_block="Estudio Contable e Impositivo MG & Asoc"
   >
    <ContactComponent />
    


    
   

   </ConentLayout>
     </>
  )
}
}
