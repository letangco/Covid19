import React,{Component} from 'react';
import axios from 'axios';
import { Table } from 'antd';
import './Dashboard.css';
//Thư viện table
import 'antd/dist/antd.css';
interface IProps{
}
interface IState{
    data :any [],
    filteredInfo : any ,
    sortedInfo: any
}

class Stats extends Component <{}, IState> {
    constructor (props: IState){
        super (props);
        this.state={
            data : [],
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

    //  Country(obj: unknown) {
    //     return obj;
    //   }
    // componentDidMount(){
    //     let Arr = [];
        
    //     axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
    //     .then(res =>{
    //         var country = [],confirmed = [], death = [], recovered = [];
    //         Arr = (Object.entries(res.data.countryitems[0]));
    //         for (let i =0 ; i<Arr.length;i++)
    //         {
    //             let temArr = Arr[i];
                
    //             // Thêm any trước khai báo một object để lấy tên trong json ***QUAN TRỌNG
    //             let newtemArr: any = temArr[1];
                
    //             // console.log(newtemArr.title);
    //             // console.log(newtemArr.total_cases)
    //             country.push(newtemArr.title);
    //             confirmed.push(newtemArr.total_cases);
    //             death.push(newtemArr.total_deaths);
    //             recovered.push(newtemArr.total_recovered);
    //             this.setState({
    //                 country: country,
    //                 confirmed: confirmed,
    //                 death: death,
    //                 recovered: recovered
    //             });
    //         }
    //     });
    // }
    componentDidMount(){
        let Arr = [];
        var data:any = [];
        // Bảng danh sách table 
        axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
        .then(res =>{
            Arr = (Object.entries(res.data.countryitems[0]));
            for (let i =0 ; i<Arr.length;i++)
            {
                let temArr = Arr[i];
                data.push(temArr[1]);
                // Thêm any trước khai báo một object để lấy tên trong json ***QUAN TRỌNG
            }
            // console.log(data);
            this.setState({
                data: data
            })
        });
    }
    // renderTableData() {
    //     return this.state.data.map((item, index) => {
    //     //    const { title, total_cases, total_deaths, total_recovered} = item //destructuring ES6
    //        return (
    //           <tr key={index}>
    //             <td>{item.title}</td>
    //             <td>{item.total_cases}</td>
    //             <td>{item.total_new_cases_today}</td>
    //             <td>{item.total_deaths}</td>
    //             <td>{item.total_new_deaths_today}</td>
    //             <td>{item.total_recovered}</td>
    //           </tr>
    //        )
    //     })
    //  }
    
  render(){
    let {sortedInfo} = this.state;
    sortedInfo = sortedInfo || {};
      //Table mới
      // Dạng [{...},...]
      const columns1 = [
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
          width: 150,
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
          width: 100,
          sorter:(a :any,b :any) => a.confirmed -b.confirmed,
          sortOrder: sortedInfo.columnKey==='confirmed'&&sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'New Confirmed',
          dataIndex: 'newConfirmed',
          key: 'newConfirmed',
          width: 110,
          sorter:(a :any,b :any) => a.newConfirmed -b.newConfirmed,
          sortOrder: sortedInfo.columnKey==='newConfirmed'&&sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Death',
          dataIndex: 'death',
          key: 'death',
          width: 100,
          sorter: (a:any, b:any) => a.death - b.death,
          sortOrder: sortedInfo.columnKey === 'death' && sortedInfo.order,
          ellipsis: true
        },
        {
          title: 'New Death',
          dataIndex: 'newDeath',
          key: 'newDeath',
          width: 100,
          sorter:(a :any,b :any) => a.newDeath -b.newDeath,
          sortOrder: sortedInfo.columnKey==='newDeath'&&sortedInfo.order,
          ellipsis: true,
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            key: 'recovered',
            width: 100,
            sorter: (a:any, b:any) => a.recovered - b.recovered,
            sortOrder: sortedInfo.columnKey === 'recovered' && sortedInfo.order,
            ellipsis: true
          },
          {
            title: 'Serious Cases',
            dataIndex: 'seriouscase',
            key: 'seriouscase',
            width: 100,
            sorter:(a :any,b :any) => a.seriouscase -b.seriouscase,
            sortOrder: sortedInfo.columnKey==='seriouscase'&&sortedInfo.order,
            ellipsis: true,
          }
      ];
      var newColumns =[];
      newColumns= this.state.data;
        const data2 = [];
        for (var i=0; i<newColumns.length-1;i++)
        {
            var flag :any= this.state.data[i].code.toString().toLowerCase();
            var valueFlag:any = "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/"+flag+".svg";
            data2.push({
                // truyền key vào để xác định vị trí cho arr sử dụng load ra cho table
                key: i,
                country: <div>
                          <img src={valueFlag} width="40" alt="Flag State"/> {newColumns[i].title}
                      </div>,
                confirmed: newColumns[i].total_cases,
                newConfirmed: newColumns[i].total_new_cases_today,
                death:newColumns[i].total_deaths,
                newDeath: newColumns[i].total_new_deaths_today,
                recovered:newColumns[i].total_recovered,
                seriouscase: newColumns[i].total_serious_cases
            });
        }
    return (
                    <div className="panel panel-warning">
                          <div className="panel-heading">
                                <h4>World COVID-19 Stats</h4>
                          </div>
                          <div className="panel-body divtableStats">
                                
                                {/* <table className="table table-striped table-bordered table-sm" id="myTable">
                                    <thead>
                                        <tr>
                                            <th className="th-sm">Country</th>
                                            <th className="th-sm">Confirmed</th>
                                            <th className="th-sm">Confirmed Today</th>
                                            <th className="th-sm">Deaths</th>
                                            <th className="th-sm">Deaths Today</th>
                                            <th className="th-sm">Recovered</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderTableData()}
                                    </tbody>
                                </table> */}
                                <Table className="tableStats" columns={columns1}  dataSource={data2} pagination={{ pageSize: 100 }} scroll={{y: 1500}} onChange={this.handleChange} />
                          </div>
                    </div>
        
    );
  }
}

export default Stats;
