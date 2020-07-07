import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import DotRed from '../image/Red_dot.gif';
import './TimeUpdates.css';
interface IState{
    timeUpdate: any
}
class TimeUpdates extends Component <{},IState>{
    constructor(props:any)
    {
        super(props);
        this.state={
            timeUpdate: ""
        }
    }
    componentDidMount() {
        // Hiển thị số liệu quickFact
        axios.get('https://api.covid19api.com/total/dayone/country/south-africa')
            .then(res => {
                this.setState({
                    timeUpdate: res.data[res.data.length - 1].Date
                })
            })
    }
  render() {
      var timeUpdate:any = this.state.timeUpdate;
    return (
      <div className="updateAt">
          <p>Updated at: <Moment format="h:mm YYYY/MM/DD">{timeUpdate}</Moment> &nbsp;
          <img src={DotRed} alt="live" width="25px"/></p>
      </div>
    );
  }
}
export default TimeUpdates;
