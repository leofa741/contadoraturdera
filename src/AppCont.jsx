import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const AppCont = () => {
  return (
    <>

    <AppTheme>

    <AppRouter />
    </AppTheme>

 

    </>
   
  )
}
