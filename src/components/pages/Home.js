import React, { Component } from "react";
import "./Home.css";
import ScrollAnimation from 'react-animate-on-scroll';

import typing from "../../../src/newTyping.gif";
// once hi is out of view, fade in for philena liu

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didScroll: false,
            onElement: false,
            StyleSheet: {},
        }
    }
    handleScroll = () => {
        this.setState({
            didScroll: true
        })
        console.log("i scrolled")
    }
    afterAnimatedIn = (v) => {
        if (v.onScreen){
            this.setState({
                onElement: true,
            })
        }
        console.log("i'm animated in")
}
    render() {
        return (
                <div onScroll={this.handleScroll} className="Home-page">
                    <div className="space"></div>
                    <div className="Home-container">
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="Home-title Home-padding">
                            hi,
                            </div>
                        </ScrollAnimation>
                        <div styles={this.state.didScroll && this.state.onElement ? {animationName: "example", animationDuration: "4s"}: {}}
                        className="Home-background Home-fixed">
                        <ScrollAnimation 
                                    animateIn="fadeIn" 
                                    onScroll={this.handleScroll}
                                    afterAnimatedIn={ this.afterAnimatedIn} 
                                    delay="400">
                            <div className="Home-padding Home-column title">
                                <div className="Home-name">
                                    i'm philena liu 
                                </div>
                                <div className="Home-bioContainer">
                                    <span className="Home-border"></span>
                                    <div className="Home-bio">
                                        <div>math + cs</div>
                                        <div>mit '24</div>
                                        <div>__________________</div>   
                                        <div>philena@mit.edu</div>  
                                    </div>
                                </div>
                                
                            </div>
                        </ScrollAnimation>
                            <div className="Home-padding Home-keyboard">
                                <img src={typing} alt="keyboard" className="Home-typing"></img>
                            </div>
                        </div>
                            
                        <div className="break Home-background"></div>
                    </div>
                </div>
           

        );
    }
}

export default Home;