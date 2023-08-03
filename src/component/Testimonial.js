import React from "react";
import "./Testimonial.css";
import img16 from './../Assets/image16.png';
import img1 from './../Assets/our_image_1.jpg';
import img2 from './../Assets/our_image_2.jpg';
import img3 from './../Assets/our_image_3.jpg';
import img4 from './../Assets/our_image_4.jpg';
import img5 from './../Assets/our_image_5.jpg';
import img6 from './../Assets/our_image_6.jpg';
import Carousel from "./CarouselText";



const Testimonial = () => {
    return (
        <div className="testimonial pt-5 mt-5">
            <div className="container">
                <div className="text text-center text-capitalize">
                    <h4 className="text-center  fs-5 ">Testimonial</h4>
                    <p className="fs-1 fw-bold pt-2 mt-1 ">See What Are The Patients Saying About us
                    </p>

                </div>
                <div className="two-box">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 pt-3 mt-3 pe-3">
                            <div className="big-image ">
                                <img src={img16} className="img-fluid" alt="main image " />

                                <img src={img1} className="circle-image  img-fluid circle-image1" />
                                <img src={img2} className="circle-image  img-fluid circle-image2" />
                                <img src={img3} className="circle-image  img-fluid circle-image3" />
                                <img src={img4} className="circle-image  img-fluid circle-image4" />
                                <img src={img5} className="circle-image  img-fluid circle-image5" />
                                <img src={img6} className="circle-image  img-fluid circle-image6" />



                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 pt-3 mt-2">
                            <Carousel />


                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}
export default Testimonial;