import React,{Component} from 'react';
import axios from 'axios';
import { Table } from 'antd';
import './dashboard.css';
//Thư viện table
import 'antd/dist/antd.css';

interface IProps{
}
interface IState{
     
    data :any [
        
    ]
}

class Stats extends Component <{}, IState> {
    constructor (props: IState){
        super (props);
        this.state={
            data : []
        }
    }
     Country(obj: unknown) {
        
        return obj;
      }
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
    renderTableData() {
        return this.state.data.map((item, index) => {
        //    const { title, total_cases, total_deaths, total_recovered} = item //destructuring ES6
           return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.total_cases}</td>
                <td>{item.total_new_cases_today}</td>
                <td>{item.total_deaths}</td>
                <td>{item.total_new_deaths_today}</td>
                <td>{item.total_recovered}</td>
              </tr>
           )
        })
     }
  render(){
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          width: 150,
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data1 = [];
        for (let i = 0; i < 100; i++) {
        data1.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
        }
      
      //Table mới
      // Dạng [{...},...]
      const columns1 = [
        {
          title: 'Country',
          dataIndex: 'country',
          width: 150,
        },
        {
          title: 'Confirmed',
          dataIndex: 'confirmed',
          width: 150,
        },
        {
          title: 'Death',
          dataIndex: 'death',
          width: 150,
          
        },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            width: 150,
          }
      ];
      var newColumns =[];
      newColumns= this.state.data;
        const data2 = [];
        for (var i=0; i<newColumns.length;i++)
        {
            data2.push({
                // truyền key vào để xác định vị trí cho arr
                key: i,
                country: newColumns[i].title,
                confirmed: newColumns[i].total_cases,
                death:newColumns[i].total_deaths,
                recovered:newColumns[i].total_recovered,
            });
        }
        
    return (
        
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    
                    <div className="panel panel-warning">
                          <div className="panel-heading">
                                <h4>World COVID-19 Stats</h4>
                          </div>
                          <div className="panel-body">
                                
                                <table className="table table-striped table-bordered table-sm" id="myTable">
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
                                </table>
                                {/* <button  onClick ={() => this.loadItems(confirmed,country, death, recovered)}> </button> */}
                          </div>
                    </div>
                   
                    <Table columns={columns} dataSource={data1} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                    <Table columns={columns1}  dataSource={data2} pagination={{ pageSize: 50 }} scroll={{ y: 600 }} />
                </div>
        
    );
  }
}

export default Stats;
