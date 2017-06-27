import React, { Component } from 'react';
import logo from '../images/world.png';
import  '../css/Header.css';



class Header extends Component {
  render() {
    return (
        <nav  className="navbar navbar-default" >
          <div className="container">
            <div className="navbar-header" >
              <a href="#" className="pull-left visible-md visible-lg">
                <div id="logo-img"></div>
              </a>

              <div className="navbar-brand">
                 <a href="#"><h1>ELFAY TRAVEL AGENT</h1></a>
             
              </div>

              <button id="navbarToggle" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            
            <div id="collapsable-nav" className="collapse navbar-collapse">
               <ul id="nav-list" className="nav navbar-nav navbar-right">
                    <li id="navHomeButton" className=" active">
                      <a href="index.html">
                        Home</a>
                    </li>
                    <li id="navMenuButton">
                      <a href="destination.html">
                      Destination</a>
                    </li>
                    <li>
                      <a href="aboutUs.html">
                        About Us</a>
                    </li>
                    <li>
                      <a href="contactUs.html">
                       Contact Us</a>
                    </li>
                    <li>
                      <a href="testimontial.html">
                      Testimontials</a>
                    </li>
                     <li>
                      <a href="#">
                        Deal Of The Week</a>
                    </li>
                    
              </ul>
          </div>
       </div>
    </nav>

      



    );
  }
}



export default Header;
