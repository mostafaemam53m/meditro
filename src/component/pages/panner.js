import React from "react";
import './panner.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faHome, faHouseMedicalFlag, faPlane, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
// import bg_pannger from '../../Assets/pannerbackground.jpg';
const Panner = (props) => {
    return (
        <div className="bg-panner pt-5 pb-5">

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 containerOicons" >
                        <FontAwesomeIcon className="iconOfPanner car1" icon={faAmbulance} />
                        <FontAwesomeIcon className="iconOfPanner car2" icon={faTruckMedical} />
                        <FontAwesomeIcon className="iconOfPanner hospital" icon={faHouseMedicalFlag} />
                        <FontAwesomeIcon className="iconOfPanner plane" icon={faPlane} rotation={180} />

                        <div className="panner mb-5 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="text-center  text-capitalize pt-5 pe-5 ps-5 pb-3">{props.nameOfPage}</h2>
                            <div className="Box  ps-4 pe-4 pt-2 pb-2 mt-1 mb-5 text-capitaliz fw-semibold" >
                                <Link to="/" ><FontAwesomeIcon icon={faHome} />Home </Link>
                                <Link to={props.URL}>{props.URL}</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>);
}

export default Panner;