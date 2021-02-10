import React, { Component } from "react";
import "./About.css";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { useSpring, animated as a } from 'react-spring'
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

class About extends Component {
    render() {
        return(
            <>
        <div className="About-title">
            about
        </div>
        <Parallax ref={ref => (this.parallax = ref)} pages={3} style={{background: 'var(--baby-powder)'}}>
        <ParallaxLayer
          offset={.7}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="badminton.gif" style={{ width: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="About-hobbies">badminton</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
          <img src="badminton.gif" style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={.7}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="badminton.gif" style={{ width: '80%' }} />
        </ParallaxLayer>
      </Parallax>
      </>
    )
  }
}

export default About;

{/* <div className="About-page">
<div className="About-filler fixed About-badminton">
    <div className="About-title">
        about
    </div>
    
</div>
<div className="About-blurb">
    
</div>


</div>
)
}

}; */}
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