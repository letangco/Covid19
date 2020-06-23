import React, { Component } from "react";
interface IProps {
  sendCardiovascular: any;
}
interface IState {}
class ResultCardiovascular extends Component<IProps, IState> {
  render() {
    var Cardiovascular: any = this.props.sendCardiovascular;
    function RenderCardiovascular() {
      switch (Cardiovascular) {
        case "Yes": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">CARDIOVASCULAR DISEASE</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                    Cardiovascular Disease Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">
                    <p className="valueResult">10.5%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        case "No": {
          return (
             <></>
          );
        }
      }
    }

    return <div>{RenderCardiovascular()}</div>;
  }
}

export default ResultCardiovascular;
