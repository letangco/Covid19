import React,{Component} from 'react';
interface iState{
  data:any []
}
interface iProps{
  dataResult:any
}
class Results extends Component <iProps, iState> {
    constructor(props:iProps){
        super(props);
        this.state={
          data: []
        }
    }
    render(){
      console.log(this.props.dataResult)
      return (
        <div>
          Results
        Please answer all questions. The results will be computed once all questions are answered.
        </div>
      )
    }
  }

export default Results;
