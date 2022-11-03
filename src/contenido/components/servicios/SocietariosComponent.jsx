import React from 'react'
import { LayoutServices } from '../../layout/LayoutServices'
import { BannerServices } from './BannerServices'

export const SocietariosComponent = () => {
  return (
    <>

        <LayoutServices
            title="Societarios"

            descrip_1="Contamos con un equipo de profesionales altamente capacitados para brindarle un servicio de calidad y confianza. Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "

            descrip_2="Nuestro equipo de profesionales altamente capacitados, le brindará un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "

            >

            </LayoutServices>
            <BannerServices
            title="Societarios"

            subtitle="Contamos con un equipo de profesionales altamente capacitados para brindarle un servicio de calidad y confianza. Nuestro objetivo es brindarle un servicio de calidad y confianza, para que pueda concentrarse en su negocio y no en la parte administrativa y contable. "
            />
            </>
  )
}
