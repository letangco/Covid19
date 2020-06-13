import React, {Component} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";
// sử dụng API "https://api.covid19api.com/all" để lấy dữ liệu toàn bộ các nước trên TG
interface Istate{
    dataGeoMap: any[],

}
class MapGeoChart extends Component <{},Istate>{
    
    constructor (props: Istate)
    {
        super(props);
        this.state={
            dataGeoMap: [],
        }
    }
    // Feth and Save data into GeoMap
    componentDidMount(){
        axios.get("https://api.covid19api.com/summary")
        .then(res =>{
            // Mảng để lưu giá trị từng mảng để setState lại
            var dataGeoMap = [];
            // Mảng để lưu đầu đề để hiện trị trên MapChart
            var temp = 
                // ['Country', 'Total Confirmed','New Confirmed','Total Deaths','New Deaths', 'Total Recovered', 'New Recovered', 'Date']
                ['Country', 'Total Confirmed','New Confirmed']
            ;
            // Mảng để lưu 8 thuộc tính sau đó push vào dataGeoMap.
            var tempData = [];
            var A = res.data.Countries;
            // console.log(res.data.Countries);
            dataGeoMap.push(temp);
            for (var i=0; i<A.length; i++)
            {
                // console.log(Object.values(A[i]));
                var trans = Object.values(A[i]);
                
                tempData.push(trans[0]);
                tempData.push(trans[4]);
                tempData.push(trans[3]);
                // tempData.push(trans[6]);
                // tempData.push(trans[5]);
                // tempData.push(trans[8]);
                // tempData.push(trans[7]);
                // tempData.push(trans[9]);
                dataGeoMap.push(tempData);
                tempData =[];
                
            }
            this.setState({
                dataGeoMap: dataGeoMap
            })
        })
    }
    render ()
    {
        var dataGeoMap = this.state.dataGeoMap;
        

        return (
            <div className = "container-fluid">
                {/* <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="GeoChart"
                    data={dataGeoMap}
                    options={{
                        
                        colorAxis: { colors: ['green','yellow','orange','pink', 'red'] },
                      }}
                    // data = {
                    //   ['',''],....
                    //}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    // mapsApiKey="AIzaSyAAji08D-qvQDAreTvqrv7pz_UHOJFz2gA"
                    // rootProps={{ 'data-testid': '1' }}
                /> */}
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="GeoChart"
                    data={
                    //     [
                    //     ['Country', 'Popularity'],
                    //     ['Germany', 200],
                    //     ['United States', 300],
                    //     ['Brazil', 400],
                    //     ['Canada', 500],
                    //     ['France', 600],
                    //     ['RU', 700],
                    // ]
                    dataGeoMap
                }
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="YOUR_KEY_HERE"
                    rootProps={{ 'data-testid': '1' }}
                />
                
            </div>
        )
    }
}
export default MapGeoChart;