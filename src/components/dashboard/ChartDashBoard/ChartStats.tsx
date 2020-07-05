import React, { Component } from 'react';
import { fetchDailyData } from '../../../api/dashboard/index';
import Chart from "react-apexcharts";
interface Iprops {

}
interface Istate {
  Date: any,
  Confirmed: any,
  Death: any,
  Recovered: any,
  setDailyData: any,
  optionsMixedChart: any,
  // seriesMixedChart:any
}
class ChartStats extends Component<{}, Istate>{
  constructor(props: any) {
    super(props);
    this.state = {
      Date: [],
      Confirmed: [],
      Death: [],
      Recovered: [],
      setDailyData: [],
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
            speed: 1000,
            animateGradually: {
              enabled: true,
              delay: 250
            },
            dynamicAnimation: {
              enabled: true,
              speed: 850
            },
            noData: {
              text: 'Loading...'
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
            opacityFrom: 0.1,
            opacityTo: 0.2,
            stops: [0, 1000000, 2000000, 3000000, 4000000, 6000000, 8000000],

          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug","Sep","Oct","Nov","Dec"]
        },
        markers: {
          size: 0,
          strokeWidth: 1,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 6,
          },
        },
        yaxis: {
          tickAmount: 10,
          min: 0,
          max: 12000000
        },
        colors: ['red', '#ccff33', '#ff9900'],
        legend: {
          onItemHover: {
            highlightDataSeries: true
          },
          position: "top",
          horizontalAlign: 'center',
        },
        theme: {
          mode: 'light',
        },
      },
    }
  }
  componentDidMount() {
    const fetchMyAPI = async () => {
      const initialDailyData: any = await fetchDailyData();
      this.setState({
        setDailyData: initialDailyData
      })
      // Set Date
      var arr: any = this.state.setDailyData;
      var resultdate = arr.map((item: any) => {
        return item.date;
      });
      var resultConfirmed = arr.map((item: any) => {
        return item.confirmed;
      });
      var resultDeath = arr.map((item: any) => {
        return item.deaths;
      });
      var resultRecovered = arr.map((item: any) => {
        return item.recovered;
      });
      this.setState({
        optionsMixedChart: {
          xaxis: {
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
  render() {
    // max = max.toLocaleString();
    var seriesMixedChart = [
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
    // var number :any = 1151515151.65226;

    return (
      <div>
        <Chart
          options={this.state.optionsMixedChart}
          series={seriesMixedChart}
          type="area"
          width="100%"
          height="500"
        />
      </div>
    );
  }
}
export default ChartStats;