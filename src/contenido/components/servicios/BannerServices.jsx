import React from 'react'

export const BannerServices = ({children,title,subtitle}) => {
  return (
    <div  id="about"  className=" py-70 bg_blue_img">
    <div className="container">
       <div className="row  ">         
          <div className="title text-left   who_we_area col-md-12 col-sm-6 col-4pad wow fadeInUp">
             <h1 className="c_f pt-0">{title} </h1>
             <p className="about-bottom-s c_f wow fadeInUp" > {subtitle}</p>


        {children}


          </div>
          <div className="who_we_area col-md-5 col-sm-6 col-4pad wow fadeInUp">
          </div>
       </div>
    </div>
 </div>
  )
}
