import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/affiliate.css";
import "../assets/phone-css/affiliatePhone.css";
import { Link } from "react-router-dom";
import Whatsapp from "./Whatsapp";
import Dropdown from './Dropdown';
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Affiliate() {
  let mystyle = {
    borderRadius: '20px', background: 'linear-gradient(180deg, rgba(0,210,255,1) 0%, rgba(58,144,213,1) 100%)',
    height: '60px',
    color: '#fff',
    border: 'none',
  }
  let mystyle2 = {
    borderRadius: '20px',
  }
  return (
    <div>
      <Header />
      <Whatsapp />
      <div className="container-fluid">
        <section
          className="cont1af"
          style={{ backgroundImage: "url('Images/business.webp')" }}
        >
          <div className="content1af col-12 p-3 fonthead1">
            FAQs On UWO Affiliate
          </div>
        </section>

        <section className="cont2af">
          <h2 className="fonthead1">Get Started Today With Easy Steps</h2>
          <div className="blocksaf">
            <div className="blocknaf">
              <p>Step 1</p>
              <div className="blockn1af">
                <h2>Sign Up</h2>
                <p className="text-muted">
                  Sign up for one of Affiliate platform listed below
                </p>
              </div>
            </div>
          </div>
          <div className="blocksaf">
            <div className="blocknaf">
              <p>Step 2</p>
              <div className="blockn1af">
                <h2>Account Approval</h2>
                <p className="text-muted">
                  After account approval you’ll get access to affiliate links
                  and banners with your affiliate ID applied
                </p>
              </div>
            </div>
          </div>
          <div className="blocksaf">
            <div className="blocknaf">
              <p>Step 3</p>
              <div className="blockn1af">
                <h2>Use Affiliate ID And Bannres</h2>
                <p className="text-muted">
                  Use your affiliate ID to refer UWO page or choose any banners.
                </p>
              </div>
            </div>
          </div>
          <div className="blocksaf">
            <div className="blocknaf">
              <p>Step 4</p>
              <div className="blockn1af">
                <h2>Promotions</h2>
                <p className="text-muted">
                  Display the link or banner on your site, social media or
                  emails.
                </p>
              </div>
            </div>
          </div>
          <div className="blocksaf">
            <div className="blocknaf">
              <p>Step 5</p>
              <div className="blockn1af">
                <h2>Earn Money</h2>
                <p className="text-muted">
                  You earn money for every customer you refer to us. Real-time
                  reporting on your earnings and regular payouts will be
                  provided.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="stepsaf">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item my-3 "style={mystyle2}>
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
                  What Is UWO Affiliate Program?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body fonthead2">
                  <p>
                    Our affiliate program pays you for sending your customers to our
                    website. Affiliate marketing programs don’t require any fees and
                    are easy to set up, so there’s no risk to you.
                  </p>
                  <p className="mb-0">
                    UWO is here with a unique affiliate program letting you make
                    impressive sums of money as an affiliate.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item my-3 "style={mystyle2}>
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
                  Why UWO Affiliate?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body fonthead2">
                  <p>
                    {" "}
                    Being a UWO Affiliate is great for you and your visitors. Your
                    visitors can earn real cash by selling our products.
                  </p>
                  <ul>
                    <li>
                      Collaborate with us & earn up to 20% commission on all
                      products
                    </li>
                    <li>A certification of Reseller will be provided</li>
                    <li>Get guidance for Product Selling</li>
                    <li>Weekly training for our New Products with demo</li>
                    <li>Receive Payment within 7 days</li>
                    <li>
                      Incentives will be Provided on – Reach a goal of 1 lakh – 10
                      lakh
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item my-3 " style={mystyle2}>
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
                  What Benefit Do You Get As A UWO Affiliate?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body fonthead2">
                  <p>
                    Join the UWO Affiliate program you’ll not only benefit from the
                    credibility of our brand but create a new source of income with
                    very little effort.
                  </p>
                  <ul>
                    <li>UWO have a wide range of products to promote.</li>
                    <li>The tracking is accurate.</li>
                    <li>Generate Revenue without starting your own business</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item my-3 " style={mystyle2}>
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
                  How You Can Earn Through UWO Affiliate?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body fonthead2">
                  <p>
                    Making money as an affiliate is a snap. Just place one of our
                    banners or links where your visitors, customers and friends will
                    see it and you’ll earn commission on every qualifying sale made
                    through your ads
                  </p>
                  <p>
                    There is no limit to the money that you can make as an affiliate
                    with UWO. The more sales you generate, the more you earn.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item my-3 " style={mystyle2}>
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed btn1me fonthead1" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  <div className="plusme"><img src="Images/iconhire11.png" alt="" /></div>
                  Special Incentives For Our Affiliate Program
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body fonthead2">
                  <ul>
                    <li>
                      On Sale of Products worth 1 Lakh you will be listed in{" "}
                      <strong>Silver Category</strong>
                    </li>
                    <li>
                      On Sale of Products worth 5 Lakh you will be listed in{" "}
                      <strong>Gold Category</strong>
                    </li>
                    <li>
                      On Sale of Products worth 10 Lakh you will be listed in{" "}
                      <strong>Diamond Category</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>


        </section>

        <section className="servicescontaineraf">
          <h1 className="h-primary center">Commission Category List </h1>
          <div className="servicesaf">
            <div
              className="boxaf"
              style={{ backgroundColor: " rgba(226, 216, 216, 0.555)" }}
            >
              <h2 className="h-secondary center">Silver Category</h2>
              <p className="center">Will Get</p>
              <h2 className=" h-secondary center" style={{ fontSize: "50px" }}>
                5%
              </h2>
              <p className="center">Commision</p>
            </div>
            <div
              className="boxaf"
              style={{ backgroundColor: "rgb(218, 218, 184)" }}
            >
              <h2 className="h-secondary center">Gold Category</h2>
              <p className="center">Will Get</p>
              <h2 className=" h-secondary center" style={{ fontSize: "50px" }}>
                10%
              </h2>
              <p className="center">Commision</p>
            </div>
            <div
              className="boxaf"
              style={{ backgroundColor: "rgb(187, 187, 226)" }}
            >
              <h2 className="h-secondary center">Diamond Category</h2>
              <p className="center">Will Get</p>
              <h2 className=" h-secondary center" style={{ fontSize: "50px" }}>
                15%
              </h2>
              <p className="center">Commision</p>
            </div>
          </div>
        </section>


        <Dropdown/>
      

        <section className="btn2af">
          <Link to="AffiliateForm">
            <button className="orangeaf">Join Our Affiliate Program</button>
          </Link>
          <a href="https://play.google.com/store/apps/details?id=com.uwo.entertainments&hl=en_IN&gl=US">
            <button className="blueaf">Download UWO Video App</button>
          </a>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default Affiliate;
