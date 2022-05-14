
import Header from './Header';
import Footer from './Footer';
import '../assets/css/home.css';
import '../assets/phone-css/homePhone.css'
import { Link } from "react-router-dom"
import React from 'react';
import About from './About';
import Career from './Career';
import Advertising from './Advertising';
import Affiliate from './Affiliate';
import Business from './Business';
import Blog from './Blog';
import Digital from './Digital';
import ApniOnlineDukaan from './ApniOnlineDukaan';
import Franchise from './Franchise';
import ITSolution from './ITSolution';
import UWOCrm from './UWOCrm'
import EarnWithUWO from './EarnWithUWO';
import ScrollToTop from './ScrollToTop';
import ContactForm from './ContactForm'
import Slider from './Slider';
import  {faBars,faCaretDown}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Whatsapp from './Whatsapp';

class Home extends React.Component {

    render() {
        let mystyle={
         borderRadius: '20px', background: 'linear-gradient(180deg, rgba(0,210,255,1) 0%, rgba(58,144,213,1) 100%)',
         height:'60px',
         color:'#fff',
         border: 'none'
        }
        let mystyle2={
            borderRadius: '20px',
        }
        return (
            <div>
                <Header />
                <Whatsapp/>
                <div className="container-fluid back" style={{ 'backgroundImage': "url('Images/homeimg04.webp')", 'opacity': '0.8' }}>

                    <section id="cont1me" style={{ 'backgroundImage': "url('Images/concert1111.png')",backgroundSize: 'cover'   , backgroundRepeat: 'noRepeat', backgroundPosition: 'center' }} >
                        <div id="shiftme">
                            <div className="content1me col-12 p-3 fonthead1">

                               <p> Create Your Video on </p>
                               <p style={{ marginTop: '-23px'}}>UWO VIDEO App</p>
                            </div>
                            <div className="content2me col-sm-12 p-3 fonthead2 ">
                            Make videos with UWO VIDEO App! <br/> UWO Video - A platform for creators, influencer , Celeberities and businesses...
                            </div>
                            <div className="content3me col-sm-12 p-3 ">
                                <a href="https://play.google.com/store/apps/details?id=com.uwo.entertainments&hl=en_IN&gl=US"><button type="button" className="btnho fonthead1" style={{fontsize: "18px"}}>DOWNLOAD APP</button></a>
                            </div>
                        </div>
                        <div className="imag">


                        <img src="Images/ezgif.com-gif-maker.gif" alt="GIF" style={{height: '580px', width: '340px'}}/>   

                            {/* <div id="SlidesOnly" className="carousel slide widthe" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="Images/screenshots01.png" alt="First slide" style={{'width':'100%'}} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Images/screenshots02.png" alt="Second slide" style={{'width':'100%'}} />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Images/screenshots03.png" alt="Third slide" style={{'width':'100%'}} />
                                    </div>
                                </div>
                            </div> */}
                        </div>


                              {/* <img className="imag" src="Images/home.png" alt="" /> */}
                        
                    </section >

                    <section id="cont2me">
                        <div className="lastboxme10">
                            <h2 className='fonthead1'>UWO VIDEO APP FEATURES</h2>
                            <p className='fonthead2'>UWO VIDEO APP is an Indian free short video maker app where you can make short videos for promotion purposes. 
UWO is not just a streaming app but an e-commerce market place with various features like Gaming, Recharge and many promotional tools that allows users to reap benifits from it.</p>
                        </div>
                    </section>

                    <section id="cont3me">

                        <div className=" top row featurette">
                            <div className="col-md-7 order-md-2">
                                <div className="leadme">
                                    <div className="accme">
                                        <img className="checkme" src="Images/icons-02.png" alt="" />
                                        <div>
                                            <h2>Music Video Maker App</h2>
                                            <p>Create your original videos with special effects, filters, music, and more, Explore
                                                videos, and you can easily edit your videos with millions of free music clips and
                                                sounds. </p>
                                        </div>
                                    </div>

                                    <div className="accme">
                                        <img className="checkme" src="Images/icons-01.png" alt="" />
                                        <div>
                                            <h2>UWO KART</h2>
                                            <p>A modern Ecommerce multi-vendor software Platform for secure and customizable
                                                business solutions. </p>
                                        </div>
                                    </div>

                                    <div className="accme">
                                        <img className="checkme" src="Images/icons-05.png" alt="" />
                                        <div>
                                            <h2>UWO GAMES</h2>
                                            <p>UWO brings an amazing feature in its app named “UWO GAMES” The destination for all
                                                age groups. Play endless amount of games customized especially for you. </p>
                                        </div>
                                    </div>

                                    <div className="accme">
                                        <img className="checkme" src="Images/icons-03.png" alt="" />
                                        <div>
                                            <h2>Earn With UWO</h2>
                                            <p>Being a creator and not earning is hard but now with UWO VIDEO App “Earn with UWO”
                                                feature it is possible.</p>
                                        </div>
                                    </div>

                                    <div className="accme">
                                        <img className="checkme" src="Images/icons-04.png" alt="" />
                                        <div>
                                            <h2>Business With UWO</h2>
                                            <p>With UWO you can define your presence in this immeasurable digital world.UWO provides
                                                you with various services like advertising your business and various social media
                                                solutions to the people where it is needed.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto featimgme"
                                    src="Images/videofeature01.png" alt="" />


                            </div>
                        </div>
                    </section>

                    <section id="cont2meInflu">
                        <div className="lastboxme10">
                            <h2 className='fonthead1'>UWO INFLUENCERS</h2>

                        </div>
                    </section>

                    <div className="mt-5 pt-4">
            <Slider />
          </div>

                    <section id="cont2me">
                        <div className="lastboxme10">
                            <h2 className='fonthead1'>UWO PRODUCTS</h2>
                            <p className='fonthead2'>Together, let’s turn your ideas into a strong, efficient product and make your software your
                                competitive advantage. UWO’S innovative software development services are ready to deliver to your
                                vision.</p>

                        </div>
                    </section>
                    <section id="cont9me">
                        <div className="cont41me">
                            <img src="Images/OURPRODUCTS01.png" alt="" />
                            <h2>UWO CRM</h2>
                            <p>CRM is a technology for managing all of your business relationships and interactions with prospects
                                and customers.</p>
                            <Link to="/UWOCrm">  <button className="knowmoreme">Know More</button></Link>
                        </div>

                        <div className="cont41me">
                            <img src="Images/OURPRODUCTS02.png" alt="" />
                            <h2>Apni Online Dukaan</h2>
                            <p>Apni Online Dukaan is a complete E-Commerce system to simply start and enhance your online E-Commerce
                                business. Click below to know more </p>
                            <Link to="/ApniOnlineDukaan">  <button className="knowmoreme">Know More</button></Link>
                        </div>

                        <div className="cont41me">
                            <img src="Images/OURPRODUCTS04.png" alt="" />
                            <h2>Wuddy Chat Bots</h2>
                            <p>Wuddy Chat assistant as the name implies is an app developed to provide instant communication between
                                business and customers.</p>
                            <a href="https://wuddy.uwovideo.com"> <button className="knowmoreme">Know More</button></a>
                        </div>
                    </section>

                    <section id="cont4me" style={{ 'backgroundImage': "url('Images/contactusn.webp')", backgroundRepeat: 'noRepeat', backgroundPosition: 'center' }} >
                        <div id="lastboxme">
                            <h2>Visit Our Shop, To Explore More Products And Services</h2>
                            <div className="button">
                                <a href="https://uwokart.com/">  <button className="shopnowme">Shop Now</button></a>

                            </div>
                        </div>
                    </section>

                    <section id="cont2me">
                        <div className="lastboxme10">
                            <h2 className='fonthead1'>OUR SERVICES</h2>
                            <p className='fonthead2'>UWO is a full-service advertising agency can handle all the marketing and advertising aspects of a
                                business. This usually provide IT Tech Expertise, Business Automation, Digital Marketing and Video
                                Advertisement Services to clients and catalyse to deliver result</p>

                        </div>
                    </section>

                    <section id="cont90me">
                        <div className="cont91me">
                            <img src="Images/SERVICES1.png" alt="" />
                            <h2>Video Ads</h2>
                            <p>Our Video advertising services allow you to engage with viewers and build new customers on smart TVs,
                                games consoles, mobile as well as traditional desktop users.
                            </p>
                            <Link to="/Advertising"><button className="getservicesme">Get Services</button></Link>
                        </div>

                        <div className="cont91me">
                            <img src="Images/SERVICES2.png" alt="" />
                            <h2>Digital Marketing</h2>
                            <p> UWO Provides all digital Services, like if you need to promote your app or have SEO requirements we
                                can seamlessly work together to help you achieve transformational growth.</p>
                            <Link to="/Digital">  <button className="getservicesme" >Get Services</button></Link>
                        </div>

                        <div className="cont91me">
                            <img src="Images/SERVICES3.png" alt="" />
                            <h2>IT Solutions</h2>
                            <p>UWO offers a full range of IT services to support your business infrastructure. Our custom web
                                development manage all services include both front-end, back-end development and maintain your IT
                                Environment
                            </p>
                            <Link to="/ITSolution" style={{ "marginTop": "-20px" }}>  <button className="getservicesme">Get Services</button></Link>
                        </div>
                    </section>

                    <section id="cont31">
                        <div id="cont32">
                            <div id="cont33">
                                <img id="contimg" src="Images/hireus-01.png" alt="" />
                            </div>
                            <div id="cont34">
                                <h2 className='fonthead1'>WHY SHOULD YOU HIRE US ?</h2>
                                <p className='fonthead2'>We are well versed in modern development methodologies and applying appropriate techniques based on the task and the environment.</p>
                                <div class="accordion" id="accordionExample">
  <div class="accordion-item my-3 " style={mystyle2}>
    <h2 class="accordion-header drop" id="headingOne">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
      Business and Technology 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <p>UWO has extensive experience in Business and Texhnology</p>
      </div>
    </div>
  </div>
  <div class="accordion-item my-3" style={mystyle2}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className="plusme"><img src="Images/iconhire12.png" alt="" /></div>   
      Applying Modern Techniques 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <p>We are well versed in modern development methodologies and applying appropriate techniques based on the task and the environment.</p> 
      </div>
    </div>
  </div>
  <div class="accordion-item my-3"  style={mystyle2}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed btn1me fonthead1"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className="plusme"><img src="Images/iconhire13.png" alt="" /></div>
      IT Software Solutions
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body fonthead2">
        <p>Our team interfaces with clients to identify their requirement and accmeordingly, designs, develops and implements an integrated and comprehensive IT or software-based solution.</p> 
      </div>
    </div>
  </div>
</div>
                             
                             
                                {/* <div className="stepsme">
                                    <div className="dropdown">

                                        <button className="btn1me" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">

                                            <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
                                            <h5 style={{ 'color': 'white', fontSize:'18px' }}>Business and Technology <i className="fas fa-caret-down igap" ><FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '4px'}} id="icons" /></i></h5>
                                        </button>
                                        <div className="dropdown-menu p-4 text-muted show1me" style={{ 'width': '100%' }}>
                                            <p>
                                                UWO has extensive experience in Business and Texhnology
                                            </p>

                                        </div>


                                    </div>
                                    <div className="dropdown">

                                        <button className="  btn1me" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">

                                            <div className="plusme"><img src="Images/iconhire12.png" alt="" /></div>
                                            <h5 style={{ 'color': 'white', fontSize:'18px'  }}>Applying Modern Techniques <i className="fas fa-caret-down igap" ><FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '4px'}} id="icons" /></i></h5>
                                        </button>
                                        <div className="dropdown-menu p-4 text-muted show1me" style={{ 'width': '100%' }}>
                                            <p>
                                                We are well versed in modern development methodologies and applying appropriate techniques based on the task and the environment.
                                            </p>
                                        </div>


                                    </div>
                                    <div className="dropdown">

                                        <button className="  btn1me" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">

                                            <div className="plusme"><img src="Images/iconhire13.png" alt="" /></div>
                                            <h5 style={{ 'color': 'white', fontSize:'18px'  }}>IT Software Solutions <i className="fas fa-caret-down igap" ><FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '4px'}} id="icons" /></i></h5>
                                        </button>
                                        <div className="dropdown-menu p-4 text-muted show1me" style={{ 'width': '100%' }}>
                                            <p>
                                                Our team interfaces with clients to identify their requirement and accmeordingly, designs, develops and implements an integrated and comprehensive IT or software-based solution.
                                            </p>
                                        </div>


                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>

                    <section id="cont4me" style={{ 'backgroundImage': "url('Images/achievement01.webp')", backgroundRepeat: 'noRepeat', backgroundPosition: 'center' }}>
                        {/* <div id="lastboxme"> */}
                        <div className="lastboxme1">
                            <h2>100+</h2>
                            <p>Successful Projects</p>
                        </div>
                        <div className="lastboxme1">
                            <h2>20+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="lastboxme1">
                            <h2>6</h2>
                            <p>Awards Won</p>
                        </div>
                        <div className="lastboxme1">
                            <h2>2.5</h2>
                            <p>Years</p>
                        </div>
                        {/* </div> */}
                    </section>

                    <section id="cont55me">
                        <img id="contimgme" src="Images/blog-01.png" alt="" />
                        <h2 className='fonthead1'>UWO BLOGS</h2>
                        <p className='fonthead2'> UWO Provides blogging services which will educate you for “Video Advertising, Digital Marketing and IT solutions software’s.
                            For more information click on the link below</p>
                        <Link to='/Blog'><button className="readnowme">
                            Read Now
                        </button></Link>
                    </section>

                    <section id="cont4me" style={{ 'backgroundImage': "url('Images/shopnown.webp')", backgroundRepeat: 'noRepeat', backgroundPosition: 'center' }}>
                        <div id="lastboxme">
                            <h2>IF YOU WANT TO ASK ANYTHING JUST</h2>
                            <div className="button">
                                <Link to="/ContactForm"> <button className="lastboxme">Contact Us</button></Link>

                            </div>
                        </div>
                    </section>
                </div >
            <Footer />
            </div >
        )
    }
}

export default Home;