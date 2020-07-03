import React, { Component } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import Moment from 'react-moment';
import './QuickFact.css';
interface Iprops {

}
interface IState {
    timeUpdate: 'Sun Jun 07 2020',
    totalConfirmed: 0,
    totalDeath: 0,
    totalRecovered: 0,
    totalNewCase: 0,
    totalNewDeathCase: 0,
    totalActiveCase: 0,
}
class QuickFact extends Component {
    state = {
        timeUpdate: 'Sun Jun 07 2020',
        totalConfirmed: 0,
        totalDeath: 0,
        totalRecovered: 0,
        totalNewCase: 0,
        totalNewDeathCase: 0,
        totalActiveCase: 0,
    }
    componentDidMount() {
        var totalConfirmed, totalDeath, totalRecovered, totalNewCase, totalNewDeathCase, totalActiveCase;
        // Hiển thị số liệu quickFact

        axios.get('https://api.thevirustracker.com/free-api?global=stats')
            .then(res => {

                totalConfirmed = res.data.results[0].total_cases;
                totalDeath = res.data.results[0].total_deaths;
                totalRecovered = res.data.results[0].total_recovered;
                totalNewCase = res.data.results[0].total_new_cases_today;
                totalNewDeathCase = res.data.results[0].total_new_deaths_today;
                totalActiveCase = res.data.results[0].total_active_cases;
                this.setState({
                    totalConfirmed: totalConfirmed,
                    totalDeath: totalDeath,
                    totalRecovered: totalRecovered,
                    totalNewCase: totalNewCase,
                    totalNewDeathCase: totalNewDeathCase,
                    totalActiveCase: totalActiveCase
                })
            }).catch(error => console.log(error));
        // Get TimeUpdates
        axios.get('https://api.covid19api.com/total/dayone/country/south-africa')
            .then(res => {
                // console.log(res.data[res.data.length-1].Date);
                this.setState({
                    timeUpdate: res.data[res.data.length - 1].Date
                })
            })
    }
    // componentDidMount(value){
    //     this.props.receiveData()
    // }
    onReceiveData(value: any) {
        console.log(value)
    }
    render() {
        var { totalConfirmed, totalDeath, totalRecovered, timeUpdate, totalNewCase, totalNewDeathCase, totalActiveCase } = this.state;
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h1 className="panel-title">QUICK FACT</h1>
                    {/* {Sử dụng Library React-Moment để chuyển ngày} */}
                    <span className="label label-warning">Updated at: <Moment format="h:mm:ss dddd YYYY/MM/DD">{timeUpdate}</Moment></span>
                </div>

                <div className="panel-body">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="panel panel-primary confirmed">
                            <div className="panel-heading">
                                <h3>Confirmed Case</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5>Total Confirmed</h5>
                                    <h1>
                                        <span className="label label-primary">
                                            <CountUp start={0} end={totalConfirmed} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5>New Confirmed today</h5>
                                    <h1>
                                        <span className="label label-primary">
                                            <CountUp start={0} end={totalNewCase} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="panel panel-danger death">
                            <div className="panel-heading">
                                <h3>Death Cases</h3>
                            </div>
                            <div className="panel-body">

                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5>Total Death</h5>
                                    <h1>
                                        <span className="label label-danger">
                                            <CountUp start={0} end={totalDeath} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5>New Death today</h5>
                                    <h1>
                                        <span className="label label-danger">
                                            <CountUp start={0} end={totalNewDeathCase} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="panel panel-success recovered">
                            <div className="panel-heading">
                                <h3>Recovered Case</h3>
                            </div>
                            <div className="panel-body">

                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5>Total Recovered</h5>
                                    <h1>
                                        <span className="label label-success">
                                            <CountUp start={0} end={totalRecovered} duration={3} separator="," />
                                        </span>
                                    </h1>

                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5>Total Active Case</h5>
                                    <h1>
                                        <span className="label label-success">
                                            <CountUp start={0} end={totalActiveCase} duration={3} separator="," />
                                        </span>
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default QuickFact;