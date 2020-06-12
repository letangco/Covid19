import React, {Component }from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Moment from 'react-moment';
interface Iprops{

}
interface IState {
    timeUpdate: 'Sun Jun 07 2020',
    totalConfirmed:0,
    totalDeath: 0,
    totalRecovered: 0
}
class QuickFact extends Component{
    
    // constructor(props: IState)
    // {
    //     super(props);
    // }
    state={
        timeUpdate: 'Sun Jun 07 2020',
        totalConfirmed:0,
        totalDeath: 0,
        totalRecovered: 0
    }
    componentDidMount(){
        var totalConfirmed,totalDeath, totalRecovered;
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
        .then(res => {
            
            totalConfirmed = res.data.results[0].total_cases;
            totalDeath = res.data.results[0].total_deaths;
            totalRecovered = res.data.results[0].total_recovered;
            this.setState({
                totalConfirmed: totalConfirmed,
                totalDeath : totalDeath,
                totalRecovered: totalRecovered
            })
        }).catch(error => console.log(error));
        // Get TimeUpdates
        axios.get('https://api.covid19api.com/total/dayone/country/south-africa')
        .then (res =>{
            // console.log(res.data[res.data.length-1].Date);
            this.setState({
                timeUpdate : res.data[res.data.length-1].Date
            })
        })
    }
    // componentDidMount(value){
    //     this.props.receiveData()
    // }
    render (){
        var {totalConfirmed, totalDeath,totalRecovered, timeUpdate} = this.state;
        
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="panel panel-danger">
                          <div className="panel-heading">
                                <h1 className="panel-title">QUICK FACT</h1>
                                {/* {Sử dụng Library React-Moment để chuyển ngày} */}
                                <span className="label label-warning">Updated at: <Moment format="h:mm:ss dddd YYYY/MM/DD">{timeUpdate}</Moment></span>
                          </div>
                          <div className="panel-body">
                            <div className="panel panel-primary confirmed">
                                <div className="panel-heading">
                                    <h3>Total Confirmed</h3>
                                </div>
                                <div className="panel-body">
                                    <h1>
                                        <span className="label label-primary">
                                            <CountUp start={0} end={totalConfirmed} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>
                            </div>

                            <div className="panel panel-danger death">
                                <div className="panel-heading">
                                    <h3>Total Death</h3>
                                </div>
                                <div className="panel-body">
                                    <h1>
                                        <span className="label label-danger">
                                            <CountUp start={0} end={totalDeath} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                            <div className="panel panel-success recovered">
                                <div className="panel-heading">
                                    <h3>Total Death</h3>
                                </div>
                                <div className="panel-body">
                                    <h1>
                                        <span className="label label-success">
                                            <CountUp start={0} end={totalRecovered} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
        );
    }
}
export default QuickFact;