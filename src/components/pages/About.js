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
        <Parallax ref={ref => (this.parallax = ref)} pages={10} style={{background: 'var(--baby-powder)'}}>
        {/* me */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(3)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100vw'}}>
          <div className="About-hobbies">me</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(3)}>
          <div className="About-blurb">
              an mit'24 student majoring in math with computer science (18c). currently involved in borderline (pub chair) and hmmt (marketing staff). interested in webdev, art, badminton, and <span className="About-tiny">binge watching kdramas/anime/cdramas/webtoons/theflash, listening to kpop, whistling, and eating.</span></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.3}
          onClick={() => this.parallax.scrollTo(2)}>
              <img src="PL.jpg" style={{ display: "block", marginLeft: "40%", width: '40%', opacity: 0.2}} />
        </ParallaxLayer>

        {/* badminton */}
        <ParallaxLayer
          offset={3}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100vw'}}>
          <div className="About-hobbies">badminton</div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.3}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'inline-block', width: '100vw'}}>
          <img id="About-bigPlayer" src="badminton.gif" style={{ width: '80%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={4.6}
          speed={0.3}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'inline-block', width: '100vw', marginLeft: '50%'}}>
          <img src="badminton.gif" style={{ width: '40%' }} />
        </ParallaxLayer>

        {/* art */}
        <ParallaxLayer
          offset={6.3}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100vw'}}>
          <div className="About-hobbies">art</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.2}
          speed={0.9}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'inline-block', width: '100vw'}}>
          <img src="Cloud-Swan.png" style={{ width: '50%', marginLeft:"50%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.3}
          speed={0.8}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'inline-block', width: '100vw'}}>
          <img src="./art/eggberry.GIF" style={{ display: "inline-block", marginLeft: "20%", width: '20%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.5}
          speed={0.6}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'inline-block', width: '100vw'}}>
          <img src="./art/girl.gif" style={{  display: "inline-block", marginLeft: "30%", width: '20%' }} />
        </ParallaxLayer>
          <ParallaxLayer
          offset={7.8}
          speed={0.4}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'inline-block', width: '100vw'}}>
          <img src="./art/baozi.PNG" style={{ display: "inline-block", marginLeft: "40%", width: '20%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.9}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'inline-block', width: '100vw'}}>
          <img src="./art/slides.JPG" style={{ display: "inline-block", marginLeft: "50%", width: '20%' }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          speed={0.2}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '100vw', backgroundColor: 'var(--silver-pink)'}}>
              <div className="u-flexColumn About-full">
            <div className="About-contact">contact</div>
            <div className="u-flex About-links">
                <a className="About-link" href="https://www.linkedin.com/in/philena-liu/">linkedin</a>
                <a className="About-link" href="https://www.facebook.com/philenaliu">facebook</a>
                <a className="About-link" href="https://www.instagram.com/liup1134/">insta</a>
              </div>
              </div>
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={9.4}
          speed={0.1}>
              
        </ParallaxLayer> */}
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