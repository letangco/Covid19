import React,{Component} from 'react';
import './menu.css';
import logo from '../image/covid19.png';
import Dashboard from '../dashboard/dashboard';
import Map from '../mapDistribute/map';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
class Menu extends Component {
    
  render(){
    
    return (
        <Router>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar4">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    </button>
                                    {/* <a className="navbar-brand" href="/">
                                        <img src={logo} alt="Dispute Bills"/>
                                    </a> */}
                                    <NavLink to="/dashboard" className="navbar-brand">
                                        <img src={logo} alt="Dispute Bills"/>
                                    </NavLink>
                                </div>
                                <div id="navbar4" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav">
                                    <li className="active">
                                        <NavLink exact to = "/dashboard" className="my-link">
                                            DASHBOARD
                                        </NavLink>
                                    </li>
                                    
                                    <li className="active">
                                        <NavLink exact to = "/map" className="my-link">
                                            MAP
                                        </NavLink>
                                    </li>
                                    <li className="dropdown active" >
                                        <a href="a" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">CALCULATOR RATE <span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                        <li><a href="a">Action</a></li>
                                        <li><a href="a">Another action</a></li>
                                        <li><a href="a">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li className="dropdown-header">Nav header</li>
                                        <li><a href="a">Separated link</a></li>
                                        <li><a href="a">One more separated link</a></li>
                                        </ul>
                                    </li>
                                    <li className="active">
                                        <a href="a">DIRECT</a>
                                        
                                    </li>
                                    <li className="active">
                                        <NavLink exact to = "/wiki" className="my-link">
                                            WIKI COVID 19
                                        </NavLink>
                                    </li>
                                    <li className="active">
                                        <NavLink exact to = "/news" className="my-link">
                                            NEWS
                                        </NavLink>
                                    </li>
                                    </ul>
                                    <form className="navbar-form navbar-right" action="/action_page.php">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search"/>
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
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/map" exact component={Map}/>
        </Router>
        
    );
  }
}

export default Menu;
