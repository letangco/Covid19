import React, { Component } from "react";
import FormCalculatorRate from "./FormCalculatorRate";
import Results from "./Results";
interface IState {
  data:any;
  isShow:any
}
class calculatorRate extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data:[],
      isShow:false
    };
  }
  // Hứng dữ liệu được gửi từ con FormCalculatorRate
  onReceiveData = (value: any) =>{
    this.setState({data:value})
  }
  onReceiveIsSubmit =(value:any)=>{
    this.setState({isShow:value})
  }
  render() {
    return (
      <div>
        <FormCalculatorRate data={this.onReceiveData} isSubmit={this.onReceiveIsSubmit}/>
        {this.state.isShow===true ? <Results dataResult = {this.state.data}/> : ""}
      </div>
    );
  }
}
export default calculatorRate;
