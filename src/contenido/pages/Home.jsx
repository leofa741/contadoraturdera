

import React from 'react'
import { CarrouselComponent } from '../components';

import { ConentLayout } from '../layout/ConentLayout';



export const Home = () => {
  return (
   <>
   <CarrouselComponent />

   <ConentLayout  
    title="Home Page"
    descrp_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris."
    descrip_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris."
    descrip_block="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris."
   >

   
<ul>
                                    <li>Sed ut perspiciatis unde omnis</li>
                                    <li>Lingues es membres del sam familie</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>This is Lorem ipsum dolor sit amet</li>
                                    <li>consectetur adipisicing elit</li>
                                </ul>
   

   </ConentLayout>   
   </>
  )
}
