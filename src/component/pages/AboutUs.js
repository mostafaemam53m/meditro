import React from "react";
import Panner from "./panner";
import './AboutUs.css';
// import photo1 from './../../Assets/about_image_1.jpg';
// import photo2 from './../../Assets/about_image_2.jpg';
// import photo3 from './../../Assets/about_image_3.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
// import im1 from '../../Assets/our_image_1.jpg';
// import im2 from './../../Assets/our_image_2.jpg';
// import im3 from './../../Assets/our_image_3.jpg';
// import DoctorCard from "./doctor_card";
// import trangle from "./../../Assets/image10.png";
// import MoveUp from "../actions/MoveUp";
// import MoveLeft from "../actions/MoveLeft";
// import wave_action from './../../Assets/image15.png';
// import img4 from './../../Assets/image4.png';
// import img5 from './../../Assets/image5.png';
// import img9 from './../../Assets/image9.png';
// import Rotation from "../actions/Rotation";
// import Testimonial from "../Testimonial";
import SectionsOfAboutUs from "./SectionsOfAboutUs";




let About = (props) => {
    return (
        <div >

            <Panner URL={props.About.link} nameOfPage={props.About.name} />
            <SectionsOfAboutUs />

        </div>)
}

export default About;