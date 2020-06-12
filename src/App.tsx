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
          <Menu />
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/map" exact component={Map}/>
      </Router>        
    );
  }
}

export default App;
