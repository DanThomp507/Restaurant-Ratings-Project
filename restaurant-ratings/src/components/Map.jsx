import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class RestaurantMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: {}
    };
  }



  render() {

    return (
      <Map
        style={{ width: "100%", height: "80vh" }}
        center={{ lat: 40.730610,  lng: -73.935242}}
        onClick={this.onMapClicked}
        google={this.props.google}
        centerAroundCurrentLocation={true}
        zoom={12}
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_APIKEY
})(RestaurantMap);
