import React from 'react'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/whatapp.css';
function Whatsapp() {
    
    return (
        <div>
            <a className="float" href="https://wa.me/919479672015"target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="my-float"   id="icons" /></a>
        </div>
    )
}
export default Whatsapp;