import React from 'react'

export const NavvBar = () => {
  return (
    <>
 <div className="bg-banner-img clip-ellipse">
         <div className="ovrllay">
    
            <nav className="navbar navbar-default header_aera affix-top">
               <div className="container m-s">
               
                  <div className="col-md-4 p0">
                     <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand logo-biss" href="index.html"> Star Law Firm </a>
                     </div>
                  </div>
             
                  <div className="col-md-8 p0">
                     <div className="collapse navbar-collapse" id="min_navbar">
                        <ul className="nav navbar-nav navbar-right">
                           <li className="dropdown submenu">
                              <a href="index.html" className="">Home</a>
                           </li>
                           <li className="dropdown submenu">
                              <a href="about.html" className="">About</a>
                           </li>
                           <li className="dropdown submenu">
                              <a href="services.html" className=""> Services</a>
                           </li>
                           <li className="dropdown submenu">
                              <a href="blog.html" className="">Blog</a>
                           </li>
                           <li className="dropdown submenu">
                              <a href="elements.html" className="">Elements</a>
                           </li>
                           <li className="dropdown submenu">
                              <a href="contact.html" className="">Contact</a>
                           </li>
                        </ul>
                     </div>
                 
                  </div>
               </div>
             
            </nav>
       
           
         </div>
      </div>
    </>
  )
}
