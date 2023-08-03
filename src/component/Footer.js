import React from "react";
import './Footer.css';
import footerLogo from '../Assets/logoFooter.png';
import facebook_icon from '../Assets/facebook_icon.png';
import twitter_icon from '../Assets/twitter_icon.png';
import insta_icon from '../Assets/insta-icon.png';
import linkedin_icon from '../Assets/linkedin_icon.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faFacebook, faTwitter, faInstagram, faLinkedIn } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 left-side">
                        <img src={footerLogo} />
                        <p className="mt-3 mb-3 p-2  ">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div>
                            <h6>Contact Us</h6>
                            <span>
                                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                                <p>+20 010 1952 2874</p>
                            </span>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h3>Quick Links</h3>
                        <ul className="ul-footer">
                            <li><a href="#/aaaa">About us</a></li>
                            <li><a href="#/aaaa">Services</a></li>
                            <li><a href="#/aaaa">Booking</a></li>
                            <li><a href="#/aaaa">Faq's</a></li>
                            <li><a href="#/aaaa">Blogs</a></li>
                            <li><a href="#/aaaa">Our team</a></li>

                        </ul>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h3>Our Service</h3>
                        <ul className="ul-footer">
                            <li><a href="#/aaaa">dental care</a></li>
                            <li><a href="#/aaaa">cardiac clinic</a></li>
                            <li><a href="#/aaaa">massegetherapy</a></li>
                            <li><a href="#/aaaa">cardiology</a></li>
                            <li><a href="#/aaaa">precise diagnosis</a></li>
                            <li><a href="#/aaaa">abmbulance services</a></li>

                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h3>subcribe</h3>
                        <form className='Subscribe'>
                            <input type="email" placeholder="Email"></input>
                            <button>Subscribe Now</button>


                        </form>
                        <ul className="social">

                            <li><a href="#/social"><img src={facebook_icon} /></a></li>
                            <li><a href="#/social"><img src={twitter_icon} /></a></li>
                            <li><a href="#/social"><img src={insta_icon} /></a></li>
                            <li><a href="#/social"><img src={linkedin_icon} /></a></li>

                            {/* <li><a href="#/social"><FontAwesomeIcon icon={faTwitter} style={{ color: "#55acee", }} /></a></li> */}
                            {/* <li><a href="#/social"><FontAwesomeIcon icon={faInstagram} style={{ color: "#3f729b", }} /></a></li> */}
                            {/* <li><a href="#/social"><FontAwesomeIcon icon={faLinkedIn} style={{ color: "#0077b5", }} /></a></li> */}

                        </ul>

                    </div>
                </div>
                <hr className="mt-2 mb-2"></hr>
                <div className="auther">

                    <span>Copyright © 2023 Developed by <span><a href="https://www.linkedin.com/in/mostafa-emam-53m/" target="_blank">mostafa emam</a></span></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;