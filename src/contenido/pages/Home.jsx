import { Typography } from '@mui/material'
import {MailOutline} from '@mui/icons-material';

import React from 'react'
import { ConentLayout } from '../layout/ConentLayout';

export const Home = () => {
  return (
   <>

   <ConentLayout  
    title="Home Page"
   >

 

    <MailOutline color="red" fontSize="large" />
   

   </ConentLayout>





   
   </>
  )
}
