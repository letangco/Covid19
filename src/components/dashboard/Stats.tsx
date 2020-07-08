import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import NumberFormat from 'react-number-format';
import './css/table_dashboard.css';
//Thư viện table
// import 'antd/dist/antd.css';
interface IProps {
}
interface IState {
  data: any[],
  filteredInfo: any,
  sortedInfo: any,
  loading: any
}

class Stats extends Component<{}, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      data: [],
      filteredInfo: null,
      sortedInfo: null,
      loading: true
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
        width:250,
        sorter: (a: any, b: any) => a.confirmed - b.confirmed,
        sortOrder: sortedInfo.columnKey === 'confirmed' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'New Confirmed',
        dataIndex: 'newConfirmed',
        key: 'newConfirmed',
        width:120,
        sortOrder: sortedInfo.columnKey === 'newConfirmed' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Death',
        dataIndex: 'death',
        class: 'death',
        key: 'death',
        width:150,
        sorter: (a: any, b: any) => a.death - b.death,
        sortOrder: sortedInfo.columnKey === 'death' && sortedInfo.order,
        ellipsis: true
      },
      {
        title: 'New Death',
        dataIndex: 'newDeath',
        key: 'newDeath',
        width:130,
        sortOrder: sortedInfo.columnKey === 'newDeath' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Recovered',
        dataIndex: 'recovered',
        key: 'recovered',
        width:130,
        sorter: (a: any, b: any) => a.recovered - b.recovered,
        sortOrder: sortedInfo.columnKey === 'recovered' && sortedInfo.order,
        ellipsis: true
      },
      {
        title: 'Serious Cases',
        dataIndex: 'seriouscase',
        width:130,
        key: 'seriouscase',
        sorter: (a: any, b: any) => Number(a.seriouscase) - Number(b.seriouscase),
        sortOrder: sortedInfo.columnKey === 'seriouscase' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: '',
        width:130,
        key: '',
      }
    ];
    var newColumns = [];
    newColumns = this.state.data;
    const data2 = [];
    var nf = new Intl.NumberFormat();
    for (var i = 0; i < newColumns.length - 1; i++) {
      var flag: any = this.state.data[i].code.toString().toLowerCase();
      var valueFlag: any = "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/" + flag + ".svg";
      data2.push({
        // truyền key vào để xác định vị trí cho arr sử dụng load ra cho table
        key: i,
        country: <div>
          <img src={valueFlag} width="50" alt="Flag State" /> {newColumns[i].title}
        </div>,
        confirmed:newColumns[i].total_cases,
        newConfirmed:<NumberFormat value={newColumns[i].total_new_cases_today} displayType={'text'} thousandSeparator={true} />,
        death:newColumns[i].total_deaths,
        newDeath:<NumberFormat value={newColumns[i].total_new_deaths_today} displayType={'text'} thousandSeparator={true} />,
        recovered:newColumns[i].total_recovered,
        seriouscase:<NumberFormat value={newColumns[i].total_serious_cases} displayType={'text'} thousandSeparator={true} />

      });
    }
    return (
      <div>
        <h4>World COVID-19 Stats</h4>
        <Table className="tableStats" size="large" columns={columns1} 
        // pagination={{ pageSize: 200 }} 
        //  scroll={{ y: 1000 }}
         loading={this.state.loading} dataSource={data2} onChange={this.handleChange} />

      </div>
    );
  }
}

export default Stats;