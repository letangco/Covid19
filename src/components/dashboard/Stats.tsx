import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import './css/table_dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";
//Thư viện table
// import 'antd/dist/antd.css';
interface IProps {
}
interface IState {
  data: any[],
  filteredInfo: any,
  sortedInfo: any,
  loading: any,
  SoDong:any
}

class Stats extends Component<{}, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      data: [],
      filteredInfo: null,
      sortedInfo: null,
      loading: true,
      SoDong:0
    }
  }
  handleChange = (pagination: any, filter: any, sort: any) => {
    this.setState({
      filteredInfo: filter,
      sortedInfo: sort
    })
  }
  // Reset Button Filter.
  clearFilter = () => {
    this.setState({ filteredInfo: null });
  }
  // Reset All button filter and sort
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    })
  }
  //
  SortConfirmed = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnkey: 'confirmed'
      }
    })
  }

  componentDidMount() {
    let Arr = [];
    var data: any = [];
    // Bảng danh sách table 
    axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
      .then(res => {
        Arr = (Object.entries(res.data.countryitems[0]));
        for (let i = 0; i < Arr.length; i++) {
          let temArr = Arr[i];
          data.push(temArr[1]);
          // Thêm any trước khai báo một object để lấy tên trong json ***QUAN TRỌNG
        }
        // console.log(data);
        this.setState({
          data: data,
          loading: false
        })
      });
  }

  // Hàm chuyển number Commas
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
  
  render() {
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    //Table mới
    // Dạng [{...},...]
    const columns1 = [
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        width:10,
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
        // width:250,
        sorter: (a: any, b: any) =>this.DeleteCommas(a.confirmed) - (this.DeleteCommas(b.confirmed)),
        sortOrder: sortedInfo.columnKey === 'confirmed' && sortedInfo.order,
        ellipsis: true,
        
      },
      {
        title: 'New Confirmed',
        dataIndex: 'newConfirmed',
        key: 'newConfirmed',
        // width:120,
        sorter: (a: any, b: any) =>this.DeleteCommas(a.newConfirmed) - (this.DeleteCommas(b.newConfirmed)),
        sortOrder: sortedInfo.columnKey === 'newConfirmed' && sortedInfo.order,
        ellipsis: true,
        render: (value:any, index:any, key:any)=>{
          if(this.DeleteCommas(index.confirmed)!==0)
          {
            return <div>              
              <FontAwesomeIcon icon={faArrowUp}/> {value} ({((parseFloat(value)/this.DeleteCommas(data2[index.key].confirmed))*100).toFixed(3)}%)
            </div>;
            
          }
        }
      },
      {
        title: 'Death',
        dataIndex: 'death',
        class: 'death',
        key: 'death',
        // width:150,
        sorter: (a: any, b: any) =>this.DeleteCommas(a.death.toString()) - (this.DeleteCommas(b.death.toString())),
        sortOrder: sortedInfo.columnKey === 'death' && sortedInfo.order,
        ellipsis: true
      },
      {
        title: 'New Death',
        dataIndex: 'newDeath',
        key: 'newDeath',
        // width:130,
        sorter: (a: any, b: any) =>this.DeleteCommas(a.newDeath.toString()) - (this.DeleteCommas(b.newDeath.toString())),
        sortOrder: sortedInfo.columnKey === 'newDeath' && sortedInfo.order,
        ellipsis: true,
        render: (value:any, index:any, key:any)=>{
          if(this.DeleteCommas(index.newDeath)!==0)
          {
            return <div>              
              <FontAwesomeIcon icon={faArrowUp}/> {value} ({((parseFloat(value)/this.DeleteCommas(data2[index.key].death))*100).toFixed(3)}%)
            </div>;
            
          }
        }
      },
      {
        title: 'Recovered',
        dataIndex: 'recovered',
        key: 'recovered',
        // width:130,
        sorter: (a: any, b: any) =>this.DeleteCommas(a.recovered.toString()) - (this.DeleteCommas(b.recovered.toString())),
        sortOrder: sortedInfo.columnKey === 'recovered' && sortedInfo.order,
        ellipsis: true
      },
      {
        title: 'Serious Cases',
        dataIndex: 'seriouscase',
        // width:130,
        key: 'seriouscase',
        sorter: (a: any, b: any) =>this.DeleteCommas(a.seriouscase.toString()) - (this.DeleteCommas(b.seriouscase.toString())),
        sortOrder: sortedInfo.columnKey === 'seriouscase' && sortedInfo.order,
        ellipsis: true,
      },
      // {
      //   title: '',
      //   width:130,
      //   key: '',
      // }
    ];
    var newColumns = [];
    newColumns = this.state.data;
    const data2:any = [];
    for (var i = 0; i < newColumns.length - 1; i++) {
      var flag: any = this.state.data[i].code.toString().toLowerCase();
      var valueFlag: any = "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/" + flag + ".svg";
      data2.push({
        // truyền key vào để xác định vị trí cho arr sử dụng load ra cho table
        key: i,
        country: <div>
          <img src={valueFlag} width="50" alt="Flag State" /> {newColumns[i].title}
        </div>,
        confirmed:this.numberWithCommas(newColumns[i].total_cases),
        newConfirmed:this.numberWithCommas(newColumns[i].total_new_cases_today),
        // this.numberWithCommas(newColumns[i].total_new_cases_today)
        death:this.numberWithCommas(newColumns[i].total_deaths),
        newDeath:this.numberWithCommas(newColumns[i].total_new_deaths_today),
        recovered:this.numberWithCommas(newColumns[i].total_recovered),
        seriouscase:this.numberWithCommas(newColumns[i].total_serious_cases)

      });
    }
    return (
      <div>
        <h4>World COVID-19 Stats</h4>
        <Table className="tableStats"  
        columns={columns1} 
        // pagination={{ pageSize: 200 }} 
        //  scroll={{ y: 1000 }}
         loading={this.state.loading} dataSource={data2} onChange={this.handleChange} tableLayout="auto"
        //  bordered={true}
        size="large"
        />

      </div>
    );
  }
}

export default Stats;