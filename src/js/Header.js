import React, { Component } from 'react';

import logo from '../images/world.png';
import  '../css/App.css';



class Header extends Component {
  render() {
    return (

      <div>
         <nav id="header-nav" class="navbar navbar-default" >
          <div class="container">
            <div class="navbar-header" >
              <a href="#" class="pull-left visible-md visible-lg">
                <div id="logo-img"></div>
              </a>

              <div class="navbar-brand">
                 <a href="#"><h1>ELFAY TRAVEL AGENT</h1></a>
             
              </div>

              <button id="navbarToggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            
            <div id="collapsable-nav" class="collapse navbar-collapse">
               <ul id="nav-list" class="nav navbar-nav navbar-right">
                    <li id="navHomeButton" class=" active">
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

      


      </div>
    );
  }
}

export default Header;
