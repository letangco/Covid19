import React,{Component} from 'react';
import './dashboard.css';

import State from './Stats';
import QuickFact from './QuickFact';
import Menu from './Menu';

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
            <div className = "row"> 
                <Menu />
            </div>
            {/* {Content} */}
            <div className="row">
                {/* {QuickFact} */}
                <QuickFact />
                <br/>
                
                {/* {Số liệu} */}
                <State />
            </div>
        </div>
        
        
    );
  }
}

export default Dashboard;
