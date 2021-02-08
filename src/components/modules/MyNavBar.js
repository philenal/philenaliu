import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MyNavBar.css";
/* import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import About from "../pages/About";
  import Resume from "../pages/Resume";
  import Sketches from "../pages/Sketches.js";
  import Projects from "../pages/Projects"; */

class MyNavBar extends Component {
    render() {
        return (
            <div className="MyNavBar-bottomMargin">
                <Navbar collapseOnSelect expand="lg" className="MyNavBar-background" fixed="top">
                    <Navbar.Brand href="#home" className="MyNavBar-brand">philena liu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link className="MyNavBar-links" href="#about">about</Nav.Link>
                        <Nav.Link className="MyNavBar-links" href="#pricing">resume</Nav.Link>
                        <Nav.Link className="MyNavBar-links" href="#sketches">sketches</Nav.Link>
                        <Nav.Link className="MyNavBar-links" href="#projects">projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
               
           
        )
    }
}

export default MyNavBar
