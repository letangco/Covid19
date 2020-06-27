import React, {Component} from 'react';
import {BrowserRouter as Router, Route,NavLink, Switch} from 'react-router-dom';
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
    render (){
        return (
            
            // <Router>
            //     <div className="row">
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Stats")}}>
            //             <NavLink exact to="/" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>World</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Asia")}}>
            //             <NavLink exact to="/Asia" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>Asia</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Europe")}}>
            //             <NavLink exact to="/Europe" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>Europe</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Africa")}}>
            //             <NavLink exact to="/Africa" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>Africa</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Oceania")}}>
            //             <NavLink exact to="/Oceania" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>Oceania</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi North America")}}>
            //             <NavLink exact to="/NorthAmerica" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>North America</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
            //         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi South America")}}>
            //             <NavLink exact to="/SouthAmerica" className="navbar-brand">
            //                 <div className="row">
            //                     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //                         <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
            //                     </div>
            //                     <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                         <h4><strong>South America</strong></h4>
            //                     </div>
            //                 </div>
            //             </NavLink>
            //         </div>
                    
            //     </div>
            //     <div className="row">
            //         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi USA")}}>
            //                 <NavLink exact to="/USA" className="navbar-brand">
            //                     <div className="row">
            //                         <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/us.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            //                             <h4><strong>USA</strong></h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Canada")}}>
            //                 <NavLink exact to="/Canada" className="navbar-brand">
            //                     <div className="row">
            //                     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ca.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            //                             <h4>Canada</h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi China")}}>
            //                 <NavLink exact to="/China" className="navbar-brand">
            //                     <div className="row">
            //                     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/cn.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            //                             <h4>China</h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Australia")}}>
            //                 <NavLink exact to="/Australia" className="navbar-brand">
            //                     <div className="row">
            //                     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/au.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            //                             <h4>Australia</h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Italy")}}>
            //                 <NavLink exact to="/Italy" className="navbar-brand">
            //                     <div className="row">
            //                     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/it.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            //                             <h4>Italy</h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Russia")}}>
            //                 <NavLink exact to="/Russia" className="navbar-brand">
            //                     <div className="row">
            //                     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ru.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            //                             <h4>Russia</h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 optionUSA" onClick={()=>{console.log("Goi Ireland")}}>
            //                 <NavLink exact to="/Ireland" className="navbar-brand">
            //                     <div className="row">
            //                     <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            //                             <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/ie.svg" width="38px" height="25px" alt="OptionStatsUS"/>
            //                         </div>
            //                         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            //                         </div>
            //                         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            //                             <h4>Ireland</h4>
            //                         </div>
            //                     </div>
            //                 </NavLink>
            //             </div>
            //         </div>
            //     </div>
            
                
            //     {/* <Asia /> */}
            //     <Route path="/" exact component={Stats}/>
            //     <Route path="/USA" exact component={USA}/>
            //     <Route path="/Canada" exact component={Canada}/>
            //     <Route path="/China" exact component={China}/>
            //     <Route path="/Australia" exact component={Australia}/>
            //     <Route path="/Italy" exact component={Italy}/>
            //     <Route path="/Russia" exact component={Russia}/>
            //     <Route path="/Ireland" exact component={Ireland}/>
            //     <Route path="/Asia" exact component={Asia}/>
            //     <Route path="/Europe" exact component ={Europe}/>
            //     <Route path="/Africa" exact component={Africa}/>
            //     <Route path="/Oceania" exact component={Oceania}/>
            //     <Route path="/NorthAmerica" exact component={NorthAmerica}/>
            //     <Route path="/SouthAmerica" exact component={SouthAmerica}/>
            //             {/* <Stats />
            //             <USA />
            //             <Canada />
            //             <China />
            //             <Australia />
            //             <Italy />
            //             <Russia />
            //             <Ireland /> */}
            // </Router>
            <Router>
                
                <div className="rowOption1">
                    <NavLink exact to ="/">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>World</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Asia">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Asia</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Europe">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Europe</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Africa">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Africa</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Oceania">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Oceania</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/NorthAmerica">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>NorthAmerica</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/SouthAmerica">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>SouthAmerica</strong></h4>
                        </div>
                    </NavLink>
                </div>

                <div className="rowOption2">
                <NavLink exact to ="/USA">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>USA</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Canada">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Canada</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/China">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>China</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Australia">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Australia</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Italy">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Italy</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Russia">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Russia</strong></h4>
                        </div>
                    </NavLink>
                    <NavLink exact to ="/Ireland">
                        <div className="itemOption">
                            <img src="https://www.pngfind.com/pngs/m/618-6182293_file-locator-tool-icon-svg-world-bank-data.png" width="38px" alt="OptionStatsUS"/>
                            <h4><strong>Ireland</strong></h4>
                        </div>
                    </NavLink>
                </div>
                <Switch>
                    
                    <Route exact  path="/" component = {Stats}/>
                    <Route path="/Asia" exact component={Asia}/>
                    <Route exact  path="/Europe" component = {Europe}/>
                    <Route path="/Africa" exact component={Africa}/>
                    <Route exact  path="/Oceania" component = {Oceania}/>
                    <Route path="/NorthAmerica" exact component={NorthAmerica}/>
                    <Route path="/SouthAmerica" exact component={SouthAmerica}/>

                    <Route exact  path="/USA" component = {USA}/>
                    <Route path="/Canada" exact component={Canada}/>
                    <Route exact  path="/China" component = {China}/>
                    <Route path="/Australia" exact component={Australia}/>
                    <Route exact  path="/Italy" component = {Italy}/>
                    <Route path="/Russia" exact component={Russia}/>
                    <Route path="/Ireland" exact component={Ireland}/>
                </Switch>
            </Router>
        );
    }
}
export default OptionState;