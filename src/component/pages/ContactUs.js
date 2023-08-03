import React from "react";
import Panner from "./panner";
import './CotactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAslInterpreting, faGlobe, faLocation, faLocationPin, faMapLocationDot, faMedal, faMessage, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import twitter from '../../Assets/twitter_icon.png';
import facebook from '../../Assets/facebook_icon.png';
import linkdin from '../../Assets/linkedin_icon.png';
import insta from '../../Assets/insta-icon.png';




// props contain status of data of liks and name of page 

const ContactUs = (props) => {
    return (
        <div>
            <Panner URL={props.ContactUs.link} nameOfPage={props.ContactUs.name} />
            <div className="contactUs pt-5 pb-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-12 col-md-6 col-lg-6  pe-1 pt-2 ">
                            <form className="ms-1">
                                <div >

                                    <div className="mt-4 ">
                                        <input type="text" name="your_name" placeholder="Your Name" className="form-control"></input>
                                    </div>
                                    <div className="mt-4 ">
                                        <input type="email" name="email" placeholder="Email" className="form-control"></input>
                                    </div>
                                    <div className="mt-4 ">
                                        <input type="number" name="phone" placeholder="phone number" className="form-control"></input>

                                    </div>
                                    <div className="mt-4 ">
                                        <select className="form-control">
                                            <option >select departement
                                            </option>
                                            <option value='1'>one</option>
                                            <option value='2'> two </option>
                                            <option value='3'>three</option>

                                        </select>
                                    </div>
                                    <div className="mt-4 ">
                                        <textarea name="massage" rows="4" cols="50" placeholder="write your massage" className="form-control">

                                        </textarea>
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn"> submit</button>
                                    </div>


                                </div>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                            <div className="layer pt-4 pb-4 ps-5 pe-5 ">
                                <div className="text mt-4">
                                    <h5 className="pt-4 fw-bold fs-3" >Contact Us For Any Informations</h5>
                                    <div className="pt-1">
                                        <h4>
                                            <FontAwesomeIcon icon={faMapLocationDot} />
                                            Location</h4>
                                        <hr />
                                        <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    </div>
                                    <div className="pt-1">
                                        <h4>
                                            <FontAwesomeIcon icon={faMessage} />
                                            Email & phone</h4>
                                        <hr />
                                        <p >info@yourdomain.com</p>
                                        <p>+201019522874</p>

                                    </div>

                                    <div className="pt-1 social-icons">
                                        <h4>
                                            <FontAwesomeIcon icon={faGlobe} />

                                            Follow Us</h4>
                                        <hr />
                                        <div>
                                            <span>
                                                <a href="#">
                                                    <img src={facebook} />
                                                </a>


                                            </span>
                                            <span>
                                                <a href="#">
                                                    <img src={twitter} />
                                                </a>



                                            </span>
                                            <span>
                                                <a href="#">
                                                    <img src={insta} />
                                                </a>



                                            </span>
                                            <span>
                                                <a href="#">
                                                    <img src={linkdin} />
                                                </a>



                                            </span>

                                        </div>


                                    </div>

                                </div>


                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div className="section pt-5 pb-5 mt-5 ">
                <div className="container">
                    <div className="row   " >
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                            <div className="box box1">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                <div className="text">
                                    <h6 className="fs-5 text-capitalize">
                                        contact number
                                    </h6>
                                    <p>+20 01234567890</p>
                                    <p>+20 0987654321</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                            <div className="box box2">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faMessage} />
                                </span>
                                <div className="text">
                                    <h6 className="fs-5 text-capitalize">
                                        Email Address
                                    </h6>
                                    <p>info@yourdomain.com</p>
                                    <p>example@support.com</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                            <div className="box box3">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faLocationPin} />
                                </span>
                                <div className="text">
                                    <h6 className="fs-5 text-capitalize">
                                        Address
                                    </h6>
                                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactUs;
