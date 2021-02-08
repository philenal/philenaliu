import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
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

export default function ProjectModal(props) {
  let image;
  if (props.image =="eggberry") {
    image = eggberry;
  } else if (props.image=="badminton") {
    image=badminton;
  } else if (props.image=="slides") {
    image=slides;
  }else if (props.image=="girl") {
    image=girl;
  } else if (props.image=="woman") {
    image=woman;
  } else if (props.image=="anothergirl") {
    image=anothergirl;
  } else if (props.image=="baozi") {
    image=baozi;
  } else if (props.image=="jongsuk") {
    image=jongsuk;
  } else if (props.image=="me") {
    image=me;
  } else if (props.image=="coffee") {
    image=coffee;
  } else if (props.image=="flash") {
    image=flash;
  } else if (props.image=="prince") {
    image=prince;
  }else if (props.image=="cake") {
    image=cake;
  }else if (props.image=="me2") {
    image=me2;
  }else if (props.image=="oddgirl") {
    image=oddgirl;
  }else if (props.image=="ball") {
    image=ball;
  }else if (props.image=="indonesia") {
    image=indonesia;
  } else if (props.image=="bird") {
    image=bird;
  }else if (props.image=="zombie") {
    image=zombie;
  } else if (props.image=="blueming") {
    image=blueming;
  } else if (props.image=="braid") {
    image=braid;
  } else if (props.image=="cactus") {
    image=cactus;
  } else if (props.image=="room") {
    image=room;
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
          </div>
          <div className="ProjectModal-image">
            <img src={image} alt={props.image}></img>
          </div>
        </div>
        
      </Modal>
    );
  }
  