import React, { Component } from "react";
import facebook from "../../image/facebook.png";
import JonHokin from '../../image/JonHokin.png';
import Anttizen from '../../image/anttizen.png';
import {faCopyright,faDraftingCompass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styleAskAndQuestion.css';
// import {BrowserRouter as Router} from 'react-router-dom';
interface IState{
  select: string
}
class AskandQuestion extends Component<{}, IState> {
  constructor(props:any)
  {
    super (props)
    this.state={
      select:""
    }
  }
  handleClick = (event:any) =>
  {
    this.setState({
      select: event.target.id
    })
  }
  setClick = (value:any)=>
  {
    {
      if (value === this.state.select)
        return "itemNew activeNew";
        // console.log("col-xs-12 col-sm-12 col-md-12 col-lg-12 action")
      else
        // console.log("col-xs-12 col-sm-12 col-md-12 col-lg-12 ")
        return "itemNew";
      
    }
  }
  render() {
    return (
      <div className="AskQuestion">
        <header className="masthead">
          <div className="container">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <h4>
                  <p className="titleHeading" color="yellow">COVID-19 BASICS</p>
                </h4>
                <h1 className="font-weight-light">
                  <strong>Frequently Asked Questions</strong>
                </h1>
                <h3>
                  <p className = "lblContent">
                    Johns Hopkins experts answer your most frequently asked
                    questions about coronavirus.
                  </p>
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

        <div className="container">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="list-group-new">
              <a
                className={this.setClick("q1")}
                id="q1"
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus"
                target="_blank"
                aria-controls="home"
                onClick={this.handleClick}
              >
                What is Coronavirus (COVID-19)?
              </a>
              <a
                className={this.setClick("q2")}
                id="q2"
                href="https://hub.jhu.edu/2020/03/20/sars-cov-2-survive-on-surfaces/"
                target="_blank"
                aria-controls="profile"
                onClick={this.handleClick}
              >
                How long can COVID-19 lives on surfaces?
              </a>
              <a
                className={this.setClick("q3")}
                id="q3"
                target="_blank"
                href="https://hub.jhu.edu/2020/03/23/how-to-self-quarantine-self-isolate/"
                aria-controls="messages"
                onClick={this.handleClick}
              >
                How can families and roommates self-quarantine?
              </a>
              <a
                className={this.setClick("q4")}
                id="q4"
                target="_blank"
                href="https://hub.jhu.edu/2020/03/26/covid-19-vaccine-development-ruth-karron/"
                aria-controls="messages"
                onClick={this.handleClick}
              >
                  What will it take to develop a vaccine?
              </a>
              <a
                className={this.setClick("q5")}
                id="q5"
                href="https://www.jhsph.edu/ivac/2020/03/20/covid-19-questions-answered-ivac-affiliated-experts-give-their-take-on-the-challenges-with-infection-control/"
                role="tab"
                target="_blank"
                aria-controls="settings"
                onClick={this.handleClick}
              >
                What are scientists and experts doing to support a rapid global responce?
              </a>
              <a
                className={this.setClick("q6")}
                id="q6"
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/2019-novel-coronavirus-myth-versus-fact"
                role="tab"
                aria-controls="settings"
                target="_blank"
                onClick={this.handleClick}
              >
                COVID-19: Myth vs. Fact
              </a>
              <a
                className={this.setClick("q7")}
                id="q7"
                href="https://hub.jhu.edu/2020/04/01/alice-bonner-coronavirus-nursing-homes/"
                role="tab"
                aria-controls="settings"
                target="_blank"
                onClick={this.handleClick}
              >
                  Why are nursing homes at greater risk for COVID-19 outbreak?
              </a>
              <a
                className={this.setClick("q8")}
                id="q8"
                href="https://hub.jhu.edu/2020/04/02/sequencing-genome-sars-cov-2/"
                role="tab"
                aria-controls="settings"
                onClick={this.handleClick}
                target="_blank"
              >
                The Role of Genomic Sequencing in Combating COVID-19
              </a>
              <a
                className={this.setClick("q9")}
                id="q9"
                href="https://hub.jhu.edu/2020/04/06/dani-fallin-mental-health-challenges-coronavirus/"
                role="tab"
                aria-controls="settings"
                target="_blank"
                onClick={this.handleClick}
              >
                Managing and understanding mental health concerns during the COVID-19 pandemic
              </a>
              <a
                className={this.setClick("q10")}
                id="q10"
                href="https://hub.jhu.edu/2020/04/06/covid-nursing-cynda-rushton-qa/"
                role="tab"
                aria-controls="settings"
                target="_blank"
                onClick={this.handleClick}
              >
                  In fight against COVID-19, nurses face high-stakes decisions, moral distress
              </a>
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
                <span className="border"></span>
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

export default AskandQuestion;
