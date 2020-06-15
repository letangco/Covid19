import React, {Component} from 'react';
import {fetchStatsData} from '../../../api/dashboard/index';
import Chart from "react-apexcharts";
interface Iprops{

}
interface Istate{
    data:any [],
    isLoading: any
}
class PieChartStats extends Component <{}, Istate>{
    constructor(props :any){
        super(props);
        this.state={
            data: [],
            isLoading: true,
            
        }
    }
    componentDidMount(){
        const fetchMyAPI = async () => {
            const initialDailyData:any = await fetchStatsData();
            var tempArr:any = [];
            tempArr.push(initialDailyData.total_cases);
            tempArr.push(initialDailyData.total_recovered);
            tempArr.push(initialDailyData.total_deaths);
            this.setState({
              data: tempArr,
              isLoading: false
            })
          };
          
          fetchMyAPI();
    }
    
    render (){
      // function Colors( value:any, seriesIndex:any, w:any ) {
      //   if (value >8000000) {
      //       return 'red'
      //   }
      //   // if(value >2000000 && value <5000000) {
      //   //     return 'green'
      //   // }
      // }
        var options = {
            series: this.state.data,
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
              },
              plotOptions: {
                pie: {
                  customScale: 0.5,
                }
              }
        },
          labels: ['Total Confirmed', 'Total Recovered', 'Total Deaths'],
          responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 380,
                    toolbar: {
                    show: true,
                  },
                  animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 1500,
                    animateGradually: {
                        enabled: true,
                        delay: 1500
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 1500
                    }
                }
                },
            }
          }],
          fill: {
            colors: ['#e63900', '#33cc33', '#ff9900']
          },
          colors: ["#e63900","#33cc33","#ff9900"],
          legend: {
            show: true,
            showForSingleSeries: false,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'bottom',
            horizontalAlign: 'center', 
            floating: false,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 600,
            formatter: undefined,
            inverseOrder: false,
            width: undefined,
            height: undefined,
            tooltipHoverFormatter: undefined,
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: undefined,
                useSeriesColors: false
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
            
        },theme: {
          mode: 'dark', 
          palette: 'palette1', 
          monochrome: {
              enabled: false,
              color: '#255aee',
              shadeTo: 'dark',
              shadeIntensity: 0.25
          },
      }
          };
          
        return (
            <div>
                <Chart
                    options={options}
                    series={options.series}
                    type="pie"
                    width="500"
                    height="500"
                    
                />
            </div>
        );
    }
}
export default PieChartStats;