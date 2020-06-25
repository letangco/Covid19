import React, { Component } from "react";
import understandingCovid19 from "./understandingCovid19/understandingCovid19";
import AskandQuestion from "./AskedAndQuestion/AskedandQuestion";
import ContentWiki from './Content/ContentWiki';
import Game from './Game/Game';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// import {BrowserRouter as Router} from 'react-router-dom';
class Wiki extends Component {
  render() {
    return (
      <Router>
        {/* {Thẻ Switch duyệt từ đầu đến cuối, nếu đường dẫn chính xác thì lấy thẻ đầu tiên} */}
        <Switch>
          <Route path="/wiki" exact component={ContentWiki} />
          <Route
            path="/wiki/Covid19Pandemic"
            exact
            component={understandingCovid19}
          />
          
          <Route path="/wiki/AskandQuestion" exact component={AskandQuestion} />
          
          {/* <Game /> */}
        </Switch>
        <Game />
      </Router>
    );
  }
}

export default Wiki;
