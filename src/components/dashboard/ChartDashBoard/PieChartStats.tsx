import React, {Component} from 'react';
import {fetchStatsData} from '../../../api/dashboard/index';
import Chart from "react-apexcharts";
interface Iprops{

}
interface Istate{
    data:any ,
    optionsMixedChart:any 
}
class PieChartStats extends Component <{}, Istate>{
    constructor(props :any){
        super(props);
        this.state={
            data: {},
            optionsMixedChart: {
                series: [44, 55, 13, 43, 22],
                chart: {
                    width: 380,
                    type: 'pie',
                    toolbar: {
                    show: false
                  }
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }]
              },
            
        }
    }
    componentDidMount(){
        const fetchMyAPI = async () => {
            const initialDailyData:any = await fetchStatsData();
            
            console.log(initialDailyData)
            
          };
          fetchMyAPI();
          
    }
    render (){
        
        var options = {
            series: [44, 55, 13, 43, 22],
            chart: {
            width: 380,
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
              }
        },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                    toolbar: {
                    show: true
                  }
                },
              legend: {
                position: 'bottom'
              }
            }
          }]
          };
        return (
            <div>
                <Chart
                    options={options}
                    series={options.series}
                    type="donut"
                    width="500"
                    height="500"
                />
            </div>
        );
    }
}
export default PieChartStats;