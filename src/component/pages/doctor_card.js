// thise is card for identify doctors names and specializations

import React, { Component } from "react";
import './doctor_card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faBrush, faHome } from "@fortawesome/free-solid-svg-icons";


const DoctorCard = (props) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
            <div className="main-box ">
                <div className="container d-flex flex-column">
                    <div className="top-section ">
                        <div className="blue-circle">
                            <div className="orange-circle">
                                <div className="cover">

                                    <img src={props.image} className="img-fluid" alt="doctor image" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-section m-1 ">
                        <h4 className="text-center mt-2 mb-1 fs-3">{props.doctor_name}</h4>
                        <p className="text-center mt-2 fs-5">{props.Specialization}</p>
                        <div className="icon mb-4 d-flex flex-row gap-1 justify-content-center flex-wrap">
                            <span className="p-2"><a href="#"><FontAwesomeIcon icon={faBaby} /></a></span>
                            <span className="p-2"><a href="#"><FontAwesomeIcon icon={faHome} /></a></span>
                            <span className="p-2"><a href="#"><FontAwesomeIcon icon={faBrush} /></a></span>
                        </div>
                    </div>

                </div>



            </div>

        </div>

    )
}

export default DoctorCard;