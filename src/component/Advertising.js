import React  from 'react'
import Header from './Header';
import Footer  from './Footer';
import '../assets/css/advertising.css'
import '../assets/phone-css/advertisingPhone.css'
import { Link } from "react-router-dom"
import ContactForm from './ContactForm';
import Whatsapp from './Whatsapp';

function Advertising() {
    return (
    <div>
      <Header/>
      <section className="cont1ad" style={{ 'backgroundImage': "url('Images/digital.webp')"}}>
        <div className="content1ad col-12 p-3 fonthead1">
            Advertising Agency Video Production
          </div>
          <div className="content2ad col-sm-12 p-3 fonthead2">
            Achieve More With Video. We Create Compelling Content That Captivates Audiences, Inspires Action And Drives Results.
          </div>
          <div className="content3ad col-sm-12 p-3 ">
          <Link to="/ContactForm"><button type="button" className="btnad fonthead1">Create Video Ads</button></Link>
          </div>
        </section>
        <Whatsapp/>

        <section className="servicescontainerad">
          <h1 className="h-primary center fonthead1">What You Can Do With Video Ads</h1>
          <div className="servicesad">
              <div className="boxad">
                  <img src="" alt=""/>
                  <h2 className="h-secondary center">BUILD BRAND AWARENESS</h2>
                  <p className="center">Video Marketing Secrets to Increase Brand Awareness</p>
             
              </div>
              <div className="boxad">
                  <img src="" alt=""/>
                  <h2 className="h-secondary center">DRIVE QUALIFIED LEADS</h2>
                  <p className="center">UWO can help you generate leads with its creative Video Advertising Services</p>
             
              </div>
              <div className="boxad">
                  <img src="" alt=""/>
                  <h2 className="h-secondary center">VIDEO CAMPAIGNS</h2>
                  <p className="center">Improve Online Existence Using Video Advertising Campaigns</p>
             
              </div>
          </div>
      </section>

      <section className="cont3ad">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featuretteheadingad">We Tell Your Business Story To The World With Video Advertising Services</h2>
            <div className="linead"></div>
            <p className="leadad">We have provided the best video marketing services to multiple brands. We can increase your business to reach a wider audience by sharing fully optimized videos on various sites. We follow the latest trends while creating attractive promotional videos that enhance your business popularity.</p>
          </div>
         
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{'width':'400px' , 'height':'300px'}} src="Images/img-1.webp" alt=""/>
            
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featuretteheadingad">Take Your Brand To A Higher Level</h2>
            <div className="linead"></div>
            <p className="leadad">We, at UWO VIDEO, a Creative Video Advertising Company in India, know that video can engage and capture your customers on the web in a more enthralling way. Whether it is a promotional video or a corporate training video, our Team of video and online media experts personally manages your entire video business promotion campaign to ensure that you gain miraculous success rates in lesser time. As a leading video Advertising Agency, IT offers you transparent, safe, all-screen and brand effective video advertising solutions.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{'width':'400px' , 'height':'300px'}} src="Images/img-2.webp" alt=""/>
           
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featuretteheadingad">Grow Your Businnes With UWO Video</h2>
            <div className="linead"></div>
            <p className="leadad"><ul><li>Increase Your Leads and Sale</li><li>Optimize Marketing Cost</li><li>Differentiate Your Brand Online</li></ul></p>
          </div>
         
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{'width':'400px' , 'height':'300px'}} src="Images/img-3.webp" alt=""/>
         
          </div>
        </div>
        <hr className="featurette-divider"/>
      </section>
    
      <section className="cont4ad">
        <div className="lastboxad">
          <h2 className='fonthead1'>Join Our Video Ad Services And Get Ads On Our App</h2>
         <Link to="/ContactForm"><button>Join Now</button></Link>
        </div>
      </section>
    
      <Footer/>
    </div>
    )
}
export default Advertising;