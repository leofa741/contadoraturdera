import { Typography } from '@mui/material'
import React from 'react'

export const ConentLayout = ({children,title}) => {
  return (
    <div>

     
        <Typography variant="h3" component="h3" gutterBottom   color="primary"> {title} </Typography>
        {children}




    </div>
  )
}
