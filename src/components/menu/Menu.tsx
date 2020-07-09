import React, { Component } from "react";
import "./menu.css";
// import logo from "../image/covid19.png";
import { faChartLine, faGlobeAmericas, faVial, faRoute, faBookMedical, faVideo, faRocket } from '@fortawesome/free-solid-svg-icons'
import Logo2 from '../image/LogoCoronaVirus.jpg';
import Map from "../mapDistribute/map";
import Dashboard from "../dashboard/dashboard";
import CalculatorRate from "../CalculatorRate/calculatorRate";
import Wiki from "../Wiki/wiki";
import understandingCovid19 from "../Wiki/understandingCovid19/understandingCovid19";
import AskandQuestion from "../Wiki/AskedAndQuestion/AskedandQuestion";
import Direction from "../Direction/Direction";
import PageYoutubeNews from '../YoutubeNews/PageYoutubeNews';
import TimeUpdate from './TimeUpdates';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IStates {
  isOpen: boolean;
}
class Menu extends Component<{}, IStates>{
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  changeIsOpen(x: any) {
    if (x === false) {
      this.setState({
        isOpen: true,
      })
    }
    else if (x === true) {
      this.setState({
        isOpen: false,
      })
    }
  }
  closeMenu(x: any) {
    this.setState({
      isOpen: !x
    })
  }
  render() {
    var isOpen: any = this.state.isOpen;
    return (
      <Router>
        <nav className="navbar-expand-sm bg-light navbar-light justify-content-between">
          <ScrollUpButton
            className="btn-scroll-top"
            StopPosition={0}
            ShowAtPosition={150}
            EasingType='easeOutCubic'
            AnimationDuration={1500}
            ContainerClassName='ScrollUpButton__Container'
            TransitionClassName='ScrollUpButton__Toggled'
            style={{
              backgroundColor: "#ececec", width: '40px',
              height: '40px', borderRadius: "50%", color: 'blue'
            }}
            ToggledStyle={{}}
          />
          <div className="navbar-header">
            <button
              type="button"
              className={isOpen === false ? "navbar-toggle collapsed fa fa-bars fa-2x" : "navbar-toggle collapsed fa fa-times fa-2x"}
              data-toggle="collapse"
              data-target="#navbar4"
              onClick={() => this.changeIsOpen(isOpen)}
            >
            </button>
            <NavLink to="/" className="navbar-brand">
              <img src={Logo2} alt="DisputeBills" />
            </NavLink>
          </div>
          <div id="navbar4" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <NavLink exact to="/" className="my-link">
                  <FontAwesomeIcon icon={faChartLine} size="2x" /> DASHBOARD
                    </NavLink>
              </li>

              <li className="active">
                <NavLink exact to="/map" className="my-link">
                  <FontAwesomeIcon icon={faGlobeAmericas} size="2x" /> MAP
                </NavLink>
              </li>
              <li className="active">
                <NavLink
                  exact
                  to="/calculatorRate"
                  className="my-link"
                >
                  <FontAwesomeIcon icon={faVial} size="2x" /> CALCULATOR RATE
                </NavLink>
              </li>
              <li className="active">
                <NavLink exact to="/direction" className="my-link">
                  <FontAwesomeIcon icon={faRoute} size="2x" /> DIRECTION
                    </NavLink>
              </li>
              <li className="active">
                <NavLink exact to="/wiki" className="my-link">
                  <FontAwesomeIcon icon={faBookMedical} size="2x" /> WIKI COVID 19
                    </NavLink>
              </li>
              <li className="active">
                <NavLink exact to="/youtubeNews" className="my-link">
                  <FontAwesomeIcon icon={faVideo} size='2x' />  NEWS
                    </NavLink>
              </li>
              <li className="active">
                <NavLink exact to="/Source" className="my-link">
                  <FontAwesomeIcon icon={faRocket} size='2x' />  SOURCE
                    </NavLink>
              </li>
              <li className="txt-updates"><TimeUpdate /></li>
            </ul>

          </div>
          {
            (isOpen === true) ? (
              <div className="menu-responsive">
                <ul>
                  <li>
                    <NavLink exact to="/" className="my-link" onClick={() => this.closeMenu(isOpen)}>
                      <FontAwesomeIcon icon={faChartLine} size="1x" /> DASHBOARD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/map" className="my-link" onClick={() => this.closeMenu(isOpen)}>
                      <FontAwesomeIcon icon={faGlobeAmericas} size="1x" /> MAP
                </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/calculatorRate"
                      className="my-link"
                      onClick={() => this.closeMenu(isOpen)}
                    >
                      <FontAwesomeIcon icon={faVial} size="1x" /> CALCULATOR RATE
                </NavLink>
                  </li>
                  <li><NavLink exact to="/direction" className="my-link" onClick={() => this.closeMenu(isOpen)}>
                    <FontAwesomeIcon icon={faRoute} size="1x" /> DIRECTION
                    </NavLink></li>
                  <li>
                    <NavLink exact to="/wiki" className="my-link" onClick={() => this.closeMenu(isOpen)}>
                      <FontAwesomeIcon icon={faBookMedical} size="1x" /> WIKI COVID 19
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/youtubeNews" className="my-link" onClick={() => this.closeMenu(isOpen)}>
                      <FontAwesomeIcon icon={faVideo} size='1x' />  NEWS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/Source" className="my-link" onClick={() => this.closeMenu(isOpen)}>
                      {/* <i class="fa fa-font-awesome" aria-hidden="true"></i> */}
                      <FontAwesomeIcon icon={faRocket} size='1x' />  SOURCE
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : <></>
          }
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/map" exact component={Map} />
          <Route path="/calculatorRate" exact component={CalculatorRate} />
          <Route path="/wiki" exact component={Wiki} />
          <Route
            path="/wiki/Covid19Pandemic"
            exact
            component={understandingCovid19}
          />
          <Route path="/wiki/AskandQuestion" exact component={AskandQuestion} />
          <Route path="/direction" exact component={Direction} />
          <Route path="/youtubeNews" exact component={PageYoutubeNews} />
        </Switch>
      </Router>
    );
  }
}

export default Menu;