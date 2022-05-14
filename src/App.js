import Home from './component/Home';
import About from './component/About';
import Career from './component/Career';
import Advertising from './component/Advertising';
import Affiliate from './component/Affiliate';
import Business from './component/Business';
import Blog from './component/Blog';
import Digital from './component/Digital';
import ApniOnlineDukaan from './component/ApniOnlineDukaan';
import Franchise from './component/Franchise';
import ITSolution from './component/ITSolution';
import UWOCrm from './component/UWOCrm'  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import EarnWithUWO from './component/EarnWithUWO';
import ScrollToTop from './component/ScrollToTop';
import Terms from './component/Terms'
import InfluencerForm from './component/InfluencerForm';
import ContactForm from './component/ContactForm';
import Report from './component/Report';
import AffiliateForm from './component/AffiliateForm';
import BusinessForm from './component/BusinessForm';
import FranchiseForm from './component/FranchiseForm';
import EarnWithUWOForm from './component/EarnWithUWOForm';
import Whatsapp from './component/Whatsapp';
import CareerForm from './component/CareerForm';




function App() {

  return (
    <div >
   
   <Router > 
   <ScrollToTop />
    <Route exact path="/" component={Home} />
    <Route exact path="/Advertising" component={Advertising} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Affiliate" component={Affiliate} />
    <Route exact path="/Business" component={Business} />
    <Route exact path="/Blog" component={Blog} />
    <Route exact path="/Career" component={Career} />
    <Route exact path="/Digital" component={Digital} />
    <Route exact path="/ApniOnlineDukaan" component={ApniOnlineDukaan} />
    <Route exact path="/EarnWithUWO" component={EarnWithUWO} />
    <Route exact path="/Franchise" component={Franchise} />
    <Route exact path="/UWOCrm" component={UWOCrm} />
    <Route exact path="/ITSolution" component={ITSolution}/>
    <Route exact path="/Terms" component={Terms}/>
    <Route exact path="/ContactForm" component={ContactForm}/>
    <Route exact path="/Report" component={Report}/>
    <Route exact path="/AffiliateForm" component={AffiliateForm}/>
    <Route exact path="/BusinessForm" component={BusinessForm}/>
    <Route exact path="/FranchiseForm" component={FranchiseForm}/>
    <Route exact path="/EarnWithUWOForm" component={EarnWithUWOForm}/>
    <Route exact path="/InfluencerForm" component={InfluencerForm}/>
    <Route exact path="/CareerForm" component={CareerForm}/>

    </Router> 

     
    </div>
  );
}

export default App;
