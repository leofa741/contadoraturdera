import './contentlayout.css'


export const ConentLayout = ({children,title,descrip_1,descrip_2,descrip_block}) => {
  return (
    <section className="blog-details-area ">
            <div className="container"> 
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="blog-details-wrap">
                            <div className="blog-details-img">
                                <img src="assets/images/blog/blog-details.jpg" alt=""/>
                            </div>
                            <div className=" blog-details-content">
                            
                                <h3>{title}</h3>
                                <p>{descrip_1}</p>
                                <p>{descrip_2}</p>
                                <blockquote>
                                  {descrip_block}
                                </blockquote>
                              <div className="children">
                              	    	
                                    {children}
                                    </div>
                               
                            </div>       
                        </div>
                    </div>                 
                </div>
            </div>
        </section>
  )
}
