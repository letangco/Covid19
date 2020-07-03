import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Menu />
        </div>

      </div>
    );
  }
}
export default App;
