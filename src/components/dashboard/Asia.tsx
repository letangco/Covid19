import React,{Component} from 'react';
import { Table } from 'antd';
import './Dashboard.css';
//Thư viện table
import 'antd/dist/antd.css';
import {fetchAsiaData,SummaryStats,fetchAsiaSummaryData} from '../../api/dashboard/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
interface IProps{
}
interface IState{
    dataStats: any [],
    data :any [],
    dataAsia: any [],
    dataTotal:any ,
    filteredInfo : any ,
    sortedInfo: any
}

class Asia extends Component <{}, IState> {
    constructor (props: IState){
        super (props);
        this.state={
            dataStats: [],
            data : [],
            dataTotal: {},
            dataAsia: [],
            filteredInfo: null,
            sortedInfo: null
        }
    }
    handleChange = (pagination:any,filter:any, sort: any )=>{
      this.setState({
        filteredInfo: filter,
        sortedInfo:sort
      })
    }
    // Reset Button Filter.
    clearFilter = ()=>{
      this.setState({filteredInfo: null});
    }
    // Reset All button filter and sort
    clearAll = ()=>{
      this.setState ({
        filteredInfo: null,
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
    componentDidMount(){
        const fetchMyAPI = async () => {
            const initialDailyData:any = await fetchAsiaData();
            this.setState({
              data: initialDailyData,
            })
          };
          fetchMyAPI();
          const fetchMyAPI_Summary = async () => {
            const initialDailyData:any = await SummaryStats();
            this.setState({
                dataStats: initialDailyData,
            })
          };
          fetchMyAPI_Summary();
          const fetchMyAPI_Summary_Total = async () => {
            const initialDailyData:any = await fetchAsiaSummaryData();
            this.setState({
                dataTotal: initialDailyData,
            })
          };
          fetchMyAPI_Summary_Total();
    }
    DataFilter()
    {
        var summary :any = this.state.dataStats;
        // console.log(summary)
        // Loc
        var filter : any =this.state.data;
        var dataAsia :any = [];
        for (var i = 0; i<summary.length; i++)
        {
            var sum :any= summary[i].CountryCode.toString().toLowerCase();
            for(var j = 0; j<filter.length;j++)
            {
                if(sum=== filter[j])
                    {
                        dataAsia.push(summary[i]);
                        // console.log(summary[i])
                    }
            }
        }
        return dataAsia;
    }
    numberWithCommas(x:any) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    DeleteCommas(x:any) {
      var temp:any =0;
      var index:any =0;
      for (var i:any = x.toString().length-1; i>=0; i--)
      {
        if(x[i]!==',')
        {
          temp= temp + parseInt(x[i])*Math.pow(10,index);
          index++;       
        }
      }
      return temp;
    }
  render(){
    let {sortedInfo} = this.state;
    // TatCaQuocgia
    sortedInfo = sortedInfo || {};
      // Dạng [{...},...]
      const columns1 = [
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
          width: 10,
          filters: [
            { text: 'VN', value: 'VietNam' },
            { text: 'B', value: 'A' },
          ],
          // sorter: (a:any, b:any) => a.country.length - b.country.length,
          sortOrder: sortedInfo.columnKey === 'country' && sortedInfo.order,
          ellipsis: true,
          
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
          render: (value:any, index:any, key:any)=>{
            console.log(index)
            if(data2[index.key])
            {
              return <div>       
              <FontAwesomeIcon icon={faArrowUp}/> {value} ({parseFloat(value)/parseFloat(data2[index.key].confirmed)*100}%)
              {/* <FontAwesomeIcon icon={faArrowUp}/> {value} ({((parseFloat(value)/this.DeleteCommas(data2[index.key].confirmed))*100).toFixed(3)}%) */}
            </div>;
            }
            else{
              return <div>       
              <FontAwesomeIcon icon={faArrowUp}/> {value}
              
            </div>;
            }
          }
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
            title: 'New Recovered',
            dataIndex: 'newRecovered',
            key: 'newRecovered',
            // width: 100,
            sorter:(a :any,b :any) => a.newRecovered -b.newRecovered,
            sortOrder: sortedInfo.columnKey==='newRecovered'&&sortedInfo.order,
            ellipsis: true,
          }
      ];
      var newColumns =[];
      newColumns= this.DataFilter();
    //   var dataAsia:any = this.DataFilter();
        const data2:any = [];
        data2.push(
          {
          country: <p className="label label-danger">TOTAL</p>,
          confirmed: this.state.dataTotal.cases,
          newConfirmed: this.state.dataTotal.todayCases,
          death:this.state.dataTotal.deaths,
          newDeath: this.state.dataTotal.todayDeaths ,
          recovered:this.state.dataTotal.recovered,
          newRecovered: this.state.dataTotal.todayRecovered >= 0 ? this.state.dataTotal.todayRecovered : "not update"
          }
        );
        for (var i=0; i<newColumns.length;i++)
        {
            var flag :any= newColumns[i].CountryCode.toString().toLowerCase();
            var valueFlag:any = "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/"+flag+".svg";
            data2.push({
                // truyền key vào để xác định vị trí cho arr sử dụng load ra cho table
                key: i,
                country: <div>
                    <img src={valueFlag} width="40" alt="Flag State"/>  {newColumns[i].Country}
                </div>,
                confirmed: newColumns[i].TotalConfirmed,
                newConfirmed: newColumns[i].NewConfirmed >=0? newColumns[i].NewConfirmed : "not update",
                death:newColumns[i].TotalDeaths >=0 ? newColumns[i].TotalDeaths : "not update",
                newDeath: newColumns[i].NewDeaths >=0 ?newColumns[i].NewDeaths: "not update" ,
                recovered:newColumns[i].TotalRecovered >= 0 ? newColumns[i].TotalRecovered : "not update",
                newRecovered: newColumns[i].NewRecovered >= 0 ? newColumns[i].NewRecovered : "not update",
            });
        }
    return (
                    <div className="panel panel-warning">
                          <div className="panel-heading">
                                <h4>Asia COVID-19 Stats</h4>
                          </div>
                          <div className="panel-body divtableStats">
                                <Table className="tableStats" columns={columns1} tableLayout="auto" size="large" dataSource={data2}  onChange={this.handleChange} />
                          </div>
                          
                    </div>
        
    );
  }
}

export default Asia;
