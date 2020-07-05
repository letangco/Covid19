import React, { Component } from 'react';
import './Dashboard.css';
import TableThongKe from './TableThongKe';
import QuickFact from './QuickFact';
import ChartStats from './ChartDashBoard/ChartStats';
import PieChartStats from './ChartDashBoard/PieChartStats';
import MapVietNam from '../mapDistribute/mapVietNam';
interface IProps {

}
interface IState {
    data: {}
}

class Dashboard extends Component {
    constructor(props: IState) {
        super(props);
        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <div className="container-fluid background-dashboard">
                <QuickFact />

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <ChartStats />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <PieChartStats />
                </div>
                {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <MapVietNam />
                </div>  */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                    <TableThongKe />
                </div>

            </div>
        );
    }
}
export default Dashboard;
