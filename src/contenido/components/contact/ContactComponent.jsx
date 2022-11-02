import React from 'react'

export const ContactComponent = () => {
  return (
    <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-heading left">
                    <h4>Let's Talk about Your Business</h4></div>
                <div className="contact-form-box margin-30px-top">
                    <div className="no-margin-lr" id="success-contact-form" ></div>
                    <form id="contactForm" method="post" className="contact-form" action="sendemail.php">
                    <div className="who_we_area col-md-6 col-sm-6 col-4pad wow fadeInUp">
                  <img src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/contact.pngs_b.png?raw=true"/>
               </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="contact-info-box padding-30px-left sm-no-padding">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-info-section no-padding-top margin-10px-top">
                                <h4>Get in Touch</h4>
                                <p> Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse consequat.</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="contact-info-section">
                                <h4>The Office</h4>
                                <ul className="list-style-1 no-margin-bottom">
                                    <li>
                                        <p><i className="fa fa-phone text-center"></i> <strong>Address:</strong> Regina ST, London, SK 8GH.</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-globe text-center"></i> <strong>Phone:</strong> (+44) 123 456 789</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-envelope text-center"></i> <strong>Email:</strong> <a href="javascript:void(0)" className="email_color_site">email@youradress.com</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="contact-info-section border-none no-padding-bottom no-margin-bottom">
                                <h4>Business Hours</h4>
                                <ul className="list-style-2">
                                    <li>Monday - Friday - 9am to 5pm</li>
                                    <li>Saturday - 9am to 2pm</li>
                                    <li>Sunday - Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


   
  )
}
