import React, { Component } from "react";
import logoWiki from "../image/logoWiki.png";
import corona from "../image/corona.jpg";
import Askquestion from "../image/AskquestionCorona.png";
import Protected from "../image/Protected.png";
import PublicHelth from "../image/publicHelth.png";
// import {BrowserRouter as Router} from 'react-router-dom';
class Wiki extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>
                <img src={logoWiki} alt="LogoWikiCorona" width="50em" />{" "}
                CORONAVIRUS RESOURCE CENTER{" "}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <h2>COVID-19 Basics</h2>
              </div>

              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <p>
                  Learn more about COVID-19 and what you can do to stay safe and
                  prevent spread of the virus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>
                <i
                  className="fa fa-question-circle fa-1x"
                  aria-hidden="true"
                ></i>
                What is the Coronavirus?
              </h1>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>
                1. 2019 Novel Coronavirus (2019-nCoV) is a virus (more
                specifically, a coronavirus) identified as the cause of an
                outbreak of respiratory illness first detected in Wuhan, China.
                <br />
                2. Early on, many of the patients in the outbreak in Wuhan,
                China reportedly had some link to a large seafood and animal
                market, suggesting animal-to-person spread.
                <br />
                3. However, a growing number of patients reportedly have not had
                exposure to animal markets, indicating person-to-person spread
                is occurring.
                <br />
                4. The name coronavirus is derived from the Latin corona,
                meaning "crown" or "halo", which refers to the characteristic
                appearance reminiscent of a crown.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={corona}
                    alt="Card image"
                    width="540px"
                    height="345px"
                  />
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">
                        Understanding the COVID-19 Pandemic
                      </h4>
                    </a>
                    <p className="card-text">
                      Johns Hopkins University is hosting a free, publicly
                      available course entitled Understanding the COVID-19
                      Pandemic: Insights from Johns Hopkins University Experts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Askquestion}
                    alt="Card Ask Question"
                    width="540px"
                    height="345px"
                  />
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Frequently Asked Question</h4>
                    </a>
                    <p className="card-text">
                      How do I self-quarantine? How long can COVID-19 live on
                      surfaces? What will it take to develop a vaccine? Johns
                      Hopkins experts answer your most frequently asked
                      questions about coronavirus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={Protected}
                    alt="Card image"
                    width="540px"
                    height="345px"
                  />
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Protecting Your Health</h4>
                    </a>
                    <p className="card-text">
                      Johns Hopkins experts offer best practices for protecting
                      your health, the health of others, and preventing the
                      spread of coronavirus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={PublicHelth}
                    alt="Card Ask Question"
                    width="540px"
                    height="345px"
                  />
                  <div className="card-body">
                    <a href="#">
                      <h4 className="card-title">Public Health on Call</h4>
                    </a>
                    <p className="card-text">
                      Experts from the Johns Hopkins Bloomberg School of Public
                      Health answer questions and discuss the latest
                      developments in the COVID-19 public health crisis. New
                      episodes are posted daily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Wiki;
