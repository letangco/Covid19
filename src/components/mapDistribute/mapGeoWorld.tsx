import React, { Component } from "react";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { VectorMap } from "react-jvectormap";
import News from "./News";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import './StyleMap.css';
// API "https://api.covid19api.com/all"
interface Istate {
  isLoading: true;
  dataGeoMap: any[];
  dataConfirmed: {};
  dataDeath: {};
  dataRecovered: {};
  dataNewConfirmed: {};
  dataNewDeath: {};
  dataNewRecovered: {};
}
class MapGeoChart extends Component<{}, Istate> {
  constructor(props: Istate) {
    super(props);
    this.state = {
      isLoading: true,
      dataGeoMap: [],
      dataConfirmed: {},
      dataDeath: {},
      dataRecovered: {},
      dataNewConfirmed: {},
      dataNewDeath: {},
      dataNewRecovered: {},
    };
  }

  // Feth and Save data into GeoMap
  async componentDidMount() {
    await axios.get("https://api.covid19api.com/summary").then((res) => {
      // Mảng để lưu giá trị từng mảng để setState lại
      var dataGeoMap = [];
      // Mảng để lưu đầu đề để hiện trị trên MapChart
      var temp =
        // ['Country', 'Total Confirmed','New Confirmed','Total Deaths','New Deaths', 'Total Recovered', 'New Recovered', 'Date']
        ["Country", "Total Confirmed", "New Confirmed"];
      // Mảng để lưu 8 thuộc tính sau đó push vào dataGeoMap.
      var tempData = [];
      var A = res.data.Countries;
      // console.log(res.data.Countries);
      dataGeoMap.push(temp);
      var isLoading: any = false;
      var TempConfirmed: any = {};
      var TempDeath: any = {};
      var TempRecovered: any = {};
      var TemNewConfirmed: any = {};
      var TemNewDeath: any = {};
      var TemNewRecovered: any = {};
      for (var i = 0; i < A.length; i++) {
        // console.log(Object.values(A[i])[1]);
        var countryCode: any = Object.values(A[i])[1];
        countryCode = countryCode.toString();
        // console.log(countryCode)
        var tempObjConfirmed: any = { [countryCode]: Object.values(A[i])[4] };
        var temObjDeath: any = { [countryCode]: Object.values(A[i])[6] };
        var tempObjRecovered = { [countryCode]: Object.values(A[i])[8] };
        var tempObjNewConfirmed = { [countryCode]: Object.values(A[i])[3] };
        var tempObjNewDeath = { [countryCode]: Object.values(A[i])[5] };
        var tempObjNewRecovered = { [countryCode]: Object.values(A[i])[7] };

        TempConfirmed = Object.assign(TempConfirmed, tempObjConfirmed);
        TempDeath = Object.assign(TempDeath, temObjDeath);
        TempRecovered = Object.assign(TempRecovered, tempObjRecovered);
        TemNewConfirmed = Object.assign(TemNewConfirmed, tempObjNewConfirmed);
        TemNewDeath = Object.assign(TemNewDeath, tempObjNewDeath);
        TemNewRecovered = Object.assign(TemNewRecovered, tempObjNewRecovered);
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
        tempData = [];
      }
      this.setState({
        isLoading: isLoading,
        dataGeoMap: dataGeoMap,
        dataConfirmed: TempConfirmed,
        dataDeath: TempDeath,
        dataRecovered: TempRecovered,
        dataNewConfirmed: TemNewConfirmed,
        dataNewDeath: TemNewDeath,
        dataNewRecovered: TemNewRecovered,
      });
    });
  }

