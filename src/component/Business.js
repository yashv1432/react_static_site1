import React  from 'react'
import Header from './Header';
import Footer  from './Footer';
import '../assets/css/business.css';
import '../assets/phone-css/businessPhone.css'
import { Link } from "react-router-dom"
import Whatsapp from './Whatsapp';

function Business() {
    return (
        <div>
        <Header/>
        <Whatsapp/>
        <div clasName="container-fluid">
                <section className="cont1bs" style={{ 'backgroundImage': "url('Images/business.webp')"}}>
                    <div className="content1bs col-12 p-3 fonthead1">
                        Business With UWO
                    </div>
                </section>
        <section className="contcbs">
            <p><span style={{'color': '#3a90d5'}}><strong>Automate Your Business &#8211; By Making Business Digitally
                        Presence- Quickly Easily And User Friendly With UWO.</strong></span>
            </p>
            <p>Now it’s time to think digitally as every business need is to make their presence on the digital platform
                as well. For this, its necessary to integrate Automated Technology to grow your business widely.

            </p>
            <p><span style={{'color': '#3a90d5'}}><strong>Automation Is Becoming an Imperative Need of
                        Business</strong></span>
            </p>
            <p>Automate your business with UWO and get the freedom of time and money you truly deserve. “UWO is allowing
                business automation”.</p>
            <p>Our team of experts will help you to automate your business processes and keep an accurate list of your
                technology assets to save both time and money.

            </p>
            <p>For automating your business UWO provides you with various IT</p>
            <p><span style={{'color': '#3a90d5'}}><strong>How UWO helps your business to grow?</strong></span></p>
            <p>As UWO provides a wide range of products and services, which help businesses to grow more effectively. In
                the era of digitalisation, every business needs to make its online presence so UWO is a solution
                provider for every category of bussiness.</p>
            <p>We provide services like- Digital Marketing, Social Media Marketing, Website Development, Android/IOS
                development, Graphic Designing and many more which become the necessity of every business and also in
                your budget. The traditional ways of doing business are not that effective as compared to today’s
                digital methods. UWO becomes a helping hand here and taking your business to new heights.</p>
            <p><span style={{'color': '#3a90d5'}}><strong>Automating Business with UWO</strong></span></p>
            <p>UWO has a complete range of products and services to automate your business and get yourself connect with
                ways to strategize about new business plans and ideas. Running your business on autopilot mode with UWO
                Automation Techniques enlarges your business as well as increases the chances of making your business
                successful. With UWO you can properly manage and utilize the resources of your business in a planned n
                systematic way.</p>
            <p><span style={{'color': '#3a90d5'}}><strong>UWO Products :</strong></span></p>
            <p>We Have Various Applications For Your Business To Get Automation Done :</p>
            <ol>
                <li><span style={{'color': '#000000'}}><strong>Wuddy Bot</strong></span></li>
                <li><span style={{'color': '#000000'}}><strong>Wuddy Bot Multiple Agent</strong></span></li>
                <li><span style={{'color': '#000000'}}><strong>Apni Online Dukan</strong></span></li>
                <li><span style={{'color': '#000000'}}><strong>UWO CRM</strong></span></li>
            </ol>
            <p><span style={{'color': '#000000'}}><strong> “Growth is crucial to the long-term survival of a business,”
                    </strong></span></p>
            <p>Business growth depends on acquiring and retaining customers.</p>
            <p><span style={{'color': '#3a90d5'}}><strong>What services do we provide?</strong></span></p>
            <p>Our Digital services will help to make the perfect online presence of your Business-</p>
            <ol>
                <li><span style={{'color': '#000000'}}> <strong>Digital Marketing</strong></span></li>
                <li><span style={{'color': '#000000'}}> <strong>Video Advertising</strong></span></li>
                <li><span style={{'color': '#000000'}}> <strong>Website Development</strong></span></li>
                <li><span style={{'color': '#000000'}}> <strong>App Development(Android/IOS)</strong></span></li>
                <li><span style={{'color': '#000000'}}> <strong>Graphics Designing</strong></span></li>
                <li><span style={{'color': '#000000'}}> <strong>IT solutions</strong></span></li>
            </ol>
            <p><span style={{'color': '#3a90d5'}}><strong>How UWO Video App is helping businesses and
                        freelancer?</strong></span></p>
            <p>UWO Video App with its latest update having freelancers who can make their profile and upload videos of
                their professional work.</p>
            <p>And on the other end, Enterprises who need the help of freelancers can download the UWO Video App and
                check profiles of freelancers with their work &amp; can connect with them. And can get their work done
                easily and quickly. So UWO Video App is now connecting skilled freelancers with businesses who are
                looking for some help.</p>
           <Link to="BusinessForm"><button class="joinusbs">Join Us</button></Link>

        </section>
      
    </div>
<Footer/>
  
   
    </div>
    )
}
export default Business;