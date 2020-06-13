import React, {Component} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";
import 'mapbox-gl/dist/mapbox-gl.css';
import { VectorMap } from 'react-jvectormap';
// API "https://api.covid19api.com/all" 
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
                
                <div className = "container-fluid" >
                    
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ height: 700}}>
                                <VectorMap
                                map='world_mill'
                                backgroundColor="#0071A4"
                                useRef ={"map"}
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                containerClassName="map"
                                scale ={ ['#C8EEFF', '#0071A4']}
                                hoverOpacity= {0.8}
                                
                                />
                            </div>
                            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                
                        </div>
                    </div>
                    
                    <div className="row">
                        
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                        </div>
                        
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <Chart 
                                width={'100%'}
                                height={'100%'}
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
                            options={{
                                
                                colorAxis: { colors: ['#99ff66','#ccff33', '#ffcc00', '#ff9900','#cc3300'] },
                                backgroundColor: '#32414e',
                                datalessRegionColor: '#ff3300',
                                defaultColor: '#f5f5f5',
                              }}
                                // Note: you will need to get a mapsApiKey for your project.
                                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                                mapsApiKey="YOUR_KEY_HERE"
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}
export default MapGeoChart;