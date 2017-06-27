
import React, { Component } from 'react';

import  '../css/Foot.css';

class Footer extends Component {
  render() {

    return (
      
       <footer>
    <div className="footer" id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3  col-md-2 col-sm-4 col-xs-6">
                    <section id="hours" >
                          <span>Hours:</span><br></br>
                          Mon-Fri: 10:15am - 7:00pm <br></br>
                          Sat: 10:15am - 2:30pm<br></br>
                          Sunday Closed
                          <hr className="visible-xs"></hr>
                   </section>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-4 col-xs-6">
                     <section id="address">
                          <span>Address:</span><br></br>
                             6370 W. Flamingo Rd.  Suite-3<br></br>
                             Las Vegas, NV 89103<br></br>
                             Desk: 702-253 0103<br></br>
                             Fax: 702-253-0107 <br></br>
                             Email: elfaytravel@gmail.com
                         
                          <hr className="visible-xs"></hr>
                     </section>
                </div>
                <div className="col-lg-6 col-md-2 col-sm-4 col-xs-6">
                     <section id="testimonials" >
                           <span>Here's what our clients have to say:</span><br></br>
                          <p>When we arrived at our hotel, 13,000 miles away from home, and they didn't have our reservation on file, I immediately called Elfay Travel. Within minutes we were enjoying our comfortable room. Now that's service!<br></br>
                            Getenet Asefa <br></br>
                            San Jose, CA</p>
                          <p>I love the service at Elfay Travel. They always respond to me quickly and have the answers I need. Thanks for everything!<br></br>
                          Alem Abebe<br></br>
                          Springfield, IL</p>
                    </section>
                </div>
            </div>
            <br></br>
             <div className="container">
            <div className="row">
                <div className="col-lg-6  col-md-2 col-sm-4 col-xs-6">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                        <li> <a href="#"> Lorem Ipsum </a> </li>
                    </ul>
                </div>
                <div className="col-lg-6  col-md-3 col-sm-6 col-xs-12 ">
                    <h3> Lorem Ipsum </h3>
                    <ul>
                        <li>
                            <div className="input-append newsletter-box text-center">
                                <input type="text" className="full text-center" placeholder="Email "></input>
                                <button className="btn  bg-gray" type="button"> Lorem ipsum <i className="fa fa-long-arrow-right"> </i> </button>
                            </div>
                        </li>
                    </ul>
                    <ul className="social">
                        <li> <a href="#"> <i className=" fa fa-facebook">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-twitter">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-google-plus">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-pinterest">   </i> </a> </li>
                        <li> <a href="#"> <i className="fa fa-youtube">   </i> </a> </li>
                    </ul>
                </div>
            </div>
        
        </div>
      
    </div>
  </div>
    
    <div className="footer-bottom">
        <div className="container">
            <p className="pull-left"> Copyright All right reserved. </p>
            <div className="pull-right">
                <ul className="nav nav-pills payments">
                  <li><i className="fa fa-cc-visa"></i></li>
                    <li><i className="fa fa-cc-mastercard"></i></li>
                    <li><i className="fa fa-cc-amex"></i></li>
                    <li><i className="fa fa-cc-paypal"></i></li>
                </ul> 
            </div>
        </div>
    </div>
  
</footer>
 
    );
  }
}

export default Footer;