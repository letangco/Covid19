import React, { Component } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { ReactSVG } from 'react-svg';
import './QuickFact.css';
import Live from '../image/Live-1.gif';
import Patient from '../image/patient.png';
import Virus from '../image/virus.png';
import Recovered from '../image/recover.jpg';
interface Iprops {

}
interface IState {
    totalConfirmed: 0,
    totalDeath: 0,
    totalRecovered: 0,
    totalNewCase: 0,
    totalNewDeathCase: 0,
    totalActiveCase: 0,
}
class QuickFact extends Component {
    state = {
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

    }
    // componentDidMount(value){
    //     this.props.receiveData()
    // }
    onReceiveData(value: any) {
        console.log(value)
    }
    render() {
        var { totalConfirmed, totalDeath, totalRecovered, totalNewCase, totalNewDeathCase, totalActiveCase } = this.state;
        return (

            <div className="container">
                <div className="row">
                    <div className="title-quick-fact">
                        <div>
                            <span>Totals <img src={Live} alt="Live" width="40px" /></span>
                            <p><i className="fa fa-bullhorn" > specific country data may be delayed</i></p>
                            <div className="skills">
                                <hr className="hr-text" data-content="QUICK FACT COVID-19 Tracker" />
                            </div>
                            {/* <hr className="fade-2"></hr> */}
                        </div>
                    </div>
                </div>

                <div className="row card-quick-fact">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 card-item-quickFact">
                        <div className="shadow p-3 mb-5 bg-white rounded card-content-quickFact">
                            <p className="card-border-title">
                                <span>Confirmed Cases</span> <img src={Patient} width="35em" alt="TotalConfirmed" />
                                <hr className="fade-2"/>
                            </p>

                            <p className="heading-quick-fact">Total Confirmed</p>
                            <div className="shadow-number-value">
                                <p className="value-totalConfirmed"><CountUp start={0} end={totalConfirmed} duration={3} separator="," /></p>

                            </div>
                            <p className="heading-quick-fact">New Confirmed today</p>
                            <div className="shadow-number-value">
                                <p className="value-newConfirmed"><CountUp start={0} end={totalNewCase} duration={3} separator="," /></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 card-item-quickFact">
                        <div className="shadow p-3 mb-5 bg-white rounded card-content-quickFact">
                            <p className="card-border-title">
                                <span>Death Cases</span> <img src={Virus} alt="logoCorona" width="35em" />
                                <hr className="fade-2"/>
                            </p>
                            <p className="heading-quick-fact">Total Death</p>
                            <div className="shadow-number-value">
                                <p className="value-total-DeathsCase"><CountUp start={0} end={totalDeath} duration={3} separator="," /></p>
                            </div>
                            <p className="heading-quick-fact">New Death today</p>
                            <div className="shadow-number-value">
                                <p className='value-total-new-DeathsCase'><CountUp start={0} end={totalNewDeathCase} duration={3} separator="," /></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 card-item-quickFact">
                        <div className="shadow p-3 mb-5 bg-white rounded card-content-quickFact">
                            <p className="card-border-title">
                                <span>Recovered Case</span> <img src={Recovered} alt="Recovered" width="35em" />
                                <hr className="fade-2"/>
                            </p>
                            <p className="heading-quick-fact">Total Recovered</p>
                            <div className="shadow-number-value">
                                <p className="value-total-RecoveredCases"><CountUp start={0} end={totalRecovered} duration={3} separator="," /></p>
                            </div>
                            <p className="heading-quick-fact">Total Active Case</p>
                            <div className="shadow-number-value">
                                <p className="value-total-active-cases"><CountUp start={0} end={totalActiveCase} duration={3} separator="," /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default QuickFact;