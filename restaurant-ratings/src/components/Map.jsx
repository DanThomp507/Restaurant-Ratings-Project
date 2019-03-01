import GoogleMaps from "simple-react-google-maps"
import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const Map = (props) => {
    return(
      <GoogleMaps
        apiKey={API_KEY}
        style={{height: "500px", width: "100%"}}
        zoom={14}
        center={{lat: 40.740986, lng: -73.990293}}
        markers={{lat: 40.740986, lng: -73.990293}}
      />
    );
};
export default Map;
