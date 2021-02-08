import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import pixonaryDark from "../../../src/pixonaryDark.PNG";
import pixonaryLight from "../../../src/pixonaryLight.PNG";
import roboarm from "../../../src/roboarm.PNG";
import newRobotArm from "../../../src/newRobotArm.PNG";
import modeling from "../../../src/modeling.PNG";
import promys from "../../../src/promys.PNG";
//TODO: look into symlink https://dev.to/unorthodev/utilizing-symbolic-links-in-your-node-js-projects-17bo
//to fix links

export default function ProjectModal(props) {
  let link;
  let video;
  let image;
  if (props.image =="pixonaryLight") {
    image = pixonaryLight;
    link="https://pixonary.herokuapp.com/"
  } else if (props.image=="roboarm") {
    link="../links/Robot Arm.html";
    image=roboarm;
  } else if (props.image=="newRobotArm") {
    image=newRobotArm
    link="../../../../../../MIT 2020-2021 Fall/UTOP/mathlets/mathlets/src/robotarm.html"
  } else if (props.image=="modeling") {
    image=modeling
    link = "https://m3challenge.siam.org/sites/default/files/uploads/M3%20THIRD%20PLACE_13202.pdf"
    video="https://www.youtube.com/embed/bUN2alQKAY0"
    
  } else if (props.image=="promys") {
    image=promys
    link="../links/Fibonacci_Numbers_Exploration_Lab (1).pdf"
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
            {props.image=="modeling" ? <a  href={video}>click to view</a>: <span></span>}
            <a  href={link}>click to view</a>
          </div>
          
          <div className="ProjectModal-image">
            <img src={image} alt={props.image}></img>
          </div>
        </div>
        
      </Modal>
    );
  }
  