import React, { Fragment } from "react";
import './Home.css'
import homeImg from '../../Assets/home1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import Testimonial from "../Testimonial";
import SectionsOfAboutUs from "./SectionsOfAboutUs";
import SectionsOfOurTeam from "./SectionsOfOurTeam";



const Home = () => {


    return (

        <>

            <section className="section1">


                <div className="container mt-5 ">
                    <div className="row me-3 ms-3">
                        <div className="col-md-8 col-lg-8 right_side">
                            <div className="pt-5 mt-5 main_text">
                                <h5 className="ps-3">We Provide All Health Care Solution</h5>
                                <h2 className=" ">Protect Your Health And Take Care To Of Your Health</h2>
                            </div>
                            <button className="btn mt-5"><a href="#"> Read More</a></button>


                        </div>
                        <div className="col-md-4 col-lg-4 left_side ">
                            <img src={homeImg} className="main_img" />
                            <FontAwesomeIcon icon={faHeartPulse} className="plus" />
                            <FontAwesomeIcon icon={faStethoscope} className="faStethoscope" />

                            <div className="box_shap">


                            </div>

                        </div>
                    </div>




                </div>
                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#F7F7FF" fill-opacity="1" d="M0,192L26.7,170.7C53.3,149,107,107,160,85.3C213.3,64,267,64,320,74.7C373.3,85,427,107,480,144C533.3,181,587,235,640,229.3C693.3,224,747,160,800,117.3C853.3,75,907,53,960,80C1013.3,107,1067,181,1120,213.3C1173.3,245,1227,235,1280,202.7C1333.3,171,1387,117,1413,90.7L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>



            </section>

            <SectionsOfAboutUs />
            <SectionsOfOurTeam />
        </>
    );
}

export default Home;