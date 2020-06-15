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
class ChartStats extends Component <{}, Istate>{
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
                  fontFamily: 'Tahoma,Helvetica, Arial, sans-serif',
                  id: "basic-bar",
                  type: 'line',
                  toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                      download: true,
                      selection: true,
                      zoom: true,
                      zoomin: true,
                      zoomout: true,
                      pan: true,
                    }
                  },
                  animations: {
                    enabled: true,
                    easing: 'linear',
                    speed: 1500,
                    animateGradually: {
                        enabled: true,
                        delay: 250
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 1500
                    }
                }
                },
                dataLabels: {
                    enabled: false
                  },
                plotOptions: {
                  bar: {
                    columnWidth: "100%",
                    endingShape: "arrow"
                  },

                },
                stroke: {
                    // Độ nét đứt - thưa của line )dashArray
                    width: [5, 5, 5],
                    curve: 'straight',
                    dashArray: [1, 1, 1]
                },
                title: {
                    text: 'Chart Covid 19 Stats',
                    align: 'center',
                },
                fill: {
                  type: "gradient",
                  gradient: {
                    shadeIntensity: 0.5,
                    opacityFrom: 0.2,
                    opacityTo: 0.3,
                    stops: [0,1000000,2000000,3000000, 4000000, 6000000,8000000],
                    
                  }
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
                },
                colors: ['red', '#ccff33', '#ff9900'],
                legend:{
                  fontSize: '14px',
                },
                theme: {
                  mode: 'dark', 
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
                data: this.state.Confirmed,
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
                    type="area"
                    width="500"
                    height="400"
                />
            </div>
        );
    }
}
export default ChartStats;