import React, { Component } from "react";
import "./understandingCovid19.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "../../image/facebook.png";
import JonHokin from '../../image/JonHokin.png';
import Anttizen from '../../image/anttizen.png';
import {faCopyright,faDraftingCompass} from '@fortawesome/free-solid-svg-icons';
// import {faFace} from "@fortawesome/react-fontawesome";
// import {BrowserRouter as Router} from 'react-router-dom';
class understandingCovid19 extends Component {
  render() {
    return (
      <div className="Pandemic">
        <header className="masthead">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <h4>
                  <p className="titleHeading" color="yellow">COVID-19 BASICS</p>
                </h4>
                <h1 className="font-weight-light">
                  <strong>Understanding the COVID-19 Pandemic</strong>
                </h1>
                <h3>
                  <p className = "lblContent">Insights from Johns Hopkins University Experts</p>
                </h3>
                <div
                  className="fb-share-button"
                  data-href="http://colt.surge.sh/"
                  data-layout="button"
                  data-size="large"
                >
                  <p className="lblShare">
                    SHARE THIS PAGE:
                    <a
                      target="_blank"
                      href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fcolt.surge.sh%2F&amp;src=sdkpreparse"
                      className="fb-xfbml-parse-ignore"
                    >
                      <img src={facebook} alt="fb" width="30px" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-30">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 contentUnderstanding">
              <p>
                Johns Hopkins University is hosting a free, publicly available
                course titled Understanding the COVID-19 Pandemic: Insights from
                Johns Hopkins University Experts. This course is set up as a
                series of short modules to explore the COVID-19 pandemic.
                Registration is not required.
              </p>
              <p>
                The modules build on each other. The course begins with a
                discussion of the virus that causes COVID-19 and works its way
                to the pandemic’s broader implications for society.
              </p>
              <p>
                This course features original content that was created after the
                imposition of social distancing measures.
              </p>
              <p>
                <strong>
                  Upon completing this course, you will be able to:
                </strong>
              </p>
              <ul>
                <li>
                  Describe characteristics of the COVID-19 disease, including
                  how it is diagnosed and treated
                </li>
                <li>
                  Understand the development of the COVID-19 pandemic, and
                  emerging trends throughout the world
                </li>
                <li>
                  Discuss societal challenges raised by COVID-19 and
                  opportunities to address them
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BtulL3oArQw"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
          </div>
        </div>
        
        <div className="container-fluid">
            
            <div className="row">
              
            <div className="footer">
                
                
                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 contentAnttizen">
                <div className="childContentAnttizen">
                    <img src= {Anttizen} alt="anttizen" width = "26%"/>
                    
                      <p><p>Anttizen Technology JSC with the mission of creating software that
                         helps Win 10 users improve performance on working</p></p>
                         <p className="contactName">
                      <FontAwesomeIcon icon={faDraftingCompass}/> Le Tang Co (Anttizen)
                    </p>
                    </div>
                </div>
                <span className="borderDiv"></span>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 flexJohnsHopkins">
                  <div className="johnsHopkins">
                  <img src={JonHokin} alt="jonhokin" width="60%"/>
                    <p>
                      <br/>
                        <FontAwesomeIcon icon={faCopyright}/> 2020 Johns Hopkins University. All rights reserved.
                    </p>
                    <p>Privacy Statement</p>
                  </div>
                   
                </div>
            </div>
            </div>
            
        </div>
        
      </div>
    );
  }
}

export default understandingCovid19;
