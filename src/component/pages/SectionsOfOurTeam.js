
import React from "react";
import './../pages/OurTeam.css';
import im1 from '../../Assets/our_image_1.jpg';

import im2 from './../../Assets/our_image_2.jpg';
import im3 from './../../Assets/our_image_3.jpg';
import im4 from './../../Assets/our_image_4.jpg';
import im5 from './../../Assets/our_image_5.jpg';
import im6 from './../../Assets/our_image_6.jpg';
import im1_motion from './../../Assets/image4.png';
import im2_motion from './../../Assets/image5.png';




import DoctorCard from "./doctor_card";
function SectionsOfOurTeam() {
    return (
        <>
            <div className="ourteam">
                <div className="container">
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
                        {/* start main box */}
                        <DoctorCard image={im4} doctor_name={"Dr. Addition Smith"} Specialization={"Dentist"} />

                        {/* end main box  */}
                        {/* start main box */}
                        <DoctorCard image={im5} doctor_name={"Dr. Mahfuz Riad"} Specialization={"Chiropractor"} />

                        {/* end main box  */}
                        {/* start main box */}
                        <DoctorCard image={im6} doctor_name={"Dr. David Benjamin"} Specialization={"Cardiologist"} />

                        {/* end main box  */}

                    </div>
                </div>
                <div className="right-shap"><img src={im2_motion} /></div>
                <div className="left-shap"><img src={im1_motion} /></div>
            </div>

        </>
    )
}

export default SectionsOfOurTeam