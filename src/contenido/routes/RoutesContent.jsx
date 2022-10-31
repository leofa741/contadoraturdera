import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About, Home } from '../pages'


export const RoutesContent = () => {
  return (


  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>


 
  )
}
