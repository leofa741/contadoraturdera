import React from 'react'

export const BannerServices = ({title,subtitle}) => {
  return (
    <div  id="about"  className=" py-70 bg_blue_img">
    <div className="container">
       <div className="row  ">
         
          <div className="title text-left   who_we_area col-md-7 col-sm-6 col-4pad wow fadeInUp">
             <h1 className="c_f pt-0">{title} </h1>
             <p className="about-bottom-s c_f wow fadeInUp" > {subtitle}</p>
             <ul className="right_icone">
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> LorIpsum is simply dummy text of the printing.   </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Lorem Ipsum is simply dummy text of the printing.  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Lorem Ipsum is simply  of the printing.   </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Lorem Ipsum of the printing.   </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li>  Lorem Ipsum is simply dummy text of the printing.  </li>
                <div className="my_20">
                 <img src="assets/images/right.png"/>
              </div>
                <li> Lorem Ipsum is simply dummy text of the printing.   </li>
             </ul>
          </div>
          <div className="who_we_area col-md-5 col-sm-6 col-4pad wow fadeInUp">
          </div>
       </div>
    </div>
 </div>
  )
}
