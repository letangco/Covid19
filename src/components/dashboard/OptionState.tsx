import React, {Component} from 'react';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
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
class OptionState extends Component {
    render (){
        return (
            
            <Router>
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Stats")}}>
                        <NavLink exact to="/" className="navbar-brand">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="30px" alt="OptionStatsUS"/>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <h4><strong>World</strong></h4>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Asia")}}>
                        <NavLink exact to="/Asia" className="navbar-brand">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="30px" alt="OptionStatsUS"/>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <h4><strong>Asia</strong></h4>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi USA")}}>
                            <NavLink exact to="/USA" className="navbar-brand">
                                <div className="row">
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/us.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                        <h4><strong>USA</strong></h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Canada")}}>
                            <NavLink exact to="/Canada" className="navbar-brand">
                                <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ca.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4>Canada</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi China")}}>
                            <NavLink exact to="/China" className="navbar-brand">
                                <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/cn.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4>China</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Australia")}}>
                            <NavLink exact to="/Australia" className="navbar-brand">
                                <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/au.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4>Australia</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Italy")}}>
                            <NavLink exact to="/Italy" className="navbar-brand">
                                <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/it.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4>Italy</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Russia")}}>
                            <NavLink exact to="/Russia" className="navbar-brand">
                                <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ru.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4>Russia</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Ireland")}}>
                            <NavLink exact to="/Ireland" className="navbar-brand">
                                <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                        <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ie.svg" width="30px" height="25px" alt="OptionStatsUS"/>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h4>Ireland</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            
                
                {/* <Asia /> */}
                <Route path="/" exact component={Stats}/>
                <Route path="/USA" exact component={USA}/>
                <Route path="/Canada" exact component={Canada}/>
                <Route path="/China" exact component={China}/>
                <Route path="/Australia" exact component={Australia}/>
                <Route path="/Italy" exact component={Italy}/>
                <Route path="/Russia" exact component={Russia}/>
                <Route path="/Ireland" exact component={Ireland}/>
                <Route path="/Asia" exact component={Asia}/>
                        {/* <Stats />
                        <USA />
                        <Canada />
                        <China />
                        <Australia />
                        <Italy />
                        <Russia />
                        <Ireland /> */}
            </Router>
            
        );
    }
}
export default OptionState;