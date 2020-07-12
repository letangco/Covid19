import React, { Component } from "react";
interface IProps {
    sendCountry: any;
    sendSourceCountry: any;
}
interface IState { }
class ResultCountry extends Component<IProps, IState> {
    render() {
        var Country: any = this.props.sendCountry;
        var SourceCountry: any = this.props.sendSourceCountry;
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
                                    Country Specific Fatality Rate (US Data)
                      </h3>
                                <p>
                                    We are collecting and analyzing the data from all US
                                    States. In the meantime, below we show the data provided
                                    by New York City Health as of May 13, 2020.
                      </p>
                                <p className="valueResult">Total Confirmed: {SourceCountry[i].TotalConfirmed}</p>
                                <p className="valueResult">Total Deaths: {SourceCountry[i].TotalDeaths}</p>
                                <p className="valueResult">Result: {(parseFloat(SourceCountry[i].TotalDeaths)/parseFloat(SourceCountry[i].TotalConfirmed)).toFixed(3)}</p>
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
