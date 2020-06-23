import React, { Component } from "react";
import "./Results.css";
import ResultAge from "./ResultsComponent/ResultAge";
import ResultSex from "./ResultsComponent/ResultSex";
interface iState {
  data: any;
}
interface iProps {
  dataResult: any;
}
class Results extends Component<iProps, iState> {
  // Được thực hiện trước khi Render
  componentWillMount() {
    this.setState({ data: this.props.dataResult });
    console.log(this.props.dataResult[0]);
  }
  // Sau khi Render thì cập nhật lại State từ props nhận được
  componentWillReceiveProps() {
    this.setState({ data: this.props.dataResult });
  }
  render() {
    // console.log(this.state.data)
    // var data: any[] = this.props.dataResult;
    var data: any[] = this.state.data;
    // var groupAge: string = data[0];
    // var valueAge: any = [0.06, 3.9, 22.4, 24.9, 48.7, 0.04];
    // var sex: string = data[1];
    // var Cardiovascular: string = data[2];
    // var Diabetes: string = data[3];
    // var Respiratory: string = data[4];
    // var Hypertension: string = data[5];
    // var Cancer: string = data[6];
    // var Stroke: string = data[7];
    // var Heart: string = data[8];

    return (
      <div>
        <div className="container">
          {/* {RenderGroupAgeUS()} */}
          <ResultAge sendAge={this.state.data[0]} />
          {/* {RenderSex()} */}
          <ResultSex sendSex={this.state.data[1]} />
        </div>
      </div>
    );
  }
}

export default Results;
