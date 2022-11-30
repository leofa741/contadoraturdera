import React from 'react'

export const LayoutBlockete = ({children,descrip_block}) => {
  return (
    <section className="blog-details-area  wow fadeInUp">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-xs-12">
                <div className="blog-details-wrap">
                    
                    <div className="blog-details-content wow fadeInUp">
                       
                        <blockquote>
                          {descrip_block}
                        </blockquote>                      
                                  
                             {children}                       
                    </div>         
                </div>
            </div>         
        </div>
    </div>
</section>
  )
}
