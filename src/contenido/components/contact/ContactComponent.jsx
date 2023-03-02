import React from 'react'
import './contact.css'
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const ContactComponent = () => {
  return (
    <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-heading left">
                    <h4>Hablemos de su negocio</h4></div>
                <div className="contact-form-box margin-30px-top">
                    <div className="no-margin-lr" id="success-contact-form" ></div>
                    <form id="contactForm" method="post" className="contact-form" action="sendemail.php">
                    <div className="contact-img">
                  <img 
                  className='img-fluid'
                  src="https://github.com/leofa741/contadoraturdera/blob/master/src/assets/images/contact.png?raw=true"/>
               </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="contact-info-box padding-30px-left sm-no-padding">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-info-section no-padding-top margin-10px-top">
                                <h4>Contáctanos</h4>
                                <p> 

                                    .</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="contact-info-section">
                                <h4>The Office</h4>
                                <ul className="list-style-1 no-margin-bottom">
                                    <li>
                                        <p><RoomIcon
                                        style={{ fontSize: 20 }}
                                        color="primary"
                                        /><strong>Address:</strong> Las Orcadas N°57 LLavallol,Bs.As,Argentina</p>
                                    </li>
                                    <li>
                                        <p><CallIcon
                                        style={{ fontSize: 20 }}
                                        color="primary"
                                        /> <strong>Phone:</strong> (+54) 11-2254-7722</p>
                                    </li>
                                    <li>
                                        <p><MailOutlineIcon
                                        style={{ fontSize: 20 }}
                                        color="primary"
                                        /> <strong>Email:</strong> <a href='mailto:estudiomg_asociados@outlook.com' className="email_color_site"> "estudiomg_asociados@outlook.com"</a></p>
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
