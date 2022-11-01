import React from 'react'
import { BannerComponent, ContactComponent } from '../components'
import { ConentLayout } from '../layout/ConentLayout'

export const Contact = () => {
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
