import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../assets/phone-css/UWOCrmPhone.css'
import '../assets/css/UWOCrm.css'
import ContactForm from './ContactForm';
import { Link } from "react-router-dom"
import Whatsapp from './Whatsapp';

function UWOCrm() {
    return (
        <div>
            <Header />
            <Whatsapp/>
            <section id="cont1rm">
                <div>
                    <div id="content-1 fonthead1" class="content-1 col-12 p-3 fonthead1 ">
                        UWO CRM
                    </div>
                    <div id="content-2 fonthead2" className="content-2 col-sm-12 p-3 fonthead2">
                        Customer Relationship Management(CMR) Is A Technology For Managing All Of<br /> Your Business
                        Relationships And Interactions With Prospects And Customers.
                    </div>
                    <div class="content-3 col-sm-12 p-3 ">
                    {/* <Link to="/"> <button type="button" class="btn fonthead1">Buy Now</button></Link> */}
                      <Link to="/ContactForm"> <button className="btn fonthead1">Buy Now</button></Link>
                    </div>
                </div>
                <div class="imag">
                    {/* <img src="Images/logo.png" alt="" /> */}
                </div>
            </section>
            <section className="cont2rm">
                <div class="lastboxuw1">
                    <h2 className='fonthead1'>The #1 CRM Platform</h2>
                    <p>Customer relationship management (CRM) helps companies better understand their customers’ <br />
                        behavior and modify their business operations to ensure that customers are best served.</p>

                </div>
            </section>
            <section className="cont3rm">
                <div class=" top row featurette">
                    <div class="col-md-6">
                        <h2 class="featuretteheadinguw fonthead1">Features Of UWO CRM To Increase Productivity</h2>
                        <div class="line"></div>
                        <div class="lead">

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>2 Assign task</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Time tracking</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Project management</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Invoices</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Payments</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Estimates</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Leads and opportunities</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Team work</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Client dashboard</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Communication</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Help desk</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto img100"
                            // style={{ 'width': '450px', 'height': '550px', 'marginTop': '50px' }} 
                            src="Images/productivity-01.png" alt="" />

                    </div>
                </div>
                <div class=" top row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featuretteheadinguw fonthead1">How Can You Benefit From A CRM For Small Business</h2>
                        <div class="line"></div>
                        <div class="lead">

                            <div class="accuw">
                                <p>A single story for every customer from one source, no matter the channel</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>360- degree view of the customer</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Qualify leads</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Visibility</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Adapt easily</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Automate routine tasks</p>
                            </div>


                        </div>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            src="Images/smallbusiness-01.png" alt="" />

                    </div>
                </div>
                <div class="top row featurette">
                    <div class="col-md-7">
                        <h2 class="featuretteheadinguw fonthead1">Grow Your Businnes With UWO Video</h2>
                        <div class="line"></div>
                        <div class="lead">

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Capture website visitors as leads in the CRM</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Get insights on how to engage with the prospects</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Personalize engagement with the company</p>
                            </div>

                            <div class="accuw">
                                <img class="check" src="Images/check.png" alt="" />
                                <p>Boost productivity by automating sales activities</p>
                            </div>


                        </div>
                    </div>

                    <div class="col-md-5">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                          src="Images/growbusiness-01.png" alt="" />

                    </div>
                </div>


            </section>
            <section className="cont4rm">
                <div id="lastboxuw2">
                    <h2 className='fonthead1'>Want To Buy UWO CRM</h2>
                    <p className='fonthead2'>If you want to buy just click on buy now or want to know more click contact us</p>
                    <div class="button">
                        {/* <a href="https://uwokart.com/">  <button className="buynowuw">Buy Now</button></a> */}
                  <Link to="/ContactForm">  <button className="buynowuw">Buy Now</button></Link>
                  
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default UWOCrm;