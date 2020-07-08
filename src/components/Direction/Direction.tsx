import React,{Component} from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react';
import './DirectionStyle.css';

interface Iprops{
}

interface IState{
  showingInfoWindow:any,
  activeMarker:any,
  selectedPlace:any,
}

class Direction extends Component <Iprops, IState> {
  fetchPlaces(mapProps:any, map:any) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }
  onMarkerClick = (props :Iprops, marker:any, e:any) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    onMapClicked = (props:Iprops) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  
  constructor(props :Iprops)
  {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  

  render(){
    
    return (
     <div>
        {/* <Map google={this.props.google}
      onReady={this.fetchPlaces}
      visible={false}>
        <Listing places={this.state.places} />
    </Map> */}
     </div>
    )
  }
}

export default Direction;
