import React, { Component } from 'react';
import axios from 'axios';
import MapGeoChart from './mapGeoWorld';
// sử dụng API "https://api.covid19api.com/all" để lấy dữ liệu toàn bộ các nước trên TG
interface Istate {
    dataGeoMap: any[],
}
class Map extends Component<{}, Istate>{

    constructor(props: Istate) {
        super(props);
        this.state = {
            dataGeoMap: [],
        }
    }
    // Feth and Save data into GeoMap
    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                // Mảng để lưu giá trị từng mảng để setState lại
                var dataGeoMap = [];
                // Mảng để lưu đầu đề để hiện trị trên MapChart
                var temp =
                    // ['Country', 'Total Confirmed','New Confirmed','Total Deaths','New Deaths', 'Total Recovered', 'New Recovered', 'Date']
                    ['Country', 'Total Confirmed', 'New Confirmed']
                    ;
                // Mảng để lưu 8 thuộc tính sau đó push vào dataGeoMap.
                var tempData = [];
                var A = res.data.Countries;
                // console.log(res.data.Countries);
                dataGeoMap.push(temp);
                for (var i = 0; i < A.length; i++) {
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
                    tempData = [];

                }
                this.setState({
                    dataGeoMap: dataGeoMap
                })
            })
    }
    render() {
        // var dataGeoMap = this.state.dataGeoMap;
        return (
            <div style={{maxHeight: 700}}>
                <MapGeoChart />
            </div>
        )
    }
}
export default Map;