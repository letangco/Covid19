import React, { Component } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLungsVirus,
  faFlagCheckered,
  faVenusMars,
  faHeartbeat,
  faRestroom,
  faToilet,
  faLungs,
  faStethoscope,
  faAllergies,
  faHeartBroken,
  faWheelchair
} from "@fortawesome/free-solid-svg-icons";
interface iProps {
  data: any;
  isSubmit: any;
}
interface IState {
  groupAge: any;
  groupSex: any;
  nameAge: any;
  nameSex: any;
  Cardiovascular: any;
  Diabetes: any;
  Respiratory: any;
  Hypertension: any;
  Cancer: any;
  Stroke: any;
  Heart: any;
  optionYesNo: any;
  data: any;
  isSubmit: any;
}
class FormCalculatorRate extends Component<iProps, IState> {
  constructor(props: iProps) {
    super(props);
    this.state = {
      groupAge: "groupAge1",
      groupSex: "Male",
      Cardiovascular: "Yes",
      Diabetes: "Yes",
      Respiratory: "Yes",
      Hypertension: "Yes",
      Cancer: "Yes",
      Stroke: "Yes",
      Heart: "Yes",
      nameAge: [
        "groupAge1",
        "groupAge2",
        "groupAge3",
        "groupAge4",
        "groupAge5",
        "groupAge6",
      ],
      nameSex: ["Male", "Female"],
      optionYesNo: ["Yes", "No"],
      data: [],
      isSubmit: false,
    };
  }
  onHandleSubmit = (event: any) => {
    event.preventDefault();
    this.props.isSubmit(this.state.isSubmit);
    // console.log(
    //   this.state.groupAge,
    //   this.state.groupSex,
    //   this.state.Cardiovascular,
    //   this.state.Diabetes,
    //   this.state.Respiratory,
    //   this.state.Hypertension,
    //   this.state.Cancer,
    //   this.state.Stroke,
    //   this.state.Heart
    // );
  };
  onHandleClickAge = (event: any) => {
    this.setState({
      groupAge: event.target.name,
    });
  };
  onHandleClickSex = (event: any) => {
    this.setState({
      groupSex: event.target.name,
    });
  };
  onHandleClickCardiovascular = (event: any) => {
    this.setState({
      Cardiovascular: event.target.value,
    });
  };
  onHandleClickDiabetes = (event: any) => {
    this.setState({
      Diabetes: event.target.value,
    });
  };
  onHandleClickRespiratory = (event: any) => {
    this.setState({
      Respiratory: event.target.value,
    });
  };
  onHandleClickHypertension = (event: any) => {
    this.setState({
      Hypertension: event.target.value,
    });
  };
  onHandleClickCancer = (event: any) => {
    this.setState({
      Cancer: event.target.value,
    });
  };
  onHandleClickStroke = (event: any) => {
    this.setState({
      Stroke: event.target.value,
    });
  };
  onHandleClickHeart = (event: any) => {
    this.setState({
      Heart: event.target.value,
    });
  };
  // Bắt sự kiện khi Click thì gửi toàn bộ dữ liệu State về thằng cha calculatorRate
  onClick = () => {
    this.setState({ isSubmit: true });
    var {
      groupAge,
      groupSex,
      Cardiovascular,
      Diabetes,
      Respiratory,
      Hypertension,
      Cancer,
      Stroke,
      Heart,
    } = this.state;
    var data = [];
    data.push(
      groupAge,
      groupSex,
      Cardiovascular,
      Diabetes,
      Respiratory,
      Hypertension,
      Cancer,
      Stroke,
      Heart
    );
    console.log(data);
    this.props.data(data);
  };
  render() {
    var elmGroupAge: any = this.state.nameAge.map((item: any, index: any) => {
      var name: any = "groupAge";
      var lblTenGroup = [
        "0 - 17",
        "18 - 44",
        "45 - 64",
        "65 - 74",
        "75 - 100",
        "100+",
      ];
      return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2" key={index}>
          <input
            className={
              this.state.groupAge === item
                ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                : "list-group-item list-group-item-action itemNew"
            }
            type="button"
            value={lblTenGroup[index]}
            name={name.concat((index + 1).toString())}
            onClick={this.onHandleClickAge}
            id={index}
          />
        </div>
      );
    });

