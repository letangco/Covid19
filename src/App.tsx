import React,{Component} from 'react';
import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/menu/Menu';
class App extends Component {
  render(){
    return (
      // <Router>
          
          <div className="container-fluid">
            
              <Menu />
            
            
          </div>
          
      // </Router>        
    );
  }
}

export default App;
