import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../assets/css/earnwithUWO.css'
import '../assets/phone-css/earnwithUWOPhone.css'
import { Link } from 'react-router-dom'
import Whatsapp from './Whatsapp';

function EarnWithUWO() {
    return (
        <div>
            <Header />
            <Whatsapp/>
            <div class="container-fluid">
                <section className="cont1ea" style={{ 'backgroundImage': "url('Images/business.webp')" }}>
                    <div className="content1ea col-12 p-3 fonthead1">
                        Earn With UWO
                    </div>
                </section>
                <section className="cont3ea">
                    <div className="row featuretteea">
                        <div className="col-md-7 ">
                            <h2 className="featuretteheadingea ">How to Earn with UWO</h2>
                            <div className="lineea"></div>
                            <p className="leadea">UWO offers a good commission on almost all products and services. There is no limit to the
                                money that you can make as an affiliate with UWO VIDEO. The more sales you generate, the more you
                                earn.<br />Since UWO VIDEO is a huge and well-known company, you probably aren’t going to have a hard time
                                convincing your readers that their services are worth looking into.</p>
                        </div>

                        <div class="col-md-5">
                            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                style={{ 'width': '400px', 'height': '300px' }} src="Images/6143.webp" alt="" />

                        </div>
                    </div>

                    <div class="row featuretteea">
                        <div class="col-md-12">
                            <h2 class="featuretteheadingea">Earn money from UWO VIDEO Ads</h2>
                            <div class="lineea"></div>
                            <p class="leadea">In UWO VIDEO, Ads help eligible video creators earn money by including short video or image
                                ads in qualifying videos. Creators get a share of the revenue from the video ads shown to their viewers.
                            </p>
                            <p class="leadea"> Suppose, If you are a graphic designer and here in UWO Video App a businessman needs some designs. </p>
                            <p class="leadea"> Here, UWO plays the role of connecting both the people together. With the help of UWO, every skilled &
                                talented person can earn some portion of revenue with its astonishing content. </p>
                            <p class="leadea"> <strong>What are Benefits of Earning through UWO VIDEO?</strong> </p>
                            <p class="leadea"> With UWO VIDEO, you can maximize your earnings while you focus on what you do best – making great content.
                            </p>

                        </div>

                    </div>

                    <div class="row featuretteea">
                        <div class="col-md-12">
                            <h2 class="featuretteheadingea">Earn Money through UWO VIDEO APP</h2>
                            <div class="lineea"></div>
                            <p class="leadea">UWO give creators a material and sustainable revenue model. </p>
                            <p class="leadea"> Video Creators can earn by making Advertisement Videos with their amazing skills and talent and once their
                                video is selected as the best/ engaging content then UWO will provide them the opportunity to work on their
                                Video Ads for promoting business of the vendors. </p>
                            <p class="leadea">  And for that will they will get a handsome amount of money on it. <br /> Become a UWO Affiliate with Make
                                Money! </p>
                            <p class="leadea">   To become a affiliate marketer is quite flexible and easy as no infrastructure is needed and can be done
                                from anywhere! </p>
                            <p class="leadea">    UWO offers a good commission on almost all products and services. There is no limit to the money that you
                                can make as an affiliate with UWO VIDEO. The more sales you generate, the more you earn. </p>
                            <p class="leadea">    Since UWO VIDEO is a huge and well-known company, you probably aren’t going to have a hard time convincing
                                your readers that their services are worth looking into. </p>
                            <p class="leadea">    Just place banners and links from UWO KART on your website and turn your visitors into UWO Company’s
                                customers to earn money. </p>
                            <p class="leadea">     We believe you would love to become a part of this amazing affiliate program. </p>


                        </div>


                    </div>

                    <div class="row featuretteea">
                        <div class="col-md-12">
                            <h2 class="featuretteheadingea">Love Freelancing? Earn through UWO!</h2>
                            <div class="lineea"></div>
                            <p class="leadea">Freelancing is a place where services are outsourced to freelancers in a number of fields
                                including: web design, writing, marketing and data entry among other things.</p>
                            <p class="leadea">With UWO platform- Find the right freelancer you need. A Talent freelancer’s marketplace that connects you
                                to top freelancer experts in just minutes</p>
                            <p class="leadea">Earn cash to your wallet by largest network of freelancers connected to you at your service. Whether you
                                are looking for your personal work or for any event, everything you need is here!</p>
                        </div>

                    </div>

                </section>
                <section className="cont2ea">
                    <Link to="/EarnWithUWOForm"><button className="joinusea">Join Us</button></Link>
                </section>
            </div>
            <Footer />
        </div>
    )
}
export default EarnWithUWO;