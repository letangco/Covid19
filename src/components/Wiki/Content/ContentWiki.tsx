import React, { Component } from "react";
import logoWiki from "../../image/logoWiki.png";
import corona from "../../image/corona.jpg";
import Askquestion from "../../image/AskquestionCorona.png";
import Protected from "../../image/Protected.png";
import PublicHelth from "../../image/publicHelth.png";
import Nose from "../../image/Nose.png";
import TileChet from "../../image/TileDeath.png";
import "./wikiContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import understandingCovid19 from "../understandingCovid19/understandingCovid19";
import AskandQuestion from "../AskedAndQuestion/AskedandQuestion";
import UseMask from "../../image/UseMash.jpg";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import {
  faLungs,
  faHeadSideMask,
  faLungsVirus,
  faHeadSideCough,
  faThermometerFull,
  faHeadSideCoughSlash,
  faTired,
  faDizzy,
  faShieldVirus,
  faChevronCircleRight,
  faLink,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import cold from "../../image/cold.png";
import vomiting from "../../image/vomitting.png";
import Diarrhea from "../../image/Diarrhea.png";
class ContentWiki extends Component {
  newBlank() {
    window.open(
      "https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/",
      "_blank"
    );
  }
  render() {
    return (
      <Router>
        {/* {Thẻ Switch duyệt từ đầu đến cuối, nếu đường dẫn chính xác thì lấy thẻ đầu tiên} */}
        <Switch>
          <Route
            path="/wiki/Covid19Pandemic"
            component={understandingCovid19}
          />
          <Route path="/wiki/AskandQuestion" exact component={AskandQuestion} />
          <div className="container-fluid wikiContent">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 divTitle">
                  <h1 className="lblTitle">
                    <img src={logoWiki} alt="LogoWikiCorona" width="50em" />{" "}
                    CORONAVIRUS RESOURCE CENTER{" "}
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 basicsCorona">
                    <div>
                      <FontAwesomeIcon
                        icon={faLungsVirus}
                        size="4x"
                        color="red"
                      />
                      <h3>COVID-19 Basics</h3>
                    </div>
                  </div>
                  <span className="borderTitleContentWiki"></span>
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 lblLearnMore">
                    <div>
                      <FontAwesomeIcon
                        icon={faShieldVirus}
                        size="4x"
                        color="#43ca54"
                        className="iconShield"
                      />
                      <h4>
                        <p>
                          Learn more about COVID-19 and what you can do to stay
                          safe and prevent spread of the virus.
                        </p>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row information">
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
                  <p className="contentInformation">
                    1. 2019 Novel Coronavirus (2019-nCoV) is a virus (more
                    specifically, a coronavirus) identified as the cause of an
                    outbreak of respiratory illness first detected in Wuhan,
                    China.
                    <br />
                    2. Early on, many of the patients in the outbreak in Wuhan,
                    China reportedly had some link to a large seafood and animal
                    market, suggesting animal-to-person spread.
                    <br />
                    3. However, a growing number of patients reportedly have not
                    had exposure to animal markets, indicating person-to-person
                    spread is occurring.
                    <br />
                    4. The name coronavirus is derived from the Latin corona,
                    meaning "crown" or "halo", which refers to the
                    characteristic appearance reminiscent of a crown.
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
                        alt="image"
                        width="540px"
                        height="345px"
                      />
                      <div className="card-body">
                        <NavLink exact to="/wiki/Covid19Pandemic">
                          <h4 className="titleCardBox">
                            Understanding the COVID-19 Pandemic{" "}
                            <FontAwesomeIcon icon={faLink} />
                          </h4>
                        </NavLink>
                        <p className="card-text-CardBox">
                          <i>
                            Johns Hopkins University is hosting a free, publicly
                            available course entitled Understanding the COVID-19
                            Pandemic: Insights from Johns Hopkins University
                            Experts.
                          </i>
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
                        <NavLink exact to="/wiki/AskandQuestion">
                          <h4 className="card-title">
                            <p className="titleCardBox">
                              Frequently Asked Question{" "}
                              <FontAwesomeIcon icon={faLink} />
                            </p>
                          </h4>
                        </NavLink>
                        <p className="card-text-CardBox">
                          <i>
                            How do I self-quarantine? How long can COVID-19 live
                            on surfaces? What will it take to develop a vaccine?
                            Johns Hopkins experts answer your most frequently
                            asked questions about coronavirus.
                          </i>
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
                          <h4 className="card-title">
                            <p className="titleCardBox">
                              Protecting Your Health{" "}
                              <FontAwesomeIcon icon={faLink} />
                            </p>
                          </h4>
                        </a>
                        <p className="card-text-CardBox">
                          <i>
                            Johns Hopkins experts offer best practices for
                            protecting your health, the health of others, and
                            preventing the spread of coronavirus.
                          </i>
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
                          <h4 className="card-title">
                            <p className="titleCardBox">
                              Public Health on Call{" "}
                              <FontAwesomeIcon icon={faLink} />
                            </p>
                          </h4>
                        </a>
                        <p className="card-text-CardBox">
                          <i>
                            Experts from the Johns Hopkins Bloomberg School of
                            Public Health answer questions and discuss the
                            latest developments in the COVID-19 public health
                            crisis. New episodes are posted daily.
                          </i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row information">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h1>
                    <i
                      className="fa fa-question-circle fa-1x"
                      aria-hidden="true"
                    ></i>
                    How do you get infected?
                  </h1>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="contentInformation">
                    1. The main route of transmission is respiratory droplets
                    and close contact.
                    <br />
                    2. When you sneeze or cough, you send out droplets of fluid
                    from your nose and mouth.
                    <br />
                    3. Those droplets can carry infections, and when they enter
                    someone else's enter the eyes, nose or mouth, the infection
                    can make them sick. This is the way the flu and many viruses
                    are spread.
                    <br />
                    4. Most often, you need to be close to the person (within 6
                    feet) for it to spread this way.
                    <br />
                    5. There is the possibility of aerosol transmission when
                    exposed to high concentration aerosol for a long time in a
                    relatively closed environment.
                    <br />
                    6. The WHO has stated that the risk of spread from someone
                    without symptoms is "very low" and that fecal transmission
                    is "low".
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 information">
                  <h1>
                    <i
                      className="fa fa-question-circle fa-1x"
                      aria-hidden="true"
                    ></i>
                    How can I protect myself?
                  </h1>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 protectMyself">
                  <ul>
                    <h3>
                      <p className="titleProtectMySelf">
                        <i
                          className="fa fa-sign-language"
                          aria-hidden="true"
                        ></i>{" "}
                        Handwashing
                      </p>
                    </h3>
                    <li className="contentInformation">
                      1. A number of governments advise against all
                      non-essential travel to countries and areas affected by
                      the outbreak.
                    </li>
                    <li className="contentInformation">
                      2. There are misconceptions circulating about how to
                      prevent infection: rinsing the nose, gargling with
                      mouthwash, and eating garlic are not effective.
                    </li>
                    <li className="contentInformation">
                      3. The CDC recommends that people wash hands often with
                      soap and water for at least 20 seconds, especially after
                      going to the toilet or when hands are visibly dirty.
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faChevronCircleRight} /> It
                          further recommended using an alcohol-based hand
                          sanitiser with at least 60% alcohol by volume (or 120
                          proof) when soap and water are not readily available.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faChevronCircleRight} /> The
                          WHO also advise people to avoid touching the eyes,
                          nose, or mouth with unwashed hands.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <h3>
                      <p className="titleProtectMySelf">
                        <FontAwesomeIcon icon={faLungs} /> Respiratory hygiene
                      </p>
                    </h3>
                    <li className="contentInformation">
                      1. Health organizations recommended that people cover
                      their mouth and nose with a tissue when coughing or
                      sneezing (which should then be disposed of immediately),
                      or with a sleeve if a tissue is not available.
                    </li>
                    <li className="contentInformation">
                      2. The use of surgical masks by those who may be infected
                      has also been recommended, as they can limit the volume
                      and travel distance of expiratory droplets dispersed when
                      talking, sneezing, and coughing.
                    </li>
                    <li className="contentInformation">
                      3. There is no evidence to show that the wearing of
                      surgical masks by uninfected people at low risk is
                      effective.
                    </li>
                    <li className="contentInformation">
                      4. Only China has specifically recommended the use of
                      masks by healthy members of the public, while face masks
                      have been widely used by healthy people in Hong Kong,
                      Japan, Malaysia, and Singapore.
                    </li>
                  </ul>
                  <ul>
                    <h3>
                      <p className="titleProtectMySelf">
                        <FontAwesomeIcon icon={faHeadSideMask} /> How to use a
                        mask
                      </p>
                    </h3>

                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <li className="contentInformationMask">
                          1. Wear a mask if you are coughing or sneezing.
                        </li>
                        <li className="contentInformationMask">
                          2. If you wear a mask, then you must know how to use
                          it and dispose of it properly.
                        </li>
                        <li className="contentInformationMask">
                          3. Before putting on a mask, clean your hands with
                          alcohol-based hand rub or soap and water.
                        </li>
                        <li className="contentInformationMask">
                          4. Cover your mouth and nose with the mask and make
                          sure there are no gaps between your face and the mask.
                        </li>
                        <li className="contentInformationMask">
                          5. Avoid touching the mask while using it.
                        </li>
                        <li className="contentInformationMask">
                          6. Replace the mask with a new one as soon as it is
                          damp and do not re-use single-use masks.
                        </li>
                        <li className="contentInformationMask">
                          7. To remove the mask, remove it from behind (do not
                          touch the front of the mask), discard it immediately
                          in a closed bin, and then clean your hands with
                          alcohol-based hand rub or soap and water.
                        </li>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 imgContentInformation">
                        <img src={UseMask} alt="Mask" />
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 information">
                  <h1>
                    <i
                      className="fa fa-question-circle fa-1x"
                      aria-hidden="true"
                    ></i>
                    How do I know if I am infected?
                  </h1>
                </div>
              </div>

              <div className="row">
                <div className="container">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 contentInformationEffected">
                    <p className="contentEffected">
                      Common signs of infection include respiratory symptoms,
                      fever, cough, shortness of breath and breathing
                      difficulties. In more severe cases, infection can cause
                      pneumonia, severe acute respiratory syndrome, kidney
                      failure and even death.
                    </p>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>
                              <FontAwesomeIcon icon={faHeadSideCough} /> Symptom
                            </th>
                            <th>%</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <FontAwesomeIcon
                                icon={faThermometerFull}
                                color="red"
                              />{" "}
                              Fever
                            </td>
                            <td>
                              <span className="label label-danger"> 87.9%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FontAwesomeIcon
                                icon={faHeadSideCoughSlash}
                                color="red"
                              />{" "}
                              Dry cough
                            </td>
                            <td>
                              <span className="label label-danger"> 67.7%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FontAwesomeIcon icon={faTired} color="orange" />{" "}
                              Fatigue
                            </td>
                            <td>
                              <span className="label label-warning">
                                {" "}
                                38.1%
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FontAwesomeIcon icon={faLungs} color="orange" />{" "}
                              Shortness of breath
                            </td>
                            <td>
                              <span className="label label-warning">
                                {" "}
                                33.4%
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FontAwesomeIcon icon={faDizzy} color="orange" />{" "}
                              Headache
                            </td>
                            <td>
                              <span className="label label-warning">
                                {" "}
                                13.6%
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={cold}
                                alt="Chills"
                                width="17px"
                                height="17px"
                              />{" "}
                              Chills
                            </td>
                            <td>
                              <span className="label label-warning">
                                {" "}
                                11.4%
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={vomiting}
                                alt="Chills"
                                width="17px"
                                height="17px"
                              />{" "}
                              Nausea or vomiting
                            </td>
                            <td>
                              <span className="label label-warning"> 5.0%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={Nose}
                                alt="vomiting"
                                width="17px"
                                height="17px"
                              />{" "}
                              Nasal congestion
                            </td>
                            <td>
                              <span className="label label-success"> 4.8%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={Diarrhea}
                                alt="vomiting"
                                width="17px"
                                height="17px"
                              />{" "}
                              Diarrhea
                            </td>
                            <td>
                              <span className="label label-success"> 3.7%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src={TileChet} />
                      </div>

                      <div className="card-content">
                        <span className="card-title">
                          <a
                            href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/"
                            target="new_blank"
                          >
                            Death Rate by Age and Sex of COVID-19 patients{" "}
                            <FontAwesomeIcon icon={faLink} size="1x" />
                          </a>
                        </span>
                        <p>
                          <i className="subContentCard">
                            The Report of the WHO-China Joint Mission published
                            on Feb. 28 by WHO, which is based on 55,924
                            laboratory confirmed cases.
                          </i>
                        </p>
                      </div>
                      <div className="card-action">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.newBlank}
                        >
                          <a
                            className="btnSeeDetails"
                            href="https://www.worldometers.info/coronavirus/coronavirus-age-sex-demographics/"
                            target="new_blank"
                          >
                            See details{" "}
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default ContentWiki;
