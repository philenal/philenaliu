import React, { Component } from "react";
import "./About.css";
import { Parallax, ParallaxLayer } from 'react-spring/addons'
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
            <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
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