import React, {Component} from 'react';
import USA from './USA';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import './css/OptionState.css';
class OptionState extends Component {
    render (){
        return (
            
            <Router>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <NavLink exact to="/USA" className="navbar-brand">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 optionUSA" onClick={()=>{console.log("Goi USA")}}>
                            <div className="row">
                                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                    <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/us.svg" alt="OptionStatsUS"/>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h3>USA</h3>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <Route path="/USA" exact component={USA}/>
            </Router>
            
        );
    }
}
export default OptionState;