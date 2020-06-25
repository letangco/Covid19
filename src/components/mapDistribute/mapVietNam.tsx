import React, {Component} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";
import 'mapbox-gl/dist/mapbox-gl.css';
// API "https://api.covid19api.com/all" 
interface Istate{
    dataGeoMap: any[],
    dataConfirmed: {},
    dataDeath: {},
    dataRecovered: {},
    dataNewConfirmed: {},
    dataNewDeath: {},
    dataNewRecovered: {}
}
class MapVietNam extends Component <{},Istate>{
    constructor (props: Istate)
    {
        super(props);
        this.state={
            dataGeoMap: [],
            dataConfirmed :{},
            dataDeath: {},
            dataRecovered: {},
            dataNewConfirmed: {},
            dataNewDeath: {},
            dataNewRecovered: {}    
        }
    }
    
    // Feth and Save data into GeoMap
    async componentDidMount(){
        await axios.get("https://api.covid19api.com/summary")
        .then( res =>{
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
            var TempConfirmed :any={},TempDeath:any={};
            var TempRecovered:any = {};
            var TemNewConfirmed:any ={};
            var TemNewDeath:any ={};
            var TemNewRecovered:any ={};
            for (var i=0; i<A.length; i++)
            {
                // console.log(Object.values(A[i])[1]);
                var countryCode:any = Object.values(A[i])[1];
                countryCode = countryCode.toString();
                // console.log(countryCode)
                var tempObjConfirmed :any ={[countryCode] : Object.values(A[i])[4]};
                var temObjDeath:any = {[countryCode]:Object.values(A[i])[6]};
                var tempObjRecovered = {[countryCode]:Object.values(A[i])[8]};
                var tempObjNewConfirmed = {[countryCode]:Object.values(A[i])[3]};
                var tempObjNewDeath = {[countryCode]:Object.values(A[i])[5]};
                var tempObjNewRecovered = {[countryCode]:Object.values(A[i])[7]};

                TempConfirmed = Object.assign(TempConfirmed,tempObjConfirmed);
                TempDeath = Object.assign(TempDeath,temObjDeath);
                TempRecovered = Object.assign(TempRecovered,tempObjRecovered);
                TemNewConfirmed = Object.assign(TemNewConfirmed,tempObjNewConfirmed);
                TemNewDeath = Object.assign(TemNewDeath,tempObjNewDeath);
                TemNewRecovered = Object.assign(TemNewRecovered,tempObjNewRecovered);
                // tempObjConfirmed={};

                // Sử dụng cho GeoChart
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
                dataGeoMap: dataGeoMap,
                dataConfirmed: TempConfirmed,
                dataDeath: TempDeath,
                dataRecovered: TempRecovered,
                dataNewConfirmed: TemNewConfirmed,
                dataNewDeath: TemNewDeath,
                dataNewRecovered: TemNewRecovered,
                
            })
        })
        
            
    }
    
    render ()
    {
        
        var dataGeoMap = this.state.dataGeoMap;
        
        return (
            <div className = "container-fluid">
                
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
                                mapsApiKey="YOUR_KEY_HERE"
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                        </div>
                        
                    </div>
                </div>
                
        )
    }
}
export default MapVietNam;