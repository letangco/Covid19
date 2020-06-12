import React,{Component} from 'react';
import './Dashboard.css';
import logo from '../image/covid19.png';
class Menu extends Component {
    
  render(){
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar4">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="https://daa.uit.edu.vn">
                                    <img src={logo} alt="Dispute Bills"/>
                                    </a>
                                </div>
                                <div id="navbar4" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav">
                                    <li className="active"><a href="a">DASHBOARD</a></li>
                                    
                                    <li>
                                        {/* <Link to="../mapDistribute/map.tsx">MAP</Link> */}
                                        <a href="/">MAP</a>
                                    </li>
                                    <li className="dropdown">
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
                                    <li>
                                        <a href="a">DIRECT</a>
                                        
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
        
    );
  }
}

export default Menu;
