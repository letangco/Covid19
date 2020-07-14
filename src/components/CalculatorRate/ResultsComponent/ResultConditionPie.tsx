import React, { Component } from "react";
import Chart from "react-apexcharts";
interface IProps {
    sendDataCondition: any;
}
interface IState {
    isLoading: any
}
class ResultConditionPie extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    render() {
        var dataCondition: any = this.props.sendDataCondition;
        console.log(dataCondition)
        var dataSeries: any = [];
        // Dieu kien Group Age
        switch (dataCondition[0]) {
            case "groupAge1": {
                dataSeries.push(0.06)
                break;
            }
            case "groupAge2": {
                dataSeries.push(3.9)
                break;
            }
            case "groupAge3": {
                dataSeries.push(22.4 / 2)
                break;
            }
            case "groupAge4": {
                dataSeries.push(24.9 / 2)
                break;
            }
            case "groupAge5": {
                dataSeries.push(48.7 / 2)
                break;
            }
            case "groupAge6": {
                dataSeries.push(75 / 2)
                break;
            }
        }
        // Dieu kien Sex
        switch (dataCondition[1]) {
            case "Male": {
                dataSeries.push(61.8 / 2)
                break;
            }
            case "Female": {
                dataSeries.push(38.2 / 2)
                break;
            }
        }
        //Dieu kien Cardiovascular Disease
        switch (dataCondition[2]) {
            case "Yes": {
                dataSeries.push(10.5)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Diabetes
        switch (dataCondition[3]) {
            case "Yes": {
                dataSeries.push(7.3)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Chronic Respiratory Disease
        switch (dataCondition[4]) {
            case "Yes": {
                dataSeries.push(6.3)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Hypertension
        switch (dataCondition[5]) {
            case "Yes": {
                dataSeries.push(6)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        // Dieu kien Cancer
        switch (dataCondition[6]) {
            case "Yes": {
                dataSeries.push(5.6)
                break;
            }
            case "No": {
                dataSeries.push(0)
                break;
            }
        }
        const options: any = {
            series: dataSeries,
            chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Group Age', 'Group Sex','Cardiovascular','Diabetes','Respiratory','Hypertension', 'Cancer'],
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }]

        }
        return (
            <>
                <Chart
                    width={'100%'}
                    height={'300px'}
                    type="pie"
                    options={options}
                    series={options.series}

                />
            </>
        );
    }
}

export default ResultConditionPie;
