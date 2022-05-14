
import '../assets/css/career.css';
import '../assets/phone-css/careerPhone.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Header';
import Footer  from './Footer';
import Whatsapp from './Whatsapp';
import CareerForm from './CareerForm';
import { Link } from "react-router-dom"



function Career() {
  return (
    <div>
    <Header/>
    <Whatsapp/>
    <div>
        <section className="cont3ca">
            <div className="row featuretteca">
               
                <div className="centerca" className="col-md-7">
                    <h2 className="featuretteheadingca fonthead1" style={{color: "#3a90d5", padding: "30px 0px" ,marginTop:5}}>We Are Always
                        Eager To Meet Fresh Talent</h2>
                    <p className="lead fonthead2">UWO is defined by its unique ability i.e. Unlimited U…where doors are open for everyone. So need members to be a part of UWO Team with different perspectives, experiences and backgrounds.. </p>
                    <Link to="/CareerForm"><button className="shopnowca">Apply Now</button></Link>
                </div>

                <div className="col-md-5">
                    <img className="imgca" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="Images/img-1.webp"
                        style={{width:450, height:450}}/>
                </div>
               
            </div>
        </section>
        <section className="cont4ca">
            <div className="whyca">
                <h2>Why UWO?</h2>
                <div className="verticallineca"></div>
                <div className="p3ca">
                    <p>To Bring individuals connected through their skills We directly provide employment opportunity to the skilled professionals as well as indirectly by connecting skilled professionals to the needy one.</p>
                    <p>By providing earning opportunity to skilled & talented people by giving a platform, UWO Video Android App by uploading their videos showcasing their skills & talent and get opportunity to earn.</p>
                    <p>Creators gets advertisement from the businessmen who need ads for their business and also connecting the needy people to the skilled freelancers so both of their requirement get satisfied and their work gets done.               						
				</p>

                </div>
            </div>
        </section>
        <Footer/>
</div>      
    </div>
  );
}

export default Career;
