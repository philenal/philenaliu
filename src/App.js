import React, { Component } from 'react';
import './utilities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
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
        <div id="about">
          <About/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
