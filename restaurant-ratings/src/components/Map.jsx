import GoogleMaps from "simple-react-google-maps"
import React from 'react';

const Map = (props) => {
    return(
      <GoogleMaps
        apiKey={"AIzaSyBEOd9mJ7SqTUbU0_LievpjB8m9A7ScxQw"}
        style={{height: "500px", width: "100%"}}
        zoom={14}
        center={{lat: 40.740986, lng: -73.990293}}
        markers={{lat: 40.740986, lng: -73.990293}}
      />
    );
};
export default Map;
