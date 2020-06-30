import React, { Component } from "react";
import "./menu.css";
import logo from "../image/covid19.png";
import Map from "../mapDistribute/map";
import Dashboard from "../dashboard/dashboard";
import CalculatorRate from "../CalculatorRate/calculatorRate";
import Wiki from "../Wiki/wiki";
import understandingCovid19 from "../Wiki/understandingCovid19/understandingCovid19";
import AskandQuestion from "../Wiki/AskedAndQuestion/AskedandQuestion";
import Direction from "../Direction/Direction";
import PageYoutubeNews from '../YoutubeNews/PageYoutubeNews';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
interface IStates{
  isOpen: boolean
}
class Menu extends Component <{}, IStates>{
  constructor(props:any)
  {
    super (props);
    this.state={
      isOpen: false
    }
  }
  render() {
  var isOpen :any = this.state.isOpen;
   function showMenuToggle()
  {
    if ( isOpen === true)
        {
            return (
                <div className="dropdown">
                    <ul>
                        <li><a href="#">News</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Guidelines</a></li>
                        <li><a href="#">Exchange</a></li>
                        <li><a href="#">Forum</a></li>
                    </ul>
                </div>
            );
        }
        return null;
  }
    return (
      <Router>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar4"
                  onClick={()=>{this.setState({isOpen:true})}}
                >
                  {/* <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> */}
                  {showMenuToggle()}

                </button>
                <NavLink to="/" className="navbar-brand">
                  <img src={logo} alt="DisputeBills" />
                </NavLink>
              </div>
              <div id="navbar4" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <NavLink exact to="/" className="my-link">
                      DASHBOARD
                    </NavLink>
                  </li>

                  <li className="active">
                    <NavLink exact to="/map" className="my-link">
                      MAP
                    </NavLink>
                  </li>
                  <li className="dropdown active">
                    <NavLink
                      exact
                      to="/calculatorRate"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      CALCULATOR RATE <span className="caret"></span>
                    </NavLink>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="a">Action</a>
                      </li>
                      <li>
                        <a href="a">Another action</a>
                      </li>
                      <li>
                        <a href="a">Something else here</a>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-header">Nav header</li>
                      <li>
                        <a href="a">Separated link</a>
                      </li>
                      <li>
                        <a href="a">One more separated link</a>
                      </li>
                    </ul>
                  </li>
                  <li className="active">
                    <NavLink exact to ="/direction" className = "my-link">
                      DIRECTION
                    </NavLink>
                  </li>
                  <li className="active">
                    <NavLink exact to="/wiki" className="my-link">
                      WIKI COVID 19
                    </NavLink>
                  </li>
                  <li className="active">
                    <NavLink exact to="/youtubeNews" className="my-link">
                      NEWS
                    </NavLink>
                  </li>
                </ul>
                <form
                  className="navbar-form navbar-right"
                  action="/action_page.php"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-primary" type="submit">
                        <i className="glyphicon glyphicon-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
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
          <Route path="/direction" exact component = {Direction} />
          <Route path="/youtubeNews" exact component={PageYoutubeNews} />
        </Switch>
      </Router>
    );
  }
}

export default Menu;
