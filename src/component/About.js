import React  from 'react'
import Header from './Header';
import Footer  from './Footer';
import '../assets/css/aboutus.css'
import '../assets/phone-css/aboutusPhone.css'
import Whatsapp from './Whatsapp';

function About() {
    return (
    <div>
      <Header/>
      <section id="cont1ab" style={{ 'backgroundImage': "url('Images/digital.webp')"}}>
            <div className="content1ab col-12 p-3 fonthead1 ">
                About Us
            </div>
        </section>
        <Whatsapp/>

        <section id="cont3ab">
            <div className="row featuretteab">
                <div className=" topab col-md-7">

                    <p className="leadab"><em>Helping clients to become futuristic..</em></p>
                    <p><em>Unified Web Options and Services Pvt. Ltd. provide IT Tech Expertise, Business Automation ,
                            Digital Marketing and Video Advertisement Services to clients and catalyze to deliver
                            results.</em></p>

                </div>

                <div className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        style={{'width':'400px', 'height':'300px'}} src="Images/img-1.webp" alt=""/>
                </div>
            </div>
        
        </section>
        <section id="contxab">
            <p>Unified Web Options and Services Pvt. Ltd. implements next-generation technology to help enterprises
                transform businesses globally. UWO is an IT solution company focusing on development of customizable
                promotional Video Advertisement, Digital Marketing, Website Development, Software/Application (Android
                Apps) and Graphic Design services to the enterprises. Customer trust is the foundation of our company.
            </p>
            <p>UWO service transformation approach helps forward looking organizations with Business Automation Solution
                by inspiring employee experiences, foster collaboration and transparency and enhance organizational
                productivity including various digital media marketing solutions. It helps customers to achieve their
                mission through the utilization of digital technologies across legacy environments within an enterprise
                enabling businesses to stay ahead of their competitors in a changing digital world. Our aim is provide
                automation products and marketing services to all small, medium and large enterprises. We also provide
                employment opportunities to talented youth and creators.</p>
            <p>UWO also takes pride in its diversified social responsibility, sustainability, and education initiatives.
                UWO expertise in analog-to-digital helps, addressing the required power-sharing between Business and IT
                through advertising with a minimum budget without disrupting the existing system.</p>
        </section>
        <section id="contyab">
            <h2 className='fonthead1'>We Are Registered On</h2>
            <div className="imagesab">
                <img src="Images/startupindialogo.png" alt=""/>
                <img style={{'marginTop': '100px'}} src="Images/msme-logo.png" alt=""/>
                <img src="Images/MCA.png" alt=""/>
            </div>
        </section>
        <section id="contzab">
            <h2 className='fonthead1'>Our Affiliate Partners</h2>
            <p><strong>The best brands trusts UWO!</strong>
                <br />We’ve partnered with hundreds of top brands and merchants around the globe.
                <br />We partner with the best ecommerce designers, developers and marketers in the world to help brands
                innovate and succeed.
            </p>
            <p>We continue to innovate and partner with advertisers, agencies & publishers; empowering them to reach
                their digital goals using our key strengths. UWO Partners in Business Success.</p>
        </section>
    
      <Footer/>
    </div>
    )
}
export default About;