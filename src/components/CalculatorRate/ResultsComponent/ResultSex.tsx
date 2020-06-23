import React, { Component } from "react";
interface IProps {
  sendSex: any;
}
interface IState {}
class ResultSex extends Component<IProps, IState> {
  render() {
    console.log(this.props.sendSex);
    var sex: any = this.props.sendSex;
    function RenderSex() {
      switch (sex) {
        case "Male": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP SEX</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Sex Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">
                    <p className="valueResult">61.8%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        case "Female": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">GROUP SEX</h3>
              </div>
              <div className="panel-body">
                <div className="panel panel-success">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      Sex Specific Fatality Rate (US Data)
                    </h3>
                    <p>
                      We are collecting and analyzing the data from all US
                      States. In the meantime, below we show the data provided
                      by New York City Health as of May 13, 2020.
                    </p>
                  </div>
                  <div className="panel-body">
                    <p className="valueResult">38.2%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    }

    return <div>{RenderSex()}</div>;
  }
}

export default ResultSex;
