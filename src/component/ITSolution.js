import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../assets/css/itSolution.css';
import '../assets/phone-css/itsolutionPhone.css'
import { Link } from "react-router-dom"
import Whatsapp from './Whatsapp';

function ITSolution() {
  return (
    <div>
      <Header />
      <Whatsapp/>
      <section className="cont1it" style={{ 'backgroundImage': "url('Images/backimage.webp')" }}>
        <div class="content1it col-12 p-3 fonthead1">
          IT Solution
        </div>
        <div class="content2it col-sm-12 p-3 fonthead2">
          Convert unique ideas into Reality with Application Software Development. We allow your IT infrastructure to seamlessly interact with clients, employees, suppliers, media and management.
        </div>
        <div class="content3it col-sm-12 p-3 ">
          <Link to="/ContactForm"><button type="button" className="btnit ">Contact Us</button></Link>
        </div>
      </section>

      <section className="servicescontainerit">
        <h1 class="h-primary centerit">Our Services</h1>
        <p class="h-primary centerit">We will show you the way to Success!  UWO VIDEO is IT Solutions is a Jabalpur based India IT Company which provided services in the field of website development and designing.</p>
        <div className="servicesit">
          <div class="boxit">
            <img src="" alt="" />
            <h2 class="h-secondary centerit">Android App Development</h2>
            <p class="centerit">Custom Web Design Services Build a unique and attractive website to Convert Visitors into Customers.</p>

          </div>
          <div class="boxit">
            <img src="" alt="" />
            <h2 class="h-secondary centerit">Software Development</h2>
            <p class="centerit">We perform world-class custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses.</p>

          </div>
          <div class="boxit">
            <img src="" alt="" />
            <h2 class="h-secondary centerit">Website Development</h2>
            <p class="centerit">Whether you a need an app for an Android smartphone we can help you build a solid solution that works on every device regardless of brand and your industry of operation.</p>

          </div>
          <div class="boxit">
            <img src="" alt="" />
            <h2 class="h-secondary centerit">Cloud Services and IT Support</h2>
            <p class="centerit">Manage Your IT Infrastructure with UWO Cloud Services. We provide Cloud Hosting and many more.</p>

          </div>
        </div>
      </section>

      <section className="cont3it">
        <div class="row featuretteit">
          <div class="col-md-7">
            <h2 class="featuretteheadingit">Android App Development</h2>
            <div class="lineit"></div>
            <p class="leadit">UWO Provides Small and big companies with Android app development services. Our developers of Android apps have years of experience in designing mobile apps that are custom, stable, fully functional, and futuristic for the entire range of Android devices.</p>
          </div>

          <div class="col-md-5">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ 'width': '330px', 'height': '300px', marginTop: '20px'}} src="Images/img-1.webp" alt="" />

          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row featuretteit">
          <div class="col-md-7 order-md-2">
            <h2 class="featuretteheadingit">Software Development</h2>
            <div class="lineit"></div>
            <p class="leadit">Software development services cover design, engineering, deployment, support, scaling and evolution of various software types. We employ the proven combination of the latest and classic trusted technologies, having the following technology stack as our basis: Back end, Frontend, Mobile, desktop and cloud databases.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ 'width': '330px', 'height': '300px' }} src="Images/img-2.webp" alt="" />

          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row featuretteit">
          <div class="col-md-7">
            <h2 class="featurette-heading">Website Development</h2>
            <div class="lineit"></div>
            <p class="leadit">We at UWO VIDEO IT Solutions Pvt. Ltd will help your business to reach its potential by web development. With help of website development, we will simply and speedup your process of enhancing your internet presence, which will help to increase and get a huge market exposure.</p>
          </div>

          <div class="col-md-5">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ 'width': '330px', 'height': '300px' }} src="Images/img-3.webp" alt="" />

          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row featuretteit">
          <div class="col-md-7 order-md-2">
            <h2 class="featuretteheadingit">Cloud Services and IT Support</h2>
            <div class="lineit"></div>
            <p class="leadit">Cloud Services powered by UWO give you the power to collaborate using the Internet to make your business more efficient. UWO Cloud Services include:</p><ul><li>Cyber Threats Protection</li><li>Email Protection and Continuity</li><li>Office 365 Migration and Support</li><li>Private Server Hosting</li><li>Backup and Continuity</li></ul>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ 'width': '330px', 'height': '300px' }} src="Images/img-4.webp" alt="" />

          </div>
        </div>
        <hr class="featurette-divider" />
      </section>

      <section className="cont4it">
        <div className="lastboxit">
          <h2>Get Any Of These Services </h2>
          <p>UWO offers a full range of IT services to support your business infrastructure outside of your data centre,too. From networking to applications,our team of certified experts will monitor,manage and maintain your IT environment.</p>
          <Link to="/ContactForm"> <button>Contact Us</button></Link>
        </div>
      </section>


      <Footer />
    </div>
  )
}
export default ITSolution;