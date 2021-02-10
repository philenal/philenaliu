import React from "react";
import Modal from 'react-bootstrap/Modal';
import pixonaryLight from "../../../src/pixonaryLight.PNG";
import roboarm from "../../../src/roboarm.PNG";
import ccc from "../../../src/ccc.PNG";
import newRobotArm from "../../../src/newRobotArm.PNG";
import modeling from "../../../src/modeling.PNG";
import promys from "../../../src/promys.PNG";
import promysPdf from "../links/Fibonacci_Numbers_Exploration_Lab (1).pdf";

export default function ProjectModal(props) {
  let link;
  let video;
  let image;
  let linkText;
  if (props.image =="pixonaryLight") {
    image = pixonaryLight;
    link="https://pixonary.herokuapp.com/"
    linkText="click to play the game!"
  } else if (props.image=="roboarm") {
   /*  link=canvasRobotArmLink; */
   link="arm.html";
    image=roboarm;
    linkText="click to try it out!"
  } else if (props.image=="newRobotArm") {
    image=newRobotArm
    link="#";
  } else if (props.image=="modeling") {
    image=modeling
    linkText="click to read our paper!"
    link = "https://m3challenge.siam.org/sites/default/files/uploads/M3%20THIRD%20PLACE_13202.pdf"
    video="https://www.youtube.com/embed/bUN2alQKAY0"
    
  } else if (props.image=="promys") {
    linkText="click to read our paper!"
    image=promys
    link=promysPdf
  } else if (props.image=="ccc") {
    image=ccc
    link="#"
  } else {
    image=""
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="ProjectModal-title" id="contained-modal-title-vcenter">
            {props.title}
          </div>
        </Modal.Header>
        <div className="ProjectModal-grid u-flex">
          <div className="ProjectModal-body">
            <h4><b>{props.year}</b></h4>
            <p>{props.body}</p>
            <p><b>{props.used}</b></p>
            {link == "#" ? <span></span>: <a className="link" href={link}>{linkText}</a>}
            
          </div>
          
          <div className="ProjectModal-image">
            <img src={image} alt={props.image}></img>
            {props.image=="modeling" ? <iframe 
            className="ProjectModal-video" 
            src="https://www.youtube.com/embed/bUN2alQKAY0" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>: <span></span>}
          </div>
        </div>
        
      </Modal>
    );
  }
  