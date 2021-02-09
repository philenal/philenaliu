import React, { Component } from 'react';
import './utilities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Resume from "./components/pages/Resume.js";
import Sketches from "./components/pages/Sketches.js";
import Projects from "./components/pages/Projects.js";
import Spring from "./components/pages/Spring.js";
import MyNavBar from "./components/modules/MyNavBar.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
        <div id="home">
          <Home/>
        </div>
        <div id="projects">
          <Spring/>
        </div>
        {/* <div id="projects">
          <Projects/>
        </div>
        <div id="sketches">
          <Sketches/>
        </div> */}
        <div id="about">
          <About/>
        </div>
        
        <div id="resume">
          <Resume/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
