
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
      <>   
   <div className="our_footer_area">
         <div className="book_now_aera ">
            <div className="container wow fadeInUp">
               <div className="row book_now">
                  <div className="col-md-4">
                     <div className="">
                        <a className=" logo-biss" href="index.html"> 
                        MG & Asoc
                        </a>
                     </div>
                     <p className="footer-h">
                        Estudio Contable e Impositivo MG & Asoc
                     </p>
                    
                  </div>
                  <div className="col-md-1 ">
                  </div>
                  <div className="col-md-3">
                     <h2 className="footer-top"> Links  </h2>
                     <ul className="footer-menu">
                        <li>  <Link to="/home">Home</Link>    </li>
                        <li>  <Link to="/about">About</Link>    </li>
                        <li>  <Link to="/contact">Contact</Link>    </li>                      
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <ul className="location">
                        <h2 className="footer-top">Contact Info </h2>
                        <li className="footer-left-h">Las Orcadas N° 57, <br/>Llavallol, Bs As </li>
                        <li className="footer-left-h"><span className="c_yellow">Email :</span>
                           <a href="mailto:estudiomg_asociados@outlook.com">estudiomg_asociados@outlook.com</a>
                        </li>
                        <li className="footer-left-h"><span className="c_yellow">Call Us: </span>011-2254-7722
                        </li>
                     </ul>
                  </div>
                  <div className="col-md-12">
                     <p className="color-gray"> Designed by <a href="https://www.puentesdigitales.com.ar/">www.puentesdgitales.com.ar </a> and distributed by <a href="https://www.puentesdigitales.com.ar/">PuentesDigitales</a></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
  )
}
