import React from 'react'
import './AboutUs.css';
import photo1 from './../../Assets/about_image_1.jpg';
import photo2 from './../../Assets/about_image_2.jpg';
import photo3 from './../../Assets/about_image_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import im1 from '../../Assets/our_image_1.jpg';
import im2 from './../../Assets/our_image_2.jpg';
import im3 from './../../Assets/our_image_3.jpg';
import DoctorCard from "./doctor_card";
import trangle from "./../../Assets/image10.png";
import MoveUp from "../actions/MoveUp";
import MoveLeft from "../actions/MoveLeft";
import wave_action from './../../Assets/image15.png';
import img4 from './../../Assets/image4.png';
import img5 from './../../Assets/image5.png';
import img9 from './../../Assets/image9.png';
import Rotation from "../actions/Rotation";
import Testimonial from "../Testimonial";
function SectionsOfAboutUs() {
    return (
        <>
            <div className="aboutUs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="images">
                                <div className="box-img img-1"><img src={photo1} className="img-fluid"></img></div>
                                <div className="box-img img-2"><img src={photo2} className="img-fluid"></img></div>


                            </div>
                            <div className="images mt-3">
                                <div className="box-img img-3">
                                    <img src={photo3} className="img-fluid"></img>
                                </div>
                                <div className="box pt-5 pb-5 text-center box-img img-4 ">
                                    <p className="number pt-3">20</p>
                                    <p className="text p-3 mt-4 lh-lg">year experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="right-side mt-5">
                                <h4 className="text-capitalize fw-bold fs-5
                                mb-3  ">about Us</h4>
                                <div className="text  ">
                                    <h5 className="fs-2 text-capitalize fw-bolder ">The Great Place Of Medical Hospital Center</h5>
                                    <p className="mt-1 fs-6 fw-500 ">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className=" col-md-6 col-sm-12">
                                            <div className="box m-1 box-1  p-2">
                                                <div className="icon me-3 fs-3">  <FontAwesomeIcon icon={faAmbulance} /></div>
                                                <p className="text fs-5 ms-2 mt-auto mb-auto fw-600 p-2">Emergency Help</p>
                                            </div>



                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="box m-1 box-2  p-2">
                                                <div className="icon me-3 fs-3">  <FontAwesomeIcon icon={faAmbulance} /></div>
                                                <p className="text fs-5 ms-2 mt-auto mb-auto fw-600 p-2">Emergency Help</p>
                                            </div>
                                        </div>
                                        <div className=" col-md-6 col-sm-12">
                                            <div className="box m-1 box-3  p-2">
                                                <div className="icon me-3 fs-3">  <FontAwesomeIcon icon={faAmbulance} /></div>
                                                <p className="text fs-5 ms-2 mt-auto mb-auto fw-600 p-2">Emergency Help</p>
                                            </div>



                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="box m-1 box-4  p-2">
                                                <div className="icon me-3 fs-3">  <FontAwesomeIcon icon={faAmbulance} /></div>
                                                <p className="text fs-5 ms-2 mt-auto mb-auto fw-600 p-2">Emergency Help</p>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="btn mt-5"><a href="#"> Read More</a></button>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className=" section-numbers pt-5 pb-5 m-2 mb-2 mt-3">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="box-number ps-3 pt-3 pe-5 pb-1 mt-5 ms-4">
                                    <div className="number  ">
                                        120

                                    </div>
                                    <div className="text ">
                                        <h6 className="fs-4 mt-1">Years With You</h6>
                                        <p className=" fs-6">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="box-number ps-3 pt-3 pe-5 pb-1 mt-5 ms-4">
                                    <div className="number  ">
                                        400

                                    </div>
                                    <div className="text ">
                                        <h6 className="fs-4 mt-1">Award</h6>
                                        <p className=" fs-6">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="box-number ps-3 pt-3 pe-5 pb-1 mt-5 ms-4">
                                    <div className="number  ">
                                        250

                                    </div>
                                    <div className="text ">
                                        <h6 className="fs-4 mt-1">Doctors</h6>
                                        <p className=" fs-6">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="box-number ps-3 pt-3 pe-5 pb-1 mt-5 ms-4">
                                    <div className="number  ">
                                        800

                                    </div>
                                    <div className="text ">
                                        <h6 className="fs-4 mt-1">Satisfied Client</h6>
                                        <p className=" fs-6">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className=" section-Our-Doctor container mt-5 pt-4">
                    <div className="trangle-animation">
                        <MoveUp img={trangle} />

                    </div>
                    {/* <div className="circle-anmation">
                        <MoveUp img={img4} />
                    </div> */}
                    <div className="text text-center text-capitalize">
                        <h4 className="text-center  fs-5 ">our doctors</h4>
                        <p className="fs-1 fw-bold pt-2 mt-1">Meet Best Doctors</p>

                    </div>
                    <div className="wave-action">
                        <MoveLeft img={wave_action} />
                    </div>
                    {/* <div className="left-box-animation">
                        <MoveLeft img={img5} />
                    </div> */}
                    <div className="row">




                        {/* start main box */}
                        <DoctorCard image={im1} doctor_name={"Dr. Addition Smith"} Specialization={"Dentist"} />
                        {/* end main box  */}
                        {/* start main box */}
                        <DoctorCard image={im2} doctor_name={"Dr. Mahfuz Riad"} Specialization={"Chiropractor"} />

                        {/* end main box  */}
                        {/* start main box */}
                        <DoctorCard image={im3} doctor_name={"Dr. David Benjamin"} Specialization={"Cardiologist"} />

                        {/* end main box  */}
                        <Rotation img={img9} />

                    </div>
                </div>
                <Testimonial />
            </div>


        </>
    )
}

export default SectionsOfAboutUs