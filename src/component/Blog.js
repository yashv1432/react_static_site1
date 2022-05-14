import React  from 'react'
import Header from './Header';
import Footer  from './Footer';
import '../assets/css/blog.css'
import '../assets/phone-css/blogPhone.css'
import Whatsapp from './Whatsapp';

function Blog() {
    return (
    <div>
      <Header/>
      <Whatsapp/>
     
      <section id="cont3bl">
            <div className="row featurettebl">
                <div id="centerbl" className="col-md-7">
                    <h2 className="featurette-heading fonthead">BE INSPIRED BE INFORMED!</h2>
                    {/* <p className="leadbl fonthaed2">SignUp And Recieve Our Exclusive Blogging & Digital Marketing Tips Right To Your
                        Inbox</p> */}
                    {/* <div id="inputsbl">
                        <label for="names"></label>
                        <input type="text" className="name" name="names" value="Name"/>
                        <label for="names"></label>
                        <input type="email" className="name" name="names" value="Your email address"/>
                    </div>
                    <button className="signupbl">Sign Up</button> */}
                </div>

                <div className="col-md-5">
                    <img id="imgbl" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                       src="Images/19197988.webp" alt=""/>
                </div>
            </div>
        </section>
        <section id="cont7bl">
            <h2>UWO Video</h2>
            <p>Be it your own short video or something you love – easily share the all your videos through with your
                friends and family on Whatsapp, Facebook or set as your social media status. Create profile, upload
                videos - all in one tab
            </p>
        </section>
        <section id="cont3bbl">

            <div className="row featurette">
                <div className="col-md-5 order-md-2 img-para-1">
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Importance of Video Advertisement in Social Media</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>The key role of Video Advertising in Digital Marketing</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Advantages of Video Advertising</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>How Can We Grow With UWO</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Start your own short video with UWO VIDEO</p>
                    </div>

                </div>
                <div className="col-md-7 order-md-1 img-para-2">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        src="Images/19197988.webp" alt=""/>
                    <p className="p1">Business With UWO-Grow Your Business With This!!</p>
                    <p className="p2">Grow your Business With UWO you can use this to..</p>

                </div>
            </div>
            <hr className="featurette-divider"/>

        </section>

        <section id="cont7bl">
            <h2>Video Advertising</h2>
            <p>UWO VIDEO is a leading video production company that provides a wide range of animated videos production services to business across various industry verticals</p>
        </section>
        <section id="cont3bbl">

            <div className="row featurette">
                <div className="col-md-5 order-md-1 img-para-1">
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Creators Advertisement Through UWO VIDEO</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Doogle Video Advertisement Through UWO VIDEO</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Infographic Video Advertisement Through UWO VIDEO</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Short Video Advertisement via UWO VIDEO</p>
                    </div>
                    <div className="img-cont">
                        <img src="Images/business.webp" alt=""/>
                        <p>Long Video Advertisement Through UWO VIDEO</p>
                    </div>

                </div>
                <div className="col-md-7 order-md-2 img-para-2">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                         src="Images/19197988.webp" alt=""/>
                    <p className="p1">Celebrity Advertisement Through UWO VIDEO</p>
                    <p className="p2">Celebrity Advertisement: UWO provides celebrity endorsement ads that have a...</p>

                </div>
            </div>
            <hr className="featurette-divider"/>

        </section>

        <section id="cont7bl">
            <h2>Digital Marketing</h2>
            <p>Whether you need a website designed, need to promote your app or have SEO requirements (or all the above) we can seamlessly work together to help you achieve transformational growth.</p>
        </section>
        <section id="servicescontainerbl">
            <div id="servicesbl">
              <div className="boxbl">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">Digital Marketing Platinum Package</h2>
              </div>
      
              <div className="boxbl">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">Digital Marketing Silver Package</h2>
              </div>
      
              <div className="boxbl">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">Digital Marketing Gold Package</h2>
      
              </div>
            </div>
          </section>

          {/* <section id="cont71bl">
            <h2>Our Latest Creations</h2>

        </section>
          <section id="services-container1bl">
            <div id="services-1">
              <div className="box-1">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">How to do Affiliate Marketing using Quora Platform?</h2>
              </div>
      
              <div className="box-1">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">Paid Traffic vs. Free Traffic for Affiliate Marketing Network</h2>
              </div>
      
              <div className="box-1">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">Special Incentives for UWO Affiliate Program</h2>
      
              </div>
              <div className="box-1">
                <img src="Images/business.webp" alt=""/>
                <h2 className="h-secondary center">Best ways to promote your Affiliate Marketing Links!</h2>
      
              </div>
            </div>
          </section>
          <section id="btnbl">
          <button id="exploremorebl">Explore More</button>
          </section> */}
    
      <Footer/>
    </div>
    )
}
export default Blog;