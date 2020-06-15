import React, {Component} from 'react';
import {fetchDailyData} from '../../../api/dashboard/index';
import Chart from "react-apexcharts";
interface Iprops{

}
interface Istate{
    Date: any ,
    Confirmed:any,
    Death:any,
    Recovered:any,
    setDailyData:any ,
    optionsMixedChart:any,
    // seriesMixedChart:any
}
class PieChartStats extends Component <{}, Istate>{
    constructor(props :any){
        super(props);
        this.state={
            Date:  [],
            Confirmed:[],
            Death:[],
            Recovered: [],
            setDailyData:[],
            optionsMixedChart: {
                chart: {
                  id: "basic-bar",
                  type: 'pie',
                  toolbar: {
                    show: false
                  }
                },
                dataLabels: {
                    enabled: false
                  },
                plotOptions: {
                  bar: {
                    columnWidth: "100%",
                    endingShape: "arrow"
                  }
                },
                stroke: {
                    // Độ nét đứt - thưa của line )dashArray
                    width: [5, 5, 5],
                    curve: 'straight',
                    dashArray: [1, 1, 1]
                },
                title: {
                    text: 'Chart Covid 19 Stats',
                    align: 'center'
                },
                xaxis: {
                  categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                },
                markers: {
                  size: 0,
                  strokeWidth: 2,
                  fillOpacity: 0,
                  strokeOpacity: 0,
                  hover: {
                    size: 3,
                  }
                },
                yaxis: {
                  tickAmount: 10,
                  min: 0,
                  max: 8500000
                }
              },
            //   seriesMixedChart: [
            //     {
            //         name: "Total Confirmed",
            //         data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            //       },
            //       {
            //         name: "Page Views",
            //         data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            //       },
            //       {
            //         name: 'Total Visits',
            //         data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            //       }
            //   ]
        }
    }
    componentDidMount(){
        const fetchMyAPI = async () => {
            const initialDailyData:any = await fetchDailyData();
            this.setState({
                setDailyData: initialDailyData
            })
            // Set Date
            var arr: any = this.state.setDailyData;
            var resultdate = arr.map((item :any)=>{
                return item.date;
            });
            var resultConfirmed = arr.map((item :any)=>{
                return item.confirmed;
            });
            var resultDeath = arr.map((item :any)=>{
                return item.deaths;
            });
            var resultRecovered = arr.map((item :any)=>{
                return item.recovered;
            });
            this.setState({
                optionsMixedChart:{
                    xaxis:{
                        categories: resultdate
                    }
                },
                Confirmed: resultConfirmed,
                Death: resultDeath,
                Recovered: resultRecovered
            })
          };
          fetchMyAPI();
          
    }
    render (){
        var seriesMixedChart =  [
            {
                name: "Total Confirmed",
                data: this.state.Confirmed
              },
              {
                name: "Total Deaths",
                data: this.state.Death
              },
              {
                name: 'Total Recovered',
                data: this.state.Recovered
              }
          ]
        return (
            <div>
                <Chart
                    options={this.state.optionsMixedChart}
                    series={seriesMixedChart}
                    type="line"
                    width="500"
                    height="400"
                />
            </div>
        );
    }
}
export default PieChartStats;