import React, { Component } from "react";
interface IProps {
    sendRespiratory: any;
}
interface IState {}
class ResultRespiratory extends Component<IProps, IState> {
  render() {
    var Respiratory: any = this.props.sendRespiratory;
    function RenderRespiratory() {
      switch (Respiratory) {
        case "Yes": {
          return (
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">CHRONIC RESPIRATORY DISEASE</h3>
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
                  <p className="valueResult">6.3%</p>
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

    return <div>{RenderRespiratory()}</div>;
  }
}

export default ResultRespiratory;
