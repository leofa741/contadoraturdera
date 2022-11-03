import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { About, Contact, Home } from '../pages'
import { Contables } from '../pages/Contables'
import { Impositivos } from '../pages/Impositivos'
import { Laborales} from '../pages/Laborales'
import { Societarios} from '../pages/Societarios'
import { Generales} from '../pages/Generales'





export const RoutesContent = () => {
  return (


  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />

     <Route path="/contables" element={<Contables />} />
      <Route path="/impositivos" element={<Impositivos />} />
      <Route path="/laborales" element={<Laborales />} />
      <Route path="/societarios" element={<Societarios />} />
      <Route path="/generales" element={<Generales />} />

     <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>


 
  )
}
