import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./Projects.css";
import ProjectModal from "../modules/ProjectModal";
import pixonaryDark from "../../../src/pixonaryDark.PNG";
import pixonaryLight from "../../../src/pixonaryLight.PNG";
import roboarm from "../../../src/roboarm.PNG";
import ccc from "../../../src/ccc.PNG";
import newRobotArm from "../../../src/newRobotArm.PNG";
import modeling from "../../../src/modeling.PNG";
import promys from "../../../src/promys.PNG";
import ScriptTag from 'react-script-tag';

function Projects() {
    const [modalShow, setModalShow] = React.useState("");
    const [image, setImage] = React.useState("");
    const [year, setYear] = React.useState("");
    const [body, setBody] = React.useState("");
    const [used, setUsed] = React.useState("");
    
        return (
            <>
            <ProjectModal
            show={modalShow.length !== 0}
            onHide={() => setModalShow("")}
            title={modalShow}
            year={year}
            body={body}
            used={used}
            image={image}
      />
            <div className="Projects-page">
                <div className="Projects-title1">
                        projects
                    </div> 
                    <Carousel>
                <Carousel.Item interval={1000}><div className="Projects-skill"> reactjs </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> python </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> javascript </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> css </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> html </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> html5 canvas </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> LaTeX </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> mongoDB </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> mathletsjs </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> bootstrap </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> materialui </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> threejs </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> sagemath </div></Carousel.Item>
                <Carousel.Item interval={1000}><div className="Projects-skill"> express </div></Carousel.Item>
                </Carousel>
                    <div className="Projects-projects">
                        <button className="Projects-card" 
                        onClick={()=> {
                            setModalShow("pixonary");
                            setYear("2021")
                            setBody("a collaborative drawing game without competitive pressure. find a group of friends of any artistic ability and make some pixel art together! co-created with lucy zhang '21.");
                            setUsed("reactjs + google oauth + express + socketio + materialui + mongodb + css")
                            setImage("pixonaryLight")
                            }}>
                            <img src={pixonaryLight} alt="pixonary" className="Projects-image" width="300px" height="300px"></img>
                            <div className="Projects-overlay">
                                <div className="Projects-title">pixonary</div>
                            </div>
                        </button>
                        
                        <button className="Projects-card" onClick={()=> {
                            setModalShow("robot arm: canvas");
                            setYear("2020")
                            setBody("first version of js applet for visualizing a parametric equation and its linear approximation.");
                            setUsed("html canvas + css")
                            setImage("roboarm")
                            }}>
                            <img src={roboarm} alt="roboArm" className="Projects-image" width="300px" height="300px"></img>
                            <div className="Projects-overlay">
                                <div className="Projects-title">robot arm: canvas</div>
                            </div>
                        </button>
                        <button className="Projects-card" onClick={()=> {
                            setModalShow("robot arm: mathlets");
                            setYear("2020")
                            setBody("second version of js applet for visualizing a parametric equation and its linear approximation.");
                            setUsed("mit mathlets.js + html + css")
                            setImage("newRobotArm")
                            }}>
                            <img src={newRobotArm} alt="newRobotArm" className="Projects-image" width="300px" height="300px"></img>
                            <div className="Projects-overlay">
                                <div className="Projects-title">robot arm: mathlets</div>
                            </div>
                        </button>
                        <button className="Projects-card" onClick={()=> {
                            setModalShow("math modeling");
                            setYear("2020")
                            setBody("3rd place team in National Mathworks Math Modeling Challenge. modeled the transition from diesel to electric trucking with the Lotka-Volterra approach. wrote a final paper that was presented on in a video.");
                            setUsed("excel + matlab + latex")
                            setImage("modeling")
                            }}>
                            <img src={modeling} alt="modeling" className="Projects-image" width="300px" height="300px"></img>
                            <div className="Projects-overlay">
                                <div className="Projects-title">math modeling</div>
                            </div>
                        </button>
                        <button className="Projects-card" onClick={()=> {
                            setModalShow("PROMYS math research");
                            setYear("2019")
                            setBody("worked in group of 4 at PROMYS to create conjectures about the fibonacci numbers and build their proofs without reference to external resources");
                            setUsed("latex")
                            setImage("promys")
                            }}>
                            <img src={promys} alt="promys" className="Projects-image" width="300px" height="300px"></img>
                            <div className="Projects-overlay">
                                <div className="Projects-title">PROMYS math research</div>
                            </div>
                        </button>
                        <button className="Projects-card" onClick={()=> {
                            setModalShow("chinese culture connection");
                            setYear("2020")
                            setBody("worked in group of 5 to create a website for a nonprofit organization. mainly worked on frontend development.");
                            setUsed("html + css")
                            setImage("ccc")
                            }}>
                            <img src={ccc} alt="ccc" className="Projects-image" width="300px" height="300px"></img>
                            <div className="Projects-overlay">
                                <div className="Projects-title">chinese culture connection</div>
                            </div>
                        </button>
                    </div>
                {/* <div className="Projects-titleRow">
                    <button className="Projects-title1">
                        projects
                    </button> */}
                    {/* <hr className="Projects-border"></hr> */}
                   {/*  <button className="Projects-title2">
                        sketches
                    </button>
                </div>
                <div className="Projects-examples u-flex">
                    <div className="Projects-projects">
                    </div>
                    <div className="Projects-sketches">
                        
                    </div>
                </div> */}
                <div className="break"></div>
            </div>
</>
        );
}

export default Projects;