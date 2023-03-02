import React from 'react'

export const LayoutServices = ({children,title,descrip_1,descrip_2}) => {
  return (
    <section className="blog-details-area  wow fadeInUp">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="blog-details-wrap">
                            <div className="blog-details-img">
                                <img src="assets/images/blog/blog-details.jpg" alt=""/>
                            </div>
                            <div className="blog-details-content wow fadeInUp">
                                <h3>{title}</h3>
                                <p>{descrip_1}</p>
                                <p>{descrip_2}</p>     
                                   {children}                               
                            </div>             
                        </div>
                    </div>                 
                </div>
            </div>
        </section>
  )
}
