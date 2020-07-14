import React, { Component } from "react";
import './ResultFinal.css';
interface IProps {
  sendDataResult: any;
  sendSourceCountry: any;
  sendCountry: any;
}
interface IState { }
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
    var SourceCountry: any = this.props.sendSourceCountry;
    var SelectCountry: any = this.props.sendCountry;

    var valueAge: any,
      valueSex: any,
      valueCardiovascular: any,
      valueDiabetes: any,
      valueRespiratory: any,
      valueCancer: any,
      valueHypertension: any,
      ResultCondition:any = 0,
      ResultFinal: any = 0;
    function calculatorResultCountry() {
        for (var i: any = 0; i < SourceCountry.length; i++) {
          if (SourceCountry[i].CountryCode === SelectCountry) {
            if(SourceCountry[i].TotalDeaths===0)
            {
              return 1;
            }
            // else if(parseFloat(SourceCountry[i].TotalDeaths) / parseFloat(SourceCountry[i].TotalConfirmed) )
            // {

            // }
            else
              return ((parseFloat(SourceCountry[i].TotalDeaths) / parseFloat(SourceCountry[i].TotalConfirmed)*100)+1).toFixed(2);
          }
        }
      }
      var ResultCountry:any= calculatorResultCountry();
      console.log(ResultCountry)
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
        valueAge = ArrValueAge[3];
        break;
      }
      case "groupAge5": {
        valueAge = ArrValueAge[4];
        break;
      }
      case "groupAge6": {
        valueAge = ArrValueAge[5];
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
    ResultCondition = (valueAge +
      valueSex +
      valueCardiovascular +
      valueDiabetes +
      valueRespiratory +
      valueHypertension +
      valueCancer).toFixed(2);
      console.log(ResultCondition)
    ResultFinal =
      (ResultCondition*ResultCountry).toFixed(2);
    
    function returnResut() {
      // ResultFinal = Math.round(ResultFinal * 1000) / 1000;
      console.log(ResultFinal)
      if (ResultFinal >= 0 && ResultFinal < 7) {
        return (
          <div className="panel-notice-result-fine">
            <p className="notice-result-fine">You should be fine</p>
            <p className="notice-percent-fine">
              You have an estimated <strong>{ResultFinal}%</strong> chance of <strong>dying</strong> from
                    covid-19 if infected
                  </p>
            <p className="notice-protect-fine">
              Please note this is just an estimation, and not an absolute
              assessment of the effects covid-19 might have on you.
                  </p>
          </div>
        );
      }
      else if (ResultFinal >= 7 && ResultFinal < 8.5) {
        return (
          <div className="panel-notice-result-warning">
            <p className="notice-result-warning">Take extra precautions</p>
            <p className="notice-percent-warning">
              You have an estimated <strong>{ResultFinal}%</strong> chance of <strong>dying</strong> from
                    covid-19 if infected
                  </p>
            <p className="notice-protect-warning">
              Please note this is just an estimation, and not an absolute
              assessment of the effects covid-19 might have on you.
                  </p>
          </div>
        );
      }
      else if (ResultFinal >= 8.5) {
        return (
          <div className="panel-notice-result-danger">
            <p className="notice-result-danger">You are at risk</p>
            <p className="notice-percent-danger">
              You have an estimated <strong>{ResultFinal}%</strong> chance of <strong>dying</strong> from
                    covid-19 if infected
                  </p>
            <p className="notice-protect-danger">
              Please note this is just an estimation, and not an absolute
              assessment of the effects covid-19 might have on you.
                  </p>
          </div>
        );
      }
      return <div></div>;
    }
    return <div>{returnResut()}</div>;
  }
}

export default ResultFinal;