  render() {
    // let chkValue = (val1: any): any => {
    //   var x;
    //   if (typeof val1 === "undefined") {
    //     x = 0;
    //     // return 0;
    //   } else {
    //     x = val1;
    //     // return val1;
    //   }
    //   // console.log(x)
    //   return x;
    // };
    function nThousand(x: any) {
      if (x === undefined) {
        return 0
      }
      else
        return x.toLocaleString();
    }
    function getFlagImgSrc(code: any) {
      var code1: any = code.toLowerCase();
      return (
        "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/" +
        code1 +
        ".svg"
      );
    }
    function onRegionLabelShow(event: any, label: any, code: any) {
      // var cdata :any = {US: "35", NO: "15", "SE": "17", "GB": "20", "ES": "10"};
      // var cdata2 :any = {US: "40", NO: "35", "SE": "17", "GB": "20", "ES": "10"};
      var Confirmed: any = nThousand(TempConfirmed[code]);
      var Death: any = nThousand(TempDeath[code]);
      var Recovered: any = nThousand(TempRecovered[code]);
      var newConfirmed: any = nThousand(TempNewConfirmed[code]);
      var newDeath: any = nThousand(TempNewDeath[code]);
      var newRecovered: any = nThousand(TemNewRecovered[code]);
      var nameCountry: any = label.html();
      // hiển thị ra Map khi hover

      label.html(
        '<img src="' +
        getFlagImgSrc(code) +
        '" width="120" height="80" >' +
        "<br />" +
        '<p className="name-country">' + nameCountry + '</p>' +
        // label.html() +
        '<table><tbody><tr><td>Confirmed</td><td>' + Confirmed + '</td></tr><tr><td>Death</td><td>' + Death + '</td></tr><tr><td>Recovered</td><td>' + Recovered + '</td></tr></tr><tr><td>New Confirmed</td><td>+' + newConfirmed + '</td></tr><tr><td>New Death</td><td>+' + newDeath + '</td></tr><tr><td>New Recovered</td><td>+' + newRecovered + '</td></tr></tbody></table>'
        // '<p style="color: red">Total Confirmed:' +
        // Confirmed[code] +
        // "</p> " +
        // '<p style="color: yellow">Total Death:' +
        // Death[code] +
        // "</p>" +
        // '<p style="color: #66ff66">Total Recovered:' +
        // Recovered[code] +
        // "</p>" +
        // '<p style="color:#ff6600">Total New Confirmed:' +
        // newConfirmed[code] +
        // "</p>" +
        // '<p style="color: #ff5050">Total New Death:' +
        // newDeath[code] +
        // "</p>" +
        // '<p style="color:#3366ff">Total New Recovered:' +
        // newRecovered[code] +
        // "</p>"


      );
    }
    var TempConfirmed: any = this.state.dataConfirmed;
    var TempDeath: any = this.state.dataDeath;
    var TempRecovered: any = this.state.dataRecovered;
    var TempNewConfirmed: any = this.state.dataNewConfirmed;
    var TempNewDeath: any = this.state.dataNewDeath;
    var TemNewRecovered: any = this.state.dataNewRecovered;
    var isLoading: any = this.state.isLoading;
    // console.log(TempConfirmed)
    // var cdata :any = {"US": "35", "NO": "15", "SE": "17", "GB": "20", "ES": "10"};
    function LoadMap(value: any) {
      if (value === true) {
        console.log("Loading Map");
      } else {
        return (
          <VectorMap
            map="world_mill"
            backgroundColor="#dfdedf"
            // backgroundColor = "#324851"
            createRef='map'
            containerStyle={{
              width: "100%",
              height: "95%",
            }}
            containerClassName="map"
            hoverOpacity={0.8}
            regionStyle={{
              hover: {
                "fill-opacity": 0.8,
                cursor: "pointer",
              },
              selected: {
                stroke: "#000",
                "stroke-width": 1,
                "stroke-opacity": 1,
              },
            }}

            series={{
              regions: [
                {
                  attribute: 'fill',
                  values: TempConfirmed,
                  scale: ['#668cff', '#a366ff', '#8533ff', '#5200cc'],
                  // scale: ['#3ddad7','#2a93d5', '#135589'],
                  normalizeFunction: "polynomial",
                  legend: {
                    vertical: true,
                    title: 'Total Confirmed',
                  }
                },
              ],
            }}
            onRegionTipShow={onRegionLabelShow}
          />
        );
      }
    }
    // const classes = useStyles();
    return (

      <div className="container-fluid">
        <ScrollUpButton
          className="btn-scroll-top"
          StopPosition={0}
          ShowAtPosition={150}
          EasingType='easeOutCubic'
          AnimationDuration={1500}
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'
          style={{
            backgroundColor: "#ececec", width: '40px',
            height: '40px', borderRadius: "50%", color: 'blue'
          }}
          ToggledStyle={{}}
        />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
          <div className="row" >
            <News />
          </div>

        </div>
        <div
          className="col-xs-12 col-sm-12 col-md-12 col-lg-10"
        >
          <div className="row" style={{ height: 710 }}>
            {LoadMap(isLoading)}
          </div>
        </div>
      </div>

    );
  }
}
export default MapGeoChart;
