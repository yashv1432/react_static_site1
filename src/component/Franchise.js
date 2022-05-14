import React  from 'react'
import Header from './Header';
import Footer  from './Footer';
import '../assets/css/franchise.css';
import '../assets/phone-css/franchisePhone.css'
import { Link } from "react-router-dom"
import Whatsapp from './Whatsapp';

function Franchise() {
    return (
        <div>
        <Header/>
        <Whatsapp/>
        <section className="cont1fr" style={{ 'backgroundImage': "url('Images/business.webp')"}}>
      <div className="content1fr col-12 p-3 fonthead1 ">
        Franchise Of UWO
      </div>
    </section>


    <section className="cont3fr">
      <div class="row featurettefr">
        <div class="col-md-7">
          <h2 class="featuretteheadingfr">UWO Franchise</h2>
          <div class="linefr"></div>
          <p class="leadfr"><strong>UWO is an Advertising and IT solutions company. We provide A-Z business solutions from
              automating your business to managing your social media accounts. We have a vast range of products and
              services. And now we are taking a new initiative of making affiliates of UWO and franchises of
              UWO.</strong></p>
        </div>

        <div class="col-md-5">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            style={{'width':'400px' , 'height':'300px'}} src="Images/2112.webp" alt=""/>
        </div>
      </div>

      <div class="row featurettefr">
        <div class="col-md-7 order-md-2">
          <h2 class="featuretteheadingfr">Terms and Conditions</h2>
          <div class="linefr"></div>
          <p class="leadfr">
          <ul class="gap1fr"><strong>
            <li>Security Deposit of ₹1 Lakh and the government charges will be paid by the franchisee.</li>
            <li>UWO Franchisee should have office space of 150 sq. ft.</li>
            <li>Minimum 2 staff members.</li>
            <li>Effective internet connection.</li>
            <li>Mobile or Telephones for calling clients and potential customers.</li>
            <li>At least 2 Desktop or Laptop.</li>
            <li>Master Franchisee will be able to provide unlimited franchise under them and distribute them profit
              as per decided between them.</li>
              </strong>
          </ul>
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            style={{'width':'400px' , 'height':'300px'}} src="Images/19197988.webp" alt=""/>

        </div>
      </div>

      <div class="row featurettefr">
        <div class="col-md-7 order-md-2">
          <h2 class="featuretteheadingfr">How It Works</h2>
          <div class="linefr"></div>
          <p class="leadfr">
          <ul class=" gapfr"><strong>
              <li>Should have a source of generating leads.</li>
              <li>Should have any platform where UWO Products can be promoted.</li>
            </strong>
          </ul>
          </p>
      <Link to="/FranchiseForm"><button class="joinusfr">Join Us</button></Link>
        </div>

        <div class="col-md-5 order-md-1">
          <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            style={{'width':'400px' , 'height':'300px'}} src="Images/838748.webp" alt=""/>


        </div>
      </div>

    </section>

<Footer/>
    </div>
    )
}
export default Franchise;