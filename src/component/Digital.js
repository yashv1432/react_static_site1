import React from 'react'
import Header from './Header';
import Footer from './Footer';
import '../assets/css/digital.css';
import '../assets/phone-css/digitalPhone.css'
import { Link } from "react-router-dom"
import Whatsapp from './Whatsapp';

function Digital() {

  return (
    <div>
      <Header />
      <Whatsapp/>
      <section className="cont1di" style={{ 'backgroundImage': "url('Images/digital.webp')" }}>
        <div className="content1di col-12 p-3 fonthead1">
          We Don't Just Promote Businesses
        </div>
        <div className="content2di col-sm-12 p-3 fonthead2">
          We Work For Your Growth As Business Partner
        </div>
        <div className="content3di col-sm-12 p-3 ">
          <Link to="/ContactForm"><button type="button" className="btndi ">Contact Us</button></Link>
        </div>
      </section>

      <section className="servicescontainerdi">
        <h1 className="h-primary center">What Can We Do For Your Business Growth</h1>
        <div className="servicesdi">
          <div className="boxdi">
            <img src="Images/rotate.png" alt="" />
            <h2 className="h-secondary center">Social Media Marketing</h2>


          </div>
          <div className="boxdi">
            <img src="Images/rotate.png" alt="" />
            <h2 className="h-secondary center">Content Marketing</h2>


          </div>
          <div className="boxdi">
            <img src="Images/rotate.png" alt="" />
            <h2 className="h-secondary center">Search Engine Optimization</h2>

          </div>
          <div className="boxdi">
            <img src="Images/rotate.png" alt="" />
            <h2 className="h-secondary center">PPC Management Services</h2>


          </div>
          <div className="boxdi">
            <img src="Images/rotate.png" alt="" />
            <h2 className="h-secondary center">Email Marketing Services</h2>


          </div>
        </div>
      </section>

      <section className="cont2di">
        <h2>Why Choose UWO For Your Digital Marketing Needs?</h2>
        <p>We work closely with companies big and small to spec, create and deliver quality video. It's like having your
          own in-house video production company with the reliability and flexibility that comes with cloud-based video
          services.</p>
      </section>

      <section className="cont3di">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">PPC Management Services</h2>
            <div className="linedi"></div>
            <p className="leaddi">Our Marketing packages are carefully designed to add value to businesses of every size. Our
              SMM packages go beyond the basics of optimization and include a dedicated account manager who will provide
              ongoing marketing consultancy, competitor analysis, keyword reporting and a content marketing service. Take
              a look at the different levels of service to find the one that best fits your budget and social media
              marketing requirements. </p>
              <Link to="/ContactForm"> <button className="shopnowdi">Shop Now</button></Link>
          </div>

          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              style={{ 'width': '400px', 'height': '300px' }} src="Images/img-1.webp" alt="" />

          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Content Marketing Services</h2>
            <div className="linedi"></div>
            <p className="leaddi">There’s some SEO in everything you do online. But that doesn’t mean everyone needs the same
              SEO services. Build your search engine optimization foundation with the trusted experts. We offer the right
              plans and strategies that match your exact needs. On-page optimization involves updating your website
              methodically to increase its online visibility for those searching for the products or services you offer.
              SEO</p>
              <Link to="/ContactForm"><button className="shopnowdi">Shop Now</button></Link>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              style={{ 'width': '400px', 'height': '300px' }} src="Images/img-2.jfif" alt="" />

          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Email Marketing Services</h2>
            <div className="linedi"></div>
            <p className="leaddi">Our Marketing packages are carefully designed to add value to businesses of every size. Our
              SMM packages go beyond the basics of optimization and include a dedicated account manager who will provide
              ongoing marketing consultancy, competitor analysis, keyword reporting and a content marketing service.</p>
              <Link to="/ContactForm"> <button className="shopnowdi">Shop Now</button></Link>
          </div>

          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              style={{ 'width': '400px', 'height': '300px' }} src="Images/img-3.webp" alt="" />

          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Social Media Marketing</h2>
            <div className="linedi"></div>
            <p className="leaddi">Our Marketing packages are carefully designed to add value to businesses of every size. Our
              SMM packages go beyond the basics of optimization and include a dedicated account manager who will provide
              ongoing marketing consultancy, competitor analysis, keyword reporting and a content marketing service. Take
              a look at the different levels of service to find the one that best fits your budget and social media
              marketing requirements.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              style={{ 'width': '400px', 'height': '300px' }} src="Images/img-2.jfif" alt="" />

          </div>
        </div>
      </section>
      <section className="cont7di">
        <p>Ready To Grow Your Business? Pick Your Plan</p>
      </section>

      <section className="cont8di">
        <div className="box">
          <div className="silver">
            <p>Silver</p>
          </div>
          <hr className="featurette-divider" />
          <div className="inr">
            <p>
              INR 10999/month
            </p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>2 Accounts Management</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Analyse your Audience</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>SM page optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Campaign Creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>15 high Quality post</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Campaign manager Account Setup</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Facebook Analytics Report creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Traffic Monitoring</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Pixel installation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Post content</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Page Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Ad account setup</p>
          </div>

          <div style={{ 'textAlign': 'center' }}>
          <Link to="/ContactForm"><button className="buy-now">Buy Now</button></Link>
          </div>
        </div>
        <div className="box">
          <div className="silver">
            <p>Gold</p>
          </div>
          <hr className="featurette-divider" />
          <div className="inr">
            <p>
              INR 29999/month
            </p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>2 Accounts Management</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Analyse your Audience</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>SM page optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Campaign Creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>15 high Quality post</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Campaign manager Account Setup</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Facebook Analytics Report creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Traffic Monitoring</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/close.png" alt="" />
            <p>Pixel installation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Post content</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Page Optimization</p>
          </div>
          <hr className="featurette-divider" />

          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Ad account setup</p>
          </div>
          <div style={{ 'textAlign': 'center' }}>
          <Link to="/ContactForm"><button className="buy-now">Buy Now</button></Link>
          </div>
        </div>

        <div className="box">
          <div className="silver">
            <p>Platinum</p>
          </div>
          <hr className="featurette-divider" />
          <div className="inr">
            <p>
              INR 31999/month
            </p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>2 Accounts Management</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Analyse your Audience</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>SM page optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Campaign Creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>15 high Quality post</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Campaign manager Account Setup</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Facebook Analytics Report creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Traffic Monitoring</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Pixel installation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Post content</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Page Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p><del>Ad account setup</del></p>
          </div>
          <div style={{ 'textAlign': 'center' }}>
          <Link to="/ContactForm"> <button className="buy-now">Buy Now</button></Link>
          </div>
        </div>
      </section>
      <section className="cont4di">
        <div className="lastboxdi">
          <p>To make better understanding and more support</p>
          <h2>Contact Us To Buy Plan</h2>
      <Link to="/ContactForm"><button>Contact Us</button></Link>
        </div>
      </section>
      <section className="cont9di">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Search Engine Optimization</h2>
            <div className="line"></div>
            <p className="lead">There’s some SEO in everything you do online. But that doesn’t mean everyone needs the same SEO services. Build your search engine optimization foundation with the trusted experts. We offer the right plans and strategies that match your exact needs. On-page optimization involves updating your website methodically to increase its online visibility for those searching for the products or services you offer. SEO marketing requires significant time and skills to produce a competitive strategy for the digital marketplace</p>

          </div>

          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              style={{ 'width': '400px', 'height': '300px' }} src="Images/img-3.webp" alt="" />
          </div>
        </div>
      </section>
      <section className="cont10di">
        <div className="full">
          <div className="arrow"><img src="Images/fast-forward.png" alt="" /></div>
          <div className="content">
            <h2>
              Local SEO plan
            </h2>
            <p>This is the ideal plan for advertising a physical location and bringing people within your community right
              to your doorstep.</p>
          </div>
        </div>
        <div className="full">
          <div className="arrow"><img src="Images/fast-forward.png" alt="" /></div>
          <div className="content">
            <h2>
              National SEO plan
            </h2>
            <p>If you need to reach a nation-wide (or even international) audience, this plan includes everything you require.</p>
          </div>
        </div>
        <div className="full">
          <div className="arrow"><img src="Images/fast-forward.png" alt="" /></div>
          <div className="content">
            <h2>
              Global SEO plan
            </h2>
            <p>Highly competitive national campaigns, e-commerce sites, and international organizations can dominate the SERPS with this plan. </p>
          </div>

        </div>

      </section>


      <section className="cont7di cont7dip">
        <p>Pick Your Plan</p>
      </section>

      <section className="cont8di">
        <div className="box">
          <div className="silver">
            <p>LOCAL SEO</p>
          </div>
          <hr className="featurette-divider" />
          <div className="inr">
            <p>
              INR 5999/month
            </p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Local SEO Audit</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Keywords Research</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Competitive Analysis</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>10 Keywords</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Onpage Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Service Area Landing Pages</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Google My Business Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Pricing table list item</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Google My Business Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Online Review Monitoring</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>10 high quality post</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Page Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>10 primary Citations per Month</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Monthly report</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Page Management</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Create content for seo</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Image optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Lable Listing</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Manage Reviews</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Product Listing</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Manage Reviews</p>
          </div>
          <hr className="featurette-divider" />
          <div style={{ 'textAlign': 'center' }}>
          <Link to="/ContactForm"> <button className="buy-now">Buy Now</button></Link>
          </div>
        </div>
        <div className="box">
          <div className="silver">
            <p>NATIONAL SEO</p>
          </div>
          <hr className="featurette-divider" />
          <div className="inr">
            <p>
              INR 12999/month
            </p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Competitive Keywords / Ranking Nationwide</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Keyword Research</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Analytics Setup & Configuration</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Monthly Strategy Discussion</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Website Analysis</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Title Tag & Meta Tag Creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Technical SEO - (Robots.txt, Sitemap, etc.)</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Duplicate Content Check</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Google Penalty Check</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Internal Link Building(Crosslinking)</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Content Creation, Optimization & Editing</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>3 blogs (Content for link building)</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Offsite Link Building</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Monthly Custom Report</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Link Building</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Website mapping</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Content Optimization</p>
          </div>
          <div style={{ 'textAlign': 'center' }}>
          <Link to="/ContactForm"> <button className="buy-now">Buy Now</button></Link>
          </div>
        </div>




        <div className="box">
          <div className="silver">
            <p>GLOBAL SEO</p>
          </div>
          <hr className="featurette-divider" />
          <div className="inr">
            <p>
              INR 22999/month
            </p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Keyword Research</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>ON page SEO</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>OFF page SEO</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Analytics Setup & Configuration</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>White and Black hat management</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Title Tag & Meta Tag Creation</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Technical SEO - (Robots.txt, sitemap, etc)</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Monthly Strategy Discussion</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Internal Link Building (Cross-Linking)</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Content Creation, Optimization & Editing</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>10 blogs (for link building)</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Advanced On-Site/Code Optimization</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Off-Site Link Building</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Press Release Management</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Duplicate Content Strategy</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Sales Funnel Tracking</p>
          </div>
          <hr className="featurette-divider" />
          <div className="acc">
            <img className="check" src="Images/check.png" alt="" />
            <p>Monthly Custom Report</p>
          </div>

          <div style={{ 'textAlign': 'center' }}>
          <Link to="/ContactForm"> <button className="buy-now">Buy Now</button></Link>
          </div>
        </div>
      </section>
      <section className="cont4di">
        <div className="lastboxdi">
          <p>To make better understanding and more support</p>
          <h2>Contact Us To Buy Plan</h2>
         <Link to="ContactForm"><button>Contact Us</button></Link>
        </div>
      </section>



      <Footer />
    </div>
  )
}
export default Digital;