import React, { Component } from "react";
import './ResultItem.css';
interface IProps {
  sendAge: any;
}
interface IState { }
class ResultAge extends Component<IProps, IState> {
  render() {
    var valueAge: any = [0.06, 3.9, 22.4, 24.9, 48.7, 0.04];
    var groupAge: any = this.props.sendAge;
    function RenderGroupAgeUS() {
      switch (groupAge) {
        case "groupAge1": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel panel-success mg-20">
                <div className="panel-heading pd-25">
                  <h3 className="panel-title">
                    Age Specific Fatality Rate (US Data)
                    </h3>
                  <p>
                    We are collecting and analyzing the data from all US
                    States. In the meantime, below we show the data provided
                    by New York City Health as of May 13, 2020.
                    </p>
                  <p className="valueResult">{valueAge[0]}%</p>
                </div>
              </div>
            </div>
          );
        }
        case "groupAge2": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel panel-success mg-20">
                <div className="panel-heading pd-25">
                  <h3 className="panel-title">
                    Age Specific Fatality Rate (US Data)
                    </h3>
                  <p>
                    We are collecting and analyzing the data from all US
                    States. In the meantime, below we show the data provided
                    by New York City Health as of May 13, 2020.
                    </p>
                  <p className="valueResult">{valueAge[1]}%</p>
                </div>
              </div>
            </div>
          );
        }
        case "groupAge3": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel panel-warning mg-20">
                <div className="panel-heading pd-25">
                  <h3 className="panel-title">
                    Age Specific Fatality Rate (US Data)
                    </h3>
                  <p>
                    We are collecting and analyzing the data from all US
                    States. In the meantime, below we show the data provided
                    by New York City Health as of May 13, 2020.
                    </p>
                  <p className="valueResult">{valueAge[2]}%</p>
                </div>
              </div>
            </div>
          );
        }
        case "groupAge4": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel panel-warning mg-20">
                <div className="panel-heading pd-25">
                  <h3 className="panel-title">
                    Age Specific Fatality Rate (US Data)
                    </h3>
                  <p>
                    We are collecting and analyzing the data from all US
                    States. In the meantime, below we show the data provided
                    by New York City Health as of May 13, 2020.
                    </p>
                  <p className="valueResult">{valueAge[3]}%</p>
                </div>
              </div>
            </div>
          );
        }
        case "groupAge5": {
          return (
            <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">GROUP AGE</h3>
            </div>
            <div className="panel panel-danger mg-20">
              <div className="panel-heading pd-25">
                <h3 className="panel-title">
                  Age Specific Fatality Rate (US Data)
                  </h3>
                <p>
                  We are collecting and analyzing the data from all US
                  States. In the meantime, below we show the data provided
                  by New York City Health as of May 13, 2020.
                  </p>
                <p className="valueResult">{valueAge[4]}%</p>
              </div>
            </div>
          </div>
          );
        }
        case "groupAge6": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP AGE</h3>
              </div>
              <div className="panel panel-danger mg-20">
                <div className="panel-heading pd-25">
                  <h3 className="panel-title">
                    Age Specific Fatality Rate (US Data)
                    </h3>
                  <p>
                    We are collecting and analyzing the data from all US
                    States. In the meantime, below we show the data provided
                    by New York City Health as of May 13, 2020.
                    </p>
                  <p className="valueResult">{valueAge[5]}%</p>
                </div>
              </div>
            </div>
          );
        }
      }
      return 1;
    }

    return <div>{RenderGroupAgeUS()}</div>;
  }
}

export default ResultAge;
