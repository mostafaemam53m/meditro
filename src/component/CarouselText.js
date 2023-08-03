import React, { useState } from "react";
import './CarouselText.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faPieChart, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Carousel() {
    const alldata = [{
        name: "Dr.Mostafa Emam",
        departement: "A",
        discription: "1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."
    }, {
        name: "Dr.ali Emam",
        departement: "B",
        discription: "222222Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."
    }, {
        name: "Dr.yaser gop",
        departement: "C",
        discription: "333333333333Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."

    }, {
        name: "Dr.mohamed Emam",
        departement: "d",
        discription: "44444444 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida."

    }];


    const [index, setIndex] = useState(0);
    const [gonext, setgotnext] = useState(false);
    const [goback, setgoback] = useState(true);


    const next = () => {
        setIndex(index + 1);
        // console.log(index);
        setgotnext(true);


        if (index >= alldata.length - 1) {
            setIndex((alldata.length) - (1));
            // console.log("the index from if " + index);
            // for animation

        }

        return index;
    }
    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
            // for animation
            setgoback(true);
        } else {
            setIndex((alldata.length) - (alldata.length));
            // console.log("from else of prev " + index);
            setgoback(false);

        }

    }
    let freshdata = alldata[index];




    return (
        <div>
            <div className="main-carousel pt-4 mt-4 ">
                {/* start of text box1 */}
                <div className={gonext ? "TextBox   pt-5 pe-5 ps-5 pb-5 next" : "TextBox   pt-5 pe-5 ps-5 pb-5"} >
                    <div className="quote-left">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className="quote-right">
                        <FontAwesomeIcon icon={faQuoteRight} />

                    </div>

                    <div className="TopText">
                        <p>{freshdata.discription}</p>
                    </div>
                    <div className="BottomText text-left text-uppercase mt-2">
                        <h5 className="fs-4">{freshdata.name}</h5>
                        <p>{freshdata.departement}</p>
                    </div>
                </div>
                {/* end of text box 1*/}


                <button className="left-button" onClick={() => prev()} ><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button className="left-right" onClick={() => next()}><FontAwesomeIcon icon={faArrowRight} /></button>


            </div>
            {/* new carousel */}

            {/* end carousel */}
        </div>
    )


}
export default Carousel;