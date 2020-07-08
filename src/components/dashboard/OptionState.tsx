import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './css/OptionState.css';
import Stats from './Stats';
import USA from './USA';
import Canada from './Canada';
import China from './China';
import Australia from './Australia';
import Italy from './Italy';
import Russia from './Russia';
import Ireland from './Ireland';
import Asia from './Asia';
import Europe from './Europe';
import Africa from './Africa';
import Oceania from './Oceania';
import NorthAmerica from './NorthAmerica';
import SouthAmerica from './SouthAmerica';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe, faGlobeAsia, faGlobeEurope, faGlobeAfrica, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
class OptionState extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        
                        <div className="row main-option-table">
                        <NavLink exact to="/">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobe} /> World
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/USA">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/us.svg" width="38" alt="Flag USA"/>
                                    &nbsp;USA
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Asia">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobeAsia} /> Asia
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Canada">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                            <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ca.svg" width="38" alt="Flag USA"/>
                                 &nbsp;Canada
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Europe">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobeEurope} /> Europe
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/China">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                            <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/cn.svg" width="38" alt="Flag USA"/>
                                 &nbsp;China
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Africa">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobeAfrica} /> Africa
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Russia">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                            <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ru.svg" width="38" alt="Flag USA"/>
                                 &nbsp;Russia
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Oceania">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobeAsia} /> Oceania
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/Australia">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                            <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/au.svg" width="38" alt="Flag USA"/>
                                 &nbsp;Australia
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/NorthAmerica">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobeAmericas} /> North America
                                </p>
                            </div>
                        </NavLink>
                    
                        <NavLink exact to="/Italy">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                            <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/it.svg" width="38" alt="Flag USA"/>
                                 &nbsp;Italy
                                </p>
                            </div>
                        </NavLink>
                        <NavLink exact to="/SouthAmerica">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                                <p className="titleCountry">
                                    <FontAwesomeIcon icon={faGlobeAmericas} /> South America
                                </p>
                            </div>
                        </NavLink>
                        
                        <NavLink exact to="/Ireland">
                            <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 itemOption">
                            <p className="titleCountry">
                                 <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ie.svg" width="38" alt="Flag USA"/>
                                 &nbsp;Ireland
                                </p>
                            </div>
                        </NavLink>
                        </div>
                    </div>
                    <Switch>
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                            <Route exact path="/" component={Stats} />
                            <Route path="/Asia" exact component={Asia} />
                            <Route exact path="/Europe" component={Europe} />
                            <Route path="/Africa" exact component={Africa} />
                            <Route exact path="/Oceania" component={Oceania} />
                            <Route path="/NorthAmerica" exact component={NorthAmerica} />
                            <Route path="/SouthAmerica" exact component={SouthAmerica} />
                            <Route exact path="/USA" component={USA} />
                            <Route path="/Canada" exact component={Canada} />
                            <Route exact path="/China" component={China} />
                            <Route path="/Australia" exact component={Australia} />
                            <Route exact path="/Italy" component={Italy} />
                            <Route path="/Russia" exact component={Russia} />
                            <Route path="/Ireland" exact component={Ireland} />
                        </div>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default OptionState;