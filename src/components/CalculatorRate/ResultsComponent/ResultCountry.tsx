import React, { Component } from "react";
import Approximately from '../../image/Approximately.png';
interface IProps {
    sendCountry: any;
    sendSourceCountry: any;
}
interface IState {
    confirmedCountry:any;
    deathCountry:any;
    resultFinalCountry:any;
}
class ResultCountry extends Component<IProps, IState> {
    constructor(props:IProps){
        super(props);
        this.state={
            resultFinalCountry:2.89,
            deathCountry:994,
            confirmedCountry:34366
        }
    }
    render() {
        var Country: any = this.props.sendCountry;
        console.log(Country)
        var SourceCountry: any = this.props.sendSourceCountry;
        // console.log(valueResultFinalCountry)
        function RenderResultCountry() {
            for (var i: any = 0; i < SourceCountry.length; i++) {
                if (SourceCountry[i].CountryCode === Country) {
                    return <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">I'm from {SourceCountry[i].Country}</h3>
                        </div>
                        <div className="panel panel-warning mg-20">
                            <div className="panel-heading pd-25">
                                <h3 className="panel-title">
                                Sources: covid-19-coronavirus-infographic-datapack, our world in data, cov19
                      </h3>
                                <p className="valueResult">Total Confirmed: {SourceCountry[i].TotalConfirmed}</p>
                                <p className="valueResult">Total Deaths: {SourceCountry[i].TotalDeaths}</p>
                                <p className="valueResult">Result: {(SourceCountry[i].TotalDeaths!==0)?(parseFloat(SourceCountry[i].TotalDeaths)/parseFloat(SourceCountry[i].TotalConfirmed)*100).toFixed(4): (<><img src ={Approximately} width="20px"/>0</>)}%</p>
                            </div>
                        </div>
                    </div>
                }
            }
        }

        return <div>{RenderResultCountry()}</div>;
    }
}

export default ResultCountry;
