import React, { useState, useEffect } from "react";
import "./About.css";
import ScrollAnimation from 'react-animate-on-scroll';
import key from "../../../src/key.png";
import badminton from "../../../src/badminton.gif";
/* class About extends Component {
    render() {
        return (
            <div className="About-page">
               heyo
               
            </div>

        );
    }
}
 */

export default function About(props) {
    return(
        <div className="About-page">
                <div className="About-filler fixed About-badminton">
                    <div className="About-title">
                        about
                        {/* <ScrollAnimation animateIn="fadeInDown" duration="4">
                            about 
                         </ScrollAnimation> */}
                    </div>
                    
                </div>
                <div className="About-blurb">
                    {/* <div className="About-square u-flexColumn">
                        <div className="About-header">
                            math + cs (18c), mit '24
                        </div>
                        <br/>
                        <div className="About-header">
                            hobbies:
                        </div>
                        <ul>
                            <li>drawing/animating/design</li>
                            <li>badminton</li>
                            <li>math</li>
                            <li>cs</li>
                            <li>kdramas/anime/marvel/cdramas</li>
                        </ul>
                    </div> */}
                   {/*  <img src={badminton} alt="badminton" className="About-badminton"></img> */}
                </div>

                
            </div>
    )
};

{/* <div className="About-filler-1 u-flex">
                        <ScrollAnimation animateIn="fadeInDown" delay="50">
                            <img src={key} alt="key" className="About-key About-1"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="300">
                            <img src={key} alt="key" className="About-key About-2"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="100">
                            <img src={key} alt="key" className="About-key About-3"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="100">
                            <img src={key} alt="key" className="About-key About-4"></img>
                        </ScrollAnimation>
                    </div>
                    <div className="About-filler-2 u-flex">
                        <ScrollAnimation animateIn="fadeInDown" delay="600">
                            <img src={key} alt="key" className="About-key About-5"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="1100">
                            <img src={key} alt="key" className="About-key About-6"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="200">
                            <img src={key} alt="key" className="About-key About-7"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="800">
                            <img src={key} alt="key" className="About-key About-8"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="400">
                            <img src={key} alt="key" className="About-key About-9"></img>
                        </ScrollAnimation>
                    </div>
                    <div className="About-filler-3 u-flex">
                        <ScrollAnimation animateIn="fadeInDown" delay="950">
                            <img src={key} alt="key" className="About-key About-1"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="1200">
                            <img src={key} alt="key" className="About-key About-2"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="400">
                            <img src={key} alt="key" className="About-key About-3"></img>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInDown" delay="1600">
                            <img src={key} alt="key" className="About-key About-4"></img>
                        </ScrollAnimation>
                    </div> */}