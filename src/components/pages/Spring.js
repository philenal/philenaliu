import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from 'react-spring'
import Projects from "./Projects.js"
import Sketches from "./Sketches.js"
import Carousel from 'react-bootstrap/Carousel'
import "./Spring.css"
export default function Spring(props) {
    /* const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  }) */
    return(
        <>
        <Carousel
          interval={null}
          indicators={false}
          nextIcon={<span aria-hidden="true" ></span>}
         /*  nextLabel={activeIndex} */>
            
          <Carousel.Item>
            <Projects/>
          </Carousel.Item>
          <Carousel.Item>
            <Sketches/>
          </Carousel.Item>
        </Carousel>
        {/* <div className="Spring-title2" onClick={() => set(state => !state)}>{flipped==false ? "sketches" : "projects"}</div>
      <a.div class="c back" style={{ display: flipped ? "none": "block", opacity: opacity.interpolate(o => 1 - o), transform }}><Projects/></a.div>
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}><Sketches/></a.div> */}
    </>
    )
};
