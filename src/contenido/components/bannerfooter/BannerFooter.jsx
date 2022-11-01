import React from 'react'

export const BannerFooter = ( {descripcion}) => {
  return (
    <>

<div className="our_partners_area bg_gradient_team">
         <div className="book_now_aera ">
            <div className="container">
              <div className="row book_now">
                  <div className="col-md-7 booking_text">
                     <h4>
                        Estudio Contable e Impositivo <br/>MG & Asoc
                     </h4>
                     <p>
                    {descripcion}
                     </p>
                  </div>
                  <div className="col-md-5 p0 book_bottun">
                     <div className="col-md-5">
                     </div>
                     <div className="col-md-7">
                        <div className="top-banner wow fadeInRight text-left" >
                           <a id="#services" href="
                           https://api.whatsapp.com/send?phone=-5491137883486&text=Hola%20MG%20Asoc%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios
                         
                           " className="btn btn-primary radius-50  wow fadeInUp  js-scroll-trigger" data-wow-delay="0.5s" >Free Consultation</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>

  )
}
