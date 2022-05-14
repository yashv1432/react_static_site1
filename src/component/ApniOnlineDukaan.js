import React from 'react'
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../assets/css/apniOnlineDukaan.css'
import '../assets/phone-css/apniOnlineDukaanPhone.css'
import { Link } from "react-router-dom"
import Whatsapp from './Whatsapp';

function ApniOnlineDukaan() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <section className="cont3ap">
                    <div className="row featurette">
                        <div  className="col-md-7 centerap">
                            <h2 className="featuretteheadingap fonthead1" >Apni Online Dukaan</h2>
                            <p className="leadap fonthead2">Create Your E-Commerce Store With Apni Online Dukaan Start. Selling On Your Online Store And Grow Your Business</p>
                            <Link to="/ContactForm"><button className="shopnowap fonthead1">Get Demo</button></Link>
                        </div>
                         <div className="col-md-5 ">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluclassName mx-auto imgap"
                                src="Images/apnionlinedukan-01.png" alt="" />
                        </div>
                    </div>
                </section>
                <Whatsapp/>
                 
                <section className="cont7ap">
            <h2 className='fonthead1'>Features</h2>
            <div className="horizontallineap"></div>
            <div className="mainap">
                <div className="blocap">
                    <div className="ksap">
                        <img src="Images/features-01.png" alt=""/>
                        <div className="ckap">
                            <h2>Easy Promotion</h2>
                            <p>Become Easy To Market Your Product Catalogues To Your Families And Friends With The
                                Convenience Of This App.</p>
                        </div>
                    </div>
                    <div className="ksap">
                        <img src="Images/features-02.png" alt=""/>
                        <div className="ckap">
                            <h2>Easy Billing</h2>
                            <p>Send bills to your customers on Whatsapp and SMS. With easy billing feature which best  suits  your business.</p>
                        </div>
                    </div>
                    <div className="ksap">
                        <img src="Images/features-03.png" alt=""/>
                        <div className="ckap">
                            <h2>Manage Orders</h2>
                            <p>An easy & convenient way to operate or manage an online business from home as no infrastructure needed.</p>
                        </div>
                    </div>

                </div>
                <div className="blocap">
                    <div className="ksap">
                        <img src="Images/features-04.png" alt=""/>
                        <div className="ckap">
                            <h2>Selling Multi Channels</h2>
                            <p>Selling made easier with Social media platforms like- Facebook , Instagram and Google  To gain a wider reach </p>
                        </div>
                    </div>
                    <div className="ksap">
                        <img src="Images/features-05.png" alt=""/>
                        <div className="ckap">
                            <h2>Customer Chat Support</h2>
                            <p>Your business is open for 24/7 when selling online with flexible chat support feature integrated in it.</p>
                        </div>
                    </div>
                    <div className="ksap">
                        <img src="Images/features-06.png" alt=""/>
                        <div className="ckap">
                            <h2>Accept Online Payments</h2>
                            <p>Supports various payment portals for transactions  that are popular among the customers like- PayPal, Stripe, razor pay, etc.</p>
                        </div>
                    </div>

                </div>

            </div>
                </section>

                <section className="cont9ap">
            <h2 className='fonthead1'>Dashboard</h2>
            <div className="horizontallinesap"></div>
            <div className="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{'display': 'flex' ,
            'justify-content': 'center'}}>
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{'height': '250px' , 'width': '868px'}}>
                  <div className="carousel-item active">
                    <img src="Images/backimage.webp" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="Images/backimage.webp" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="Images/backimage.webp" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </section>

        <section className="cont8ap">
            <h2 className='fonthead1'>Frequently Asked Questions</h2>
            <div className="horizontallinap"></div>
            <div className="main1ap">
                <div className="col1ap">
                    <ul type="square">
                        <li>What is Apni Online Dukaan</li>
                        <div className="horizontallineap"></div>
                        <li>How Apni Online Dukaan Is Important For You?</li>
                        <div className="horizontallineap"></div>
                        <li>Why Apni Online Dukaan?</li>
                        <div className="horizontallineap"></div>
                        <li>Who All Can Use Apni Online Dukaan?</li>
                        <div className="horizontallineap"></div>
                        <li>How UWO Can Help You In Creating Online Store?</li>
                        <div className="horizontallineap"></div>
                        <li>How To List Products On Apni Online Dukaan?</li>
                        <div className="horizontallineap"></div>
                    </ul>
                </div>
                <div className="col1ap">
                    <ul type="square">
                        <li>Why Payment Gateways Are Provided</li>
                        <div className="horizontallineap"></div>
                        <li>What If We Face Any Technical Issue</li>
                        <div className="horizontallineap"></div>
                        <li>How Products Can Be Gigitally Sold</li>
                        <div className="horizontallineap"></div>
                        <li>How Many Products Can We Add? Or Is There Any Limitation In Adding Products</li>
                        <div className="horizontallineap"></div>
                        <li>Can I Change The Interface Of Apni Online Dukaan?</li>
                        <div className="horizontallineap"></div>
                      
                    </ul>
                </div>
            </div>
        </section>
        <section className="cont4ap">
            <div className="lastboxap">
                <h2>Want To Buy Apni Online Dukaan</h2>
              <p>Just click buy now, or Compare It with Our Apni Online Dukaan Multivendor Product</p>
              <div className="buttonap">
              <Link to="/ContactForm"> <button className="buynowap">Buy Now</button></Link>
           
              </div>
            </div>
          </section>

            </div>
            <Footer />
        </div>
    )
}
export default ApniOnlineDukaan;