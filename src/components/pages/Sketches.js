import React, { useState, useEffect } from "react";
import "./Sketches.css";
import SketchesModal from "../modules/SketchesModal";
import me2 from "../../../src/art/me2.JPG";
import oddgirl from "../../../src/art/oddgirl.JPG";
import prince from "../../../src/art/prince.png";
import room from "../../../src/art/room.jpg";
import slides from "../../../src/art/slides.JPG";
import woman from "../../../src/art/woman.PNG";
import anothergirl from "../../../src/art/anothergirl.gif";
import zombie from "../../../src/art/zombie.jpg";
import ball from "../../../src/art/ball.jpg";
import me from "../../../src/art/me.JPG";
import baozi from "../../../src/art/baozi.PNG";
import bird from "../../../src/art/bird.jpg";
import blueming from "../../../src/art/blueming.jpg";
import braid from "../../../src/art/braid.jpg";
import cactus from "../../../src/art/cactus.jpg";
import cake from "../../../src/art/cake.jpg";
import coffee from "../../../src/art/coffee.png";
import eggberry from "../../../src/art/eggberry.GIF";
import flash from "../../../src/art/flash.JPG";
import girl from "../../../src/art/girl.gif";
import indonesia from "../../../src/art/indonesia.jpg";
import jongsuk from "../../../src/art/jongsuk.JPG";
import badminton from "../../../src/art/badminton.GIF";
import Typewriter from 'typewriter-effect';

function Sketches() {
    const [image, setImage] = React.useState("");
    const skills = ["procreate", "traditional", "animation", "photoshop"]
        return (
            <>
            <SketchesModal
            show={image.length !== 0}
            onHide={() => setImage("")}
            image={image}
            />
            <div className="u-flex">
            {/* <div className="Sketches-click">
                click to see
                <div className="Sketches-projects">projects</div>
            </div> */}
            
            <div className="Sketches-page">
            <div className="space"></div>
               <div className="Sketches-title1">
                        sketches
                    </div> 
                    <div className="Sketches-skills">
                    <Typewriter
                    onInit={(typewriter) => {
                        for (let i = 0; i < skills.length-1; i ++){
                            typewriter.typeString(skills[i])
                            .pauseFor(500)
                            .deleteAll()
                        }
                        typewriter.typeString(skills[skills.length-1])
                        .pauseFor(2500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}
                    options={{
                        wrapperClassName: "Sketches-skill",
                        cursorClassName: "Sketches-skill",
                        autoStart: true,
                        loop: true
                    }}
                    /> 
                    </div>
                    <div className="Sketches-sketches">
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("eggberry")
                            }}>
                            <img src={eggberry} alt="eggberry" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">eggberry</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("badminton")
                            }}>
                            <img src={badminton} alt="badminton" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">badminton</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("slides")
                            }}>
                            <img src={slides} alt="slides" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">slides</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("girl")
                            }}>
                            <img src={girl} alt="girl" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">girl</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("woman")
                            }}>
                            <img src={woman} alt="woman" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">woman</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("anothergirl")
                            }}>
                            <img src={anothergirl} alt="anothergirl" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">anothergirl</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("baozi")
                            }}>
                            <img src={baozi} alt="baozi" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">baozi</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("jongsuk")
                            }}>
                            <img src={jongsuk} alt="jongsuk" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">jongsuk</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("me")
                            }}>
                            <img src={me} alt="me" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">me</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("coffee")
                            }}>
                            <img src={coffee} alt="coffee" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">coffee</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("flash")
                            }}>
                            <img src={flash} alt="flash" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">flash</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("prince")
                            }}>
                            <img src={prince} alt="prince" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">prince</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("cake")
                            }}>
                            <img src={cake} alt="cake" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">cake</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("me2")
                            }}>
                            <img src={me2} alt="me2" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">me2</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("oddgirl")
                            }}>
                            <img src={oddgirl} alt="oddgirl" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">oddgirl</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("ball")
                            }}>
                            <img src={ball} alt="ball" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">ball</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("indonesia")
                            }}>
                            <img src={indonesia} alt="indonesia" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">indonesia</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("bird")
                            }}>
                            <img src={bird} alt="bird" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">bird</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("zombie")
                            }}>
                            <img src={zombie} alt="zombie" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">zombie</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("blueming")
                            }}>
                            <img src={blueming} alt="blueming" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">blueming</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("braid")
                            }}>
                            <img src={braid} alt="braid" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">braid</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("cactus")
                            }}>
                            <img src={cactus} alt="cactus" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">cactus</div>
                            </div>
                        </button>
                        <button className="Sketches-card" 
                        onClick={()=> {
                            setImage("room")
                            }}>
                            <img src={room} alt="room" className="Sketches-image"></img>
                            <div className="Sketches-overlay">
                                <div className="Sketches-title">room</div>
                            </div>
                        </button>
                        
                    </div>
                
                <div className="break"></div>
            </div>
            <div className="Sketches-click">
            <div className="space"></div>
                click to see
                <div className="Sketches-projects">projects</div>
            </div>
            </div>
</>     
        );
}

export default Sketches;