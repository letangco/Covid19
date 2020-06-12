import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/menu/Menu';
import Map from '../src/components/mapDistribute/map';
import Dashboard from './components/dashboard/dashboard';
class App extends Component {
  render(){
    return (
      <Router>
          
          <div className="container-fluid">
            
              <Menu />
            
            {/* <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/" exact component={Map}/> */}
          </div>
          
      </Router>        
    );
  }
}

export default App;
