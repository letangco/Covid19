import React,{Component} from 'react';
import Moment from 'react-moment';
import { Table } from 'antd';
import './Dashboard.css';
//Thư viện table
import 'antd/dist/antd.css';
import {fetchChinaData} from '../../api/dashboard/index';
interface IProps{
}
interface IState{
     
    data :any [],
    filteredInfo : any ,
    sortedInfo: any,
    dataTotal:any [],
    lastUpdatates: any
}

class China extends Component <{}, IState> {
    constructor (props: IState){
        super (props);
        this.state={
            data : [],
            filteredInfo: null,
            dataTotal: [],
            sortedInfo: null,
            lastUpdatates: ""
        }
    }
    handleChange = (pagination:any,filter:any, sort: any )=>{
      this.setState({
        sortedInfo:sort
      })
    }
    
    // Reset All button filter and sort
    clearAll = ()=>{
      this.setState ({
        sortedInfo: null
      })
    }
    //
    SortConfirmed =()=>{
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnkey: 'confirmed'
        }
      })
    }

     Country(obj: unknown) {
        return obj;
      }
    
    componentDidMount(){
      const fetchMyAPI = async () => {
          const initialDailyData:any = await fetchChinaData();
          this.setState({
            data: initialDailyData.regions.china.list,
            dataTotal: initialDailyData.regions.china.totals,
            lastUpdatates: initialDailyData.last_updated
          })
        };
        fetchMyAPI();
        
  }
  render(){
    let {sortedInfo} = this.state;
    sortedInfo = sortedInfo || {};
      // Dạng [{...},...]
      const columns1 = [
        {
          title: 'Name State',
          dataIndex: 'country',
          key: 'country',
          width: 10,
        },
        {
          title: 'Confirmed',
          dataIndex: 'confirmed',
          key: 'confirmed',
          // width: 100,
          sorter:(a :any,b :any) => a.confirmed -b.confirmed,
          sortOrder: sortedInfo.columnKey==='confirmed'&&sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'New Confirmed',
          dataIndex: 'newConfirmed',
          key: 'newConfirmed',
          // width: 100,
          sorter:(a :any,b :any) => a.newConfirmed -b.newConfirmed,
          sortOrder: sortedInfo.columnKey==='newConfirmed'&&sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Death',
          dataIndex: 'death',
          key: 'death',
          // width: 100,
          sorter: (a:any, b:any) => a.death - b.death,
          sortOrder: sortedInfo.columnKey === 'death' && sortedInfo.order,
          ellipsis: true
        },
        {
          title: 'New Death',
          dataIndex: 'newDeath',
          key: 'newDeath',
          // width: 100,
          sorter:(a :any,b :any) => a.newDeath -b.newDeath,
          sortOrder: sortedInfo.columnKey==='newDeath'&&sortedInfo.order,
          ellipsis: true,
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            key: 'recovered',
            // width: 100,
            sorter: (a:any, b:any) => a.recovered - b.recovered,
            sortOrder: sortedInfo.columnKey === 'recovered' && sortedInfo.order,
            ellipsis: true
          },
          {
            title: 'Last Updated',
            dataIndex: 'updated',
            key: 'updated',
            // width: 100,
            sorter:(a :any,b :any) => a.updated -b.updated,
            sortOrder: sortedInfo.columnKey==='updated'&&sortedInfo.order,
            ellipsis: true,
          }
      ];
      var newColumns =[];
      newColumns= this.state.data;
      var dataChina:any = this.state.dataTotal;
        const data2 = [];
        data2.push(
          {key: 0,
          country: <p className="label label-danger">TOTAL</p>,
          confirmed: dataChina.confirmed,
          newConfirmed: dataChina.daily_deaths,
          death:dataChina.deaths,
          newDeath: dataChina.daily_deaths ,
          recovered:dataChina.recovered,
          updated: <Moment fromNow>{this.state.lastUpdatates.toString()}</Moment>}
        );
        for (var i=0; i<newColumns.length;i++)
        {
            data2.push({
                // truyền key vào để xác định vị trí cho arr sử dụng load ra cho table
                key: i,
                country: <div>
                  <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/cn.svg" width="40" alt="Flag China"/> {newColumns[i].state}
                </div>,
                confirmed: newColumns[i].confirmed,
                newConfirmed: newColumns[i].daily_confirmed >=0? newColumns[i].daily_confirmed : "not update",
                death:newColumns[i].deaths >=0 ? newColumns[i].deaths : "not update",
                newDeath: newColumns[i].daily_deaths >=0 ?newColumns[i].daily_deaths: "not update" ,
                recovered:newColumns[i].recovered >= 0 ? newColumns[i].recovered : "not update",
                updated: <Moment fromNow>{newColumns[i].last_updated.toString()}</Moment>
            });
        }
    return (
                    <div className="panel panel-warning">
                          <div className="panel-heading">
                                <h4>China COVID-19 Stats</h4>
                          </div>
                          <div className="panel-body divtableStats">
                               
                                <Table className="tableStats" columns={columns1}  dataSource={data2} 
                                tableLayout="auto" size="large"
                                 onChange={this.handleChange}
                                 />
                          </div>
                    </div>
        
    );
  }
}

export default China;
