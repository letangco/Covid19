import React,{Component} from 'react';
import './Dashboard.css';

import QuickFact from './QuickFact';
import ChartStats from './ChartDashBoard/ChartStats';
import PieChartStats from './ChartDashBoard/PieChartStats';
// import Stats from './Stats';
// import USA from './USA';
// import Canada from './Canada';
// import China from './China';
// import Australia from './Australia';
// import Italy from './Italy';
// import Russia from './Russia';
// import Ireland from './Ireland';
import OptionState from  './OptionState';
interface IProps{

}
interface IState{
    data: {}
}

class Dashboard extends Component {
    constructor(props: IState)
    {
        super(props);
        this.state = {
            data : {}
        }
    }
    
  render(){
    return (
        <div className="container-fluid">
            {/* {Content} */}
            <div className="row">
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <QuickFact />
                </div>
            </div>
            
            <div className="row stats">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        
                        <div className="row  chartStats">
                            <ChartStats />
                        </div>
                        <div className="row  chartStats">
                            <PieChartStats />
                        </div>
                        
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        
                        <div className="row">
                            <OptionState />
                        </div>
                        
                    </div>
                    
                </div>
                
                
            </div>
            
        </div>
        
        
    );
  }
}
export default Dashboard;
