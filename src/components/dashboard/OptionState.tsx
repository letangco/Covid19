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
class OptionState extends Component {
    render() {
        return (
            <Router>
                <div className="rowOption1">
                    <NavLink exact to="/">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>World</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Asia">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Asia</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Europe">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Europe</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Africa">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Africa</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Oceania">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Oceania</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/NorthAmerica">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>NorthAmerica</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/SouthAmerica">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>SouthAmerica</strong></h4>
                        </div>
                    </NavLink>
                </div>

                <div className="rowOption2">
                    <NavLink exact to="/USA">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>USA</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Canada">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Canada</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/China">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>China</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Australia">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Australia</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Italy">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Italy</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Russia">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Russia</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to="/Ireland">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS" />
                            <h4><strong>Ireland</strong></h4>
                        </div>
                    </NavLink>
                </div>
                <Switch>

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
                </Switch>
            </Router>
        );
    }
}
export default OptionState;