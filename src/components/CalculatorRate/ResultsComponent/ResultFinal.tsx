import React, { Component } from "react";
interface IProps {
  sendDataResult: any;
}
interface IState {}
class ResultFinal extends Component<IProps, IState> {
  render() {
    var data: any[] = this.props.sendDataResult;
    var groupAge: string = data[0];
    var ArrValueAge: any = [0.0006, 0.039, 0.224, 0.249, 0.487, 0.75];
    var Sex: string = data[1];
    var Cardiovascular: string = data[2];
    var Diabetes: string = data[3];
    var Respiratory: string = data[4];
    var Hypertension: string = data[5];
    var Cancer: string = data[6];
    var Stroke: string = data[7];
    var Heart: string = data[8];
    var valueAge: any,
      valueSex: any,
      valueCardiovascular: any,
      valueDiabetes: any,
      valueRespiratory: any,
      valueCancer: any,
      valueHypertension: any,
      valueStroke: any,
      valueHeart: any,
      ResultFinal: any = 0;
    //Switch Age
    switch (groupAge) {
      case "groupAge1": {
        valueAge = ArrValueAge[0];
        break;
      }
      case "groupAge2": {
        valueAge = ArrValueAge[1];
        break;
      }
      case "groupAge3": {
        valueAge = ArrValueAge[2];
        break;
      }
      case "groupAge4": {
        valueAge = ArrValueAge[4];
        break;
      }
      case "groupAge5": {
        valueAge = ArrValueAge[5];
        break;
      }
      case "groupAge6": {
        valueAge = ArrValueAge[6];
        break;
      }
    }
    // Switch Sex
    switch (Sex) {
      case "Male": {
        valueSex = 0.618;
        break;
      }
      case "Female": {
        valueSex = 0.382;
        break;
      }
    }
    // If Cardiovascular
    Cardiovascular === "Yes"
      ? (valueCardiovascular = 0.105)
      : (valueCardiovascular = 0);
    // If Diabetes
    Diabetes === "Yes" ? (valueDiabetes = 0.073) : (valueDiabetes = 0);
    // If Respiratory
    Respiratory === "Yes" ? (valueRespiratory = 0.063) : (valueRespiratory = 0);
    // If Hypertension
    Hypertension === "Yes"
      ? (valueHypertension = 0.084)
      : (valueHypertension = 0);
    // If Cancer
    Cancer === "Yes" ? (valueCancer = 0.076) : (valueCancer = 0);
    // If Stroke
    Stroke === "Yes" ? (valueStroke = 0.125) : (valueStroke = 0);
    // If Heart
    Heart === "Yes" ? (valueHeart = 0.122) : (valueHeart = 0);
    ResultFinal =
      ((valueAge +
        valueSex +
        valueCardiovascular +
        valueDiabetes +
        valueRespiratory +
        valueHypertension +
        valueCancer +
        valueStroke +
        valueHeart) /
        9) *
      100;

    function returnResut() {
      console.log(ResultFinal);
      ResultFinal = Math.round(ResultFinal * 1000) / 1000;
      console.log(ResultFinal);
      if (ResultFinal >= 0 && ResultFinal < 6) {
        return (
          <div className="panel panel-success">
            <div className="panel-heading">
              <h1 className="panel-title">FINAL RESULT</h1>
            </div>
            <div className="panel-body">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h1 className="panel-title">You should be fine</h1>
                  <p>
                    You have an estimated {ResultFinal}% chance of dying from
                    covid-19 if infected
                  </p>
                  <p>
                    Please note this is just an estimation, and not an absolute
                    assessment of the effects covid-19 might have on you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else if (ResultFinal >= 6 && ResultFinal < 8.5) {
        return (
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h1 className="panel-title">FINAL RESULT</h1>
            </div>
            <div className="panel-body">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h1 className="panel-title">Take extra precautions</h1>
                  <p>
                    You have an estimated {ResultFinal}% chance of dying from
                    covid-19 if infected
                  </p>
                  <p>
                    Please note this is just an estimation, and not an absolute
                    assessment of the effects covid-19 might have on you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else if (ResultFinal >8.5) {
        return (
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">FINAL RESULT</h1>
            </div>
            <div className="panel-body">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">You are at risk</h1>
                  <p>
                    You have an estimated {ResultFinal}% chance of dying from
                    covid-19 if infected
                  </p>
                  <p>
                    Please note this is just an estimation, and not an absolute
                    assessment of the effects covid-19 might have on you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return <div></div>;
    }
    return <div>{returnResut()}</div>;
  }
}

export default ResultFinal;