    var elmGroupSex: any = this.state.nameSex.map((item: any, index: any) => {
      var lblTenSex: any = ["Male", "Female"];
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
          <input
            className={
              this.state.groupSex === item
                ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                : "list-group-item list-group-item-action itemNew"
            }
            type="button"
            value={lblTenSex[index]}
            name={lblTenSex[index]}
            onClick={this.onHandleClickSex}
          />
        </div>
      );
    });

    var elmGroupCardiovascular: any = this.state.optionYesNo.map(
      (item: any, index: any) => {
        var lblnameCardiovascular: any = ["Yes", "No"];
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
            <input
              className={
                this.state.Cardiovascular === item
                  ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                  : "list-group-item list-group-item-action itemNew"
              }
              type="button"
              value={lblnameCardiovascular[index]}
              name="group-Cardiovascular"
              onClick={this.onHandleClickCardiovascular}
              id={lblnameCardiovascular[index]}
            />

          </div>
        );
      }
    );

    var elmGroupDiabetes: any = this.state.optionYesNo.map(
      (item: any, index: any) => {
        var lblDiabetes: any = ["Yes", "No"];
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
            <input
              className={
                this.state.Diabetes === item
                  ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                  : "list-group-item list-group-item-action itemNew"
              }
              type="button"
              value={lblDiabetes[index]}
              name={lblDiabetes[index]}
              onClick={this.onHandleClickDiabetes}
            />
          </div>
        );
      }
    );

    var elmGroupRespiratory: any = this.state.optionYesNo.map(
      (item: any, index: any) => {
        var lblRespiratory: any = ["Yes", "No"];
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
            <input
              className={
                this.state.Respiratory === item
                  ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                  : "list-group-item list-group-item-action itemNew"
              }
              type="button"
              value={lblRespiratory[index]}
              name={lblRespiratory[index]}
              onClick={this.onHandleClickRespiratory}
            />
          </div>
        );
      }
    );

    var elmGroupHypertension: any = this.state.optionYesNo.map(
      (item: any, index: any) => {
        var lblHypertension: any = ["Yes", "No"];
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
            <input
              className={
                this.state.Hypertension === item
                  ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                  : "list-group-item list-group-item-action itemNew"
              }
              type="button"
              value={lblHypertension[index]}
              name={lblHypertension[index]}
              onClick={this.onHandleClickHypertension}
            />
          </div>
        );
      }
    );

    var elmGroupCancer: any = this.state.optionYesNo.map(
      (item: any, index: any) => {
        var lblCancer: any = ["Yes", "No"];
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
            <input
              className={
                this.state.Cancer === item
                  ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                  : "list-group-item list-group-item-action itemNew"
              }
              type="button"
              value={lblCancer[index]}
              name={lblCancer[index]}
              onClick={this.onHandleClickCancer}
            />
          </div>
        );
      }
    );

    var elmStroke: any = this.state.optionYesNo.map((item: any, index: any) => {
      var lblStroke: any = ["Yes", "No"];
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
          <input
            className={
              this.state.Stroke === item
                ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                : "list-group-item list-group-item-action itemNew"
            }
            type="button"
            value={lblStroke[index]}
            name={lblStroke[index]}
            onClick={this.onHandleClickStroke}
          />
        </div>
      );
    });

    var elmHeart: any = this.state.optionYesNo.map((item: any, index: any) => {
      var lblHeart: any = ["Yes", "No"];
      return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
          <input
            className={
              this.state.Heart === item
                ? "list-group-item list-group-item-action itemNew active_Form_Cal"
                : "list-group-item list-group-item-action itemNew"
            }
            type="button"
            value={lblHeart[index]}
            name={lblHeart[index]}
            onClick={this.onHandleClickHeart}
          />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onHandleSubmit}>
            <div className="page">

              <div className="title-form">
                <p className="p-title">
                  <FontAwesomeIcon icon={faLungsVirus} /> COVID-19 Prognostic Tool
                  
                </p>
                <p className="p-note">
                  <FontAwesomeIcon icon={faFlagCheckered}  size="2x"/> Please answer all questions. The results will be computed once all questions are answered.
                </p>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p>Group Age?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupAge}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faRestroom} size="2x"/> Group Sex?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupSex}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faHeartbeat} size="2x"/> Cardiovascular Disease?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupCardiovascular}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faToilet} size="2x"/> Diabetes?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupDiabetes}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faLungs} size="2x"/> Chronic Respiratory Disease?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupRespiratory}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faStethoscope} size="2x"/> Hypertension?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupHypertension}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faAllergies} size="2x"/> Cancer?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmGroupCancer}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faWheelchair}size="2x" /> Prior Stroke?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmStroke}
                  </div>
                </div>
              </div>

              <div className="col-12 group-survey">
                <div>
                  <div className="lbl-tile-group">
                    <p><FontAwesomeIcon icon={faHeartBroken} size="2x"/> Heart Disease?</p>
                  </div>
                  <div className="content-survey-group">
                      {elmHeart}
                  </div>
                </div>
              </div>

              <div className="box-btn-check">
                <button
                type="submit"
                className="btn btn-primary btn-check-cal"
                onClick={this.onClick}
              >
              Check
                    </button>
              </div>
            </div>


            

          </form>
        </div>

      </div>
    );
  }
}

export default FormCalculatorRate;
