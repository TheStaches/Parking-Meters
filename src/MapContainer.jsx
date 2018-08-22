import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";
 
export class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: props.selected,
      selectedPlace: {},
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  
  onMarkerClick(props, marker, e) {
    this.props.updateSelected(props.name)
  }

  render() {
    return (
        <Map 
          initialCenter={{
            lat: 32.7157,
            lng: -117.1611
          }} 
          google={this.props.google} 
          zoom={12}
          onClick={this.mapClicked}>
          { 
            this.props.meters.map((meter, index, metersObj) => {
              // After taking duplicate street names out. Create a count of how many meters are at that adress.
              if (index > 0) {
                if (metersObj[index].sub_area !== metersObj[index - 1].sub_area) {
                  return (
                    <Marker 
                      position={{lat: meter.latitude, lng: meter.longitude}}
                      icon={ (this.props.selected === (meter.sub_area + "/" + meter.pole)) ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
                      onClick={this.onMarkerClick} 
                      name={(meter.sub_area + "/" + meter.pole)} 
                      key={(meter.sub_area + "/" + meter.pole)} />
                  )
                }
              }
            })
          }
        </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCxL6MLgzC2g3pdPVAkoL76t_qJJEz68Kc"
})(MapContainer)