import React, { Component } from 'react';
import  GoogleMapReact from 'google-map-react';
import {fetchYelpData} from '../services/api-helper.js';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = process.env.REACT_APP_API_KEY;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.740758,
      lng: -73.990164
    },
    zoom: 13
  };
  constructor(props){
    super(props);
  this.state ={
    mapSearch: ''
  }
  this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(id){
    try {
      let yelp = await fetchYelpData(id);
      this.setState({
        mapSearch: yelp
      })
    }
    catch(error){
      console.error(error);
    }
  }

 handleChange(event) {
  this.setState({
    mapSearch: event.target.value
  });
}
  render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <h1 className="map-header">Map the City</h1>
        <form className="map-form"onSubmit = {(event) => {
          event.preventDefault();
          this.handleSubmit(this.state.mapSearch)}
        }>
        <input type="text"
               className="input"
               placeholder="Enter a Restaurant Name"
               name="name"
               value={this.state.mapSearch}
               onChange={this.handleChange}
               />
        <button className="map-button">Search</button>
        </form>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: `${API_KEY}` }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={40.740758}
                    lng={-73.990164}
                    markers={{lat: 40.740986, lng: -73.990293}}
                  />
                </GoogleMapReact>
                </div>
            );
          }
        }

        export default SimpleMap;
