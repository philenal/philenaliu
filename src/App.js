import React, { Component } from 'react';
import './utilities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import MyNavBar from "./components/modules/MyNavBar.js";
import Projects from './components/pages/Projects';
import Sketches from './components/pages/Sketches';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
        <div id="about">
          <About/>
        </div>
        <div id="home">
          <Home/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div id="sketches">
          <Sketches/>
        </div>
      </div>
    );
  }
  
}

export default App;
