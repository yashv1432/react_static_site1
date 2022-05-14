import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../assets/css/footer.css';
import '../assets/phone-css/footerPhone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <div>
            <div className="cont5">
                <section className="d-flex flex-wrap py-3 my-4 border-top">
                    <div className="col-md-4 flex-column mb-0 text-white flex-fill left01" >
                        <h2>Follow Us:</h2>
                        <div className="icons">
                            <i className="fa fa-facebook"><a href="https://www.facebook.com/uwovideo/"target="_blank">   <FontAwesomeIcon icon={faFacebook} id="icons" /></a> </i>
                            <i className="fa fa-twitter"><a href="https://twitter.com/UWOVideo"target="_blank"><FontAwesomeIcon icon={faTwitter} id="icons" /></a></i>
                            <i className="fa fa-instagram"><a href="https://www.instagram.com/uwo_video/"target="_blank"><FontAwesomeIcon icon={faInstagram} id="icons" /></a></i>
                            <i className="fa fa-linkedin" ><a href="https://in.linkedin.com/company/unifiedweboptions"target="_blank"> <FontAwesomeIcon icon={faLinkedin} id="icons" /></a></i>
                            <i className="fa fa-youtube" > <a href="https://www.youtube.com/channel/UC6bwb8QQarTi_WYujbtL_Rg"target="_blank"><FontAwesomeIcon icon={faYoutube} id="icons" /></a></i>
                            <i className="fa fa-whatsapp" ><a href="https://wa.me/919479672015"target="_blank"><FontAwesomeIcon icon={faWhatsapp} id="icons" /></a></i>

                        </div>
                        <h2>Download UWO Video App:</h2>
                        <div >
                        <a href="https://play.google.com/store/apps/details?id=com.uwo.entertainments&hl=en_IN&gl=US"target="_blank"><img className="google-play" src="Images/gplay.png" alt="" /></a>
                        </div>
                    </div>


                    <div className="col-md-4 flex-fill  mb-3 mb-md-0 me-md-auto homefo">

                            <ul className="hide1 nav flex-column" >
                                <li className="nav-item mb-2"><Link to="" className="nav-link p-0 foterbtn">Home</Link></li>
                                <li className="nav-item mb-2"><a href="https://uwokart.com/" className="nav-link p-0 foterbtn">Shop</a></li>
                                <li className="nav-item mb-2"><Link to="/About" className="nav-link p-0 foterbtn">About</Link></li>
                                <li className="nav-item mb-2"><Link to="/ContactForm" className="nav-link p-0 foterbtn">Contact</Link></li>
                            </ul>
                            <ul className="hide1 nav flex-column" >
                                <li className="nav-item mb-2"><Link to="/Career" className="nav-link p-0 foterbtn">Career</Link></li>
                                <li className="nav-item mb-2"><Link to="/Report" className="nav-link p-0 foterbtn">Report</Link></li>
                                <li className="nav-item mb-2"><a href="/Terms" className="nav-link p-0 foterbtn">Privacy Policy</a></li>
                            </ul>
                    
                    </div>


                    <div className="nav address col-md-4 flex-fill justify-content-start right01">
                        <h2>Address:</h2>
                        <p>Unified Web Options & Services Private Limited, <br/>Plot No 2, 3rd Floor, SG square, Rampur Chowk,<br/>
                            Gwarighat
                            Jabalpur(M.P.)</p>
                        <p className="num"> <a href="mailto:support@theuwo.com">Email: support@theuwo.com</a>
                       <br/>  <a href="tel:+91 9479672015"> Phone:+91 9479672015</a></p>
                    </div>
                </section>
            </div>
                <footer className="cont6">
                    <p className="text-center text-white">Copyright © 2021 UWO Video</p>
                </footer>
        </div>
    )
}
export default Footer;