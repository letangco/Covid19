import React, { Component } from "react";
import "./calculatorRate.css";
interface iProps{
  data:any;
  isSubmit:any
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
  data:any,
  isSubmit: any
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
      data:[],
      isSubmit: false
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
      Cardiovascular: event.target.name,
    });
  };
  onHandleClickDiabetes = (event: any) => {
    this.setState({
      Diabetes: event.target.name,
    });
  };
  onHandleClickRespiratory = (event: any) => {
    this.setState({
      Respiratory: event.target.name,
    });
  };
  onHandleClickHypertension = (event: any) => {
    this.setState({
      Hypertension: event.target.name,
    });
  };
  onHandleClickCancer = (event: any) => {
    this.setState({
      Cancer: event.target.name,
    });
  };
  onHandleClickStroke = (event: any) => {
    this.setState({
      Stroke: event.target.name,
    });
  };
  onHandleClickHeart = (event: any) => {
    this.setState({
      Heart: event.target.name,
    });
  };
  // Bắt sự kiện khi Click thì gửi toàn bộ dữ liệu State về thằng cha calculatorRate
  onClick=()=>{
    this.setState({isSubmit:true})
    var 
    {groupAge,
    groupSex,
    Cardiovascular,
    Diabetes,
    Respiratory,
    Hypertension,
    Cancer,
    Stroke,
    Heart} = this.state;
    var data= [];
    data.push(groupAge, groupSex,Cardiovascular,Diabetes,Respiratory,Hypertension,Cancer,Stroke,Heart);
      console.log(data)
    this.props.data(data);
  }
  render() {
    var elmGroupAge: any = this.state.nameAge.map((item: any, index: any) => {
      var name: any = "groupAge";
      var lblTenGroup = [
        "1 - 19",
        "20 - 39",
        "40 - 59",
        "60 - 79",
        "80 - 99",
        "100+",
      ];
      return (
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" key={index}>
          <input
            className={
              this.state.groupAge === item
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
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
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
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
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
            <input
              className={
                this.state.Cardiovascular === item
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
              }
              type="button"
              value={lblnameCardiovascular[index]}
              name={lblnameCardiovascular[index]}
              onClick={this.onHandleClickCardiovascular}
            />
          </div>
        );
      }
    );

    var elmGroupDiabetes: any = this.state.optionYesNo.map(
      (item: any, index: any) => {
        var lblDiabetes: any = ["Yes", "No"];
        return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
            <input
              className={
                this.state.Diabetes === item
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
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
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
            <input
              className={
                this.state.Respiratory === item
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
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
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
            <input
              className={
                this.state.Hypertension === item
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
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
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
            <input
              className={
                this.state.Cancer === item
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action"
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
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
          <input
            className={
              this.state.Stroke === item
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
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
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
          <input
            className={
              this.state.Heart === item
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
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
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onHandleSubmit} className="form-horizontal">
            <div className="form-group">
              <legend>COVID-19 Prognostic Tool</legend>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="panel panel-primary">
                    {/* {Group Age} */}
                    <span className="label label-success">Group Age</span>
                    <div className="panel-body">
                      {/* Đổ component xử lý click cho GroupAge */}
                      {elmGroupAge}
                    </div>

                    <span className="label label-warning">Sex?</span>
                    <div className="panel-body">
                      <div className="list-group" id="list-tab" role="tablist">
                        {/* Group Sex */}
                        {elmGroupSex}
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Cardiovascular Disease?</h3>
                      </div>
                      <div className="panel-body">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          {/* Group Cardiovascular Disease*/}
                          {elmGroupCardiovascular}
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Diabetes?</h3>
                      </div>
                      <div className="panel-body">
                        {/* {Group Diabetes} */}
                        {elmGroupDiabetes}
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">
                          Chronic Respiratory Disease?
                        </h3>
                      </div>
                      <div className="panel-body">
                        {/* Chronic Respiratory Disease? */}
                        {elmGroupRespiratory}
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Hypertension?</h3>
                      </div>
                      <div className="panel-body">
                        {/* Hypertension */}
                        {elmGroupHypertension}
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Cancer?</h3>
                      </div>
                      <div className="panel-body">
                        {/* Cancer */}
                        {elmGroupCancer}
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Prior Stroke?</h3>
                      </div>
                      <div className="panel-body">
                        {/* Stroke */}
                        {elmStroke}
                      </div>
                    </div>

                    <div className="panel panel-warning">
                      <div className="panel-heading">
                        <h3 className="panel-title">Heart Disease?</h3>
                      </div>
                      <div className="panel-body">
                        {/* Heart */}
                        {elmHeart}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onClick}>
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default FormCalculatorRate;
