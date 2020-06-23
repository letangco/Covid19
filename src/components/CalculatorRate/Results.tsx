import React, { Component } from "react";
import "./Results.css";
import ResultAge from "./ResultsComponent/ResultAge";
import ResultSex from "./ResultsComponent/ResultSex";
import ResultCardiovascular from './ResultsComponent/ResultCardiovascular';
import ResultDiabetes from './ResultsComponent/ResultDiabetes';
import ResultRespiratory from './ResultsComponent/ResultRespiratory';
import Hypertension from './ResultsComponent/ResultHypertension';
import ResultCancer from './ResultsComponent/ResultCancer';
import ResultStroke from './ResultsComponent/ResultStroke';
import ResultHeart from './ResultsComponent/ResultHeart';
import ResultFinal from './ResultsComponent/ResultFinal';
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
          <ResultFinal sendDataResult={this.state.data} />
          <ResultAge sendAge={this.state.data[0]} />
          {/* {RenderSex()} */}
          <ResultSex sendSex={this.state.data[1]}/>
          <ResultCardiovascular sendCardiovascular={this.state.data[2]} />
          <ResultDiabetes sendDiabetes = {this.state.data[3] }/>
          <ResultRespiratory sendRespiratory={this.state.data[4]}/>
          <Hypertension sendHypertension ={this.state.data[5]}/>
          <ResultCancer sendCancer={this.state.data[6]}/>
          <ResultStroke sendStroke ={this.state.data[7]}/>
          <ResultHeart sendHeart={this.state.data[8]}/>
          
        </div>
      </div>
    );
  }
}

export default Results;
