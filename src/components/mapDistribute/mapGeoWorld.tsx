import React, {Component} from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";
import 'mapbox-gl/dist/mapbox-gl.css';
import { VectorMap } from 'react-jvectormap';
// API "https://api.covid19api.com/all" 
interface Istate{
    isLoading: true,
    dataGeoMap: any[],
    dataConfirmed: {},
    dataDeath: {},
    dataRecovered: {},
    dataNewConfirmed: {},
    dataNewDeath: {},
    dataNewRecovered: {}
}
class MapGeoChart extends Component <{},Istate>{
    
    constructor (props: Istate)
    {
        super(props);
        this.state={
            isLoading: true,
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
            var isLoading: any = false;
            var TempConfirmed :any={},TempDeath:any={};
            var TempDeath:any ={};
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
                isLoading:isLoading,
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
        
        let chkValue = (val1 :any): any => {
            var x;
            if (typeof val1 ==="undefined"){
                x = 0;
                // return 0;
            }
            else {
                x=val1;
                // return val1;
            }
            // console.log(x)
            return x;
        }
        function getDataConfirmed(data:any)
        {
            data = TempConfirmed;
            // console.log(data);
            return data;
        }
        function getFlagImgSrc(code:any)
        {
            var code = code.toLowerCase();
        return 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/'+code+'.svg';
        }   
        function onRegionLabelShow(event :any , label :any, code :any){
            // var cdata :any = {US: "35", NO: "15", "SE": "17", "GB": "20", "ES": "10"};
            // var cdata2 :any = {US: "40", NO: "35", "SE": "17", "GB": "20", "ES": "10"};
            var Confirmed :any= TempConfirmed;
            var Death:any = TempDeath;
            var Recovered:any = TempRecovered;
            var newConfirmed:any = TempNewConfirmed;
            var newDeath:any = TempNewDeath;
            var newRecovered:any = TemNewRecovered;
            // console.log(Confirmed)
        //     label.html(label.html() +' (' + code.toString() + 
        //    ') <br>Số Count: ' + Confirmed[code]);
           label.html('<img src="'+getFlagImgSrc(code)+'" height="80" >'+'<br />'+ label.html() + 
           '<hr style="height: 1px"/><p style="color: red">Total Confirmed:'+  Confirmed[code]+'</p> ' 
            + '<p style="color: yellow">Total Death:'+  Death[code]+'</p>' + '<p style="color: #66ff66">Total Recovered:'+  Recovered[code]+'</p>'
           + '<p style="color:#ff6600">Total New Confirmed:'+  newConfirmed[code]+'</p>' + '<p style="color: #ff5050">Total New Death:'+  newDeath[code]+'</p>' 
           + '<p style="color:#3366ff">Total New Recovered:'+  newRecovered[code]+'</p>'
           );
            
        }
        var TempConfirmed :any = this.state.dataConfirmed;
        var TempDeath:any = this.state.dataDeath;
        var TempRecovered:any = this.state.dataRecovered;
        var TempNewConfirmed:any = this.state.dataNewConfirmed;
        var TempNewDeath:any = this.state.dataNewDeath;
        var TemNewRecovered :any= this.state.dataNewRecovered;
        var isLoading:any = this.state.isLoading;
        // console.log(TempConfirmed)
        var cdata :any = {"US": "35", "NO": "15", "SE": "17", "GB": "20", "ES": "10"};
        var dataGeoMap = this.state.dataGeoMap;
        function LoadMap(value:any)
        {
            if(value===true)
            {
                console.log("Loading Map");
            }
            else{
                return (
                    <VectorMap
                                    map='world_mill'
                                    backgroundColor="#0071A4"
                                    
                                    useRef ={"map"}
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="map"
                                    scale ={ ['#99ff33','#669900','#ffcc00','#cc6600']}
                                    hoverOpacity= {0.8}
                                    regionStyle = {
                                        {
                                            hover: {
                                            "fill-opacity": 0.8,
                                            cursor: 'pointer'
                                            },
                                            selected: {
                                               stroke: '#000',
                                               "stroke-width": 1,
                                               "stroke-opacity": 1
                                            }
                                         }
                                    }
                                    series= {
                                        {
                                            regions: [{
                                                values: TempConfirmed,
                                                scale: ['#ffcc00','#cc6600','#ff3300', '#ff0000'],
                                                normalizeFunction: 'polynomial'
                                              }]
                                        }
                                      }
                                      onRegionTipShow = {onRegionLabelShow}
                                />
                )
            }
        }
        return (
            <div className = "container-fluid">
                
                <div className = "container-fluid" >
                    
                    <div className="row">
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{ height: 700}}>
                                {LoadMap(isLoading)}
                                {/* <VectorMap
                                    map='world_mill'
                                    backgroundColor="#0071A4"
                                    
                                    useRef ={"map"}
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="map"
                                    scale ={ ['#99ff33','#669900','#ffcc00','#cc6600']}
                                    hoverOpacity= {0.8}
                                    regionStyle = {
                                        {
                                            hover: {
                                            "fill-opacity": 0.8,
                                            cursor: 'pointer'
                                            },
                                            selected: {
                                               stroke: '#000',
                                               "stroke-width": 1,
                                               "stroke-opacity": 1
                                            }
                                         }
                                    }
                                    series= {
                                        {
                                            regions: [{
                                                values: TempConfirmed,
                                                scale: ['#ffcc00','#cc6600','#ff3300', '#ff0000'],
                                                normalizeFunction: 'polynomial'
                                              }]
                                        }
                                      }
                                      onRegionTipShow = {onRegionLabelShow}
                                /> */}
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
                                mapsApiKey="YOUR_KEY_HERE"
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                            
                        </div>
                        
                    </div>
                    
                    <div className="row">
                        
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}
export default MapGeoChart;