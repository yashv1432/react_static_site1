
import '../assets/css/header.css';
import '../assets/phone-css/headerPhone.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  {faBars,faCaretDown}from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom'



function Header() {
  return (
    <div className="head">
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img src="Images/UWOVideologo.png" alt=""/>
        </NavLink>

        <button className="navbar-toggler"
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse right" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item">
              <NavLink className="nav-link home" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <a href="https://uwokart.com/" className="nav-link home">Shop</a>
            </li>


            <li className="nav-item dropdown">
              <a className=" home nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Products
              {/* <i className="fas fa-caret-down igap" ><FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '4px'}} id="icons" /></i> */}
              </a>
              <ul className="dropdown-menu index" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item down" href="https://wuddy.uwovideo.com">Wuddy</a></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/ApniOnlineDukaan" className="dropdown-item down">Apni Online Dukaan</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/UWOCrm" className="dropdown-item down" >UWO CRM</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className=" home nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Services
                {/* <i className="fas fa-caret-down igap" ><FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '4px'}} id="icons" /></i> */}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to="/Advertising" className="dropdown-item down" >Video Advertisement</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/Digital" className="dropdown-item down">Digital Marketing</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/ITSolution" className="dropdown-item down">IT Solution</NavLink></li>

              </ul>
            </li>
            {/* <li className="nav-item">
            <NavLink className=" home nav-link" to="/Blog" exact>Blogs</NavLink>
            </li> */}

            <li className="nav-item dropdown">
              <a className=" home nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Join Us
                {/* <i className="fas fa-caret-down igap" ><FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '5px'}} id="icons" /></i> */}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to="/Career" className="dropdown-item down" >Career</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/Affiliate" className="dropdown-item down">Affiliate</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/Franchise" className="dropdown-item down" >Franchise</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/InfluencerForm" className="dropdown-item down" href="#">UWO Influencer</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="EarnWithUWO" className="dropdown-item down" >Earn with UWO</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink to="/Business" className="dropdown-item down">Business with UWO</NavLink></li>
              </ul>

            </li>
            <li className="nav-item" style={{margin: '0px'}}>
            <NavLink className=" home nav-link hello" to="/About" exact>About Us</NavLink>
            </li>
         

            <li className="nav-item dropdown">
              <a className=" home nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Contact Us
                {/* <i className="fas fa-caret-down igap" >
                  <FontAwesomeIcon icon={faCaretDown} style={{'paddingleft': '4px'}} id="icons" />
                  </i> */}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item down" to="/ContactForm">Contact Us</NavLink></li>
                <li class="dropdown-divider"></li>
                <li><NavLink className="dropdown-item down" to="/Report">Report</NavLink></li>
              </ul>

            </li>
            <li className="nav-item " style={{margin: '0px'}}>
            <NavLink className=" home nav-link hello" to="/Terms" exact>Terms</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="liner"></div> */}
    </div>
  )
}

export default Header;
