import React from 'react'

import './social.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Social = () => {
  return (
    <>
    	<div className="social">
		<ul>
			<li><a href="https://www.facebook.com" target="_blank" className="icon-facebook"><FacebookIcon/></a></li>
			<li><a href="https://www.instagram.com" target="_blank" className="icon-instagram"><InstagramIcon/></a></li>		
			<li><a href="https://wa.me/+541137883486" target="_blank" className="icon-whatsapp"><WhatsAppIcon/> </a></li>
			<li><a href="mailto:contadores.mg.asoc@gmail.com" target="_blank" className="icon-mail"><MailOutlineIcon/> </a></li>
	


		</ul>
		
	</div>
    
    </>
  )
}