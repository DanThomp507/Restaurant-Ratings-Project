import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class RestaurantMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {},
    };
  }



  render() {

    return (
      <Map
        style={{ width: "100%", height: "80vh" }}
        onClick={this.onMapClicked}
        google={this.props.google}
        zoom={14}
        centerAroundCurrentLocation={false}
        center={{lat: 40.785091, lng: -73.968285}}
        markers={{lat: 40.740986, lng: 73.990293}}
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_APIKEY
})(RestaurantMap);
