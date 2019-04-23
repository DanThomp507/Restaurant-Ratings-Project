import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import {fetchRestaurants} from './services/api-helper.js';
import Welcome from './components/Welcome.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import SearchForm from './components/SearchForm.jsx';
import RestaurantInfo from './components/RestaurantInfo.jsx';
import SimpleMap from './components/Map.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurantData: [],
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.refreshRestaurant = this.refreshRestaurant.bind(this);
  }
  async componentDidMount(search) {
    const restaurants = await fetchRestaurants(search);
    this.setState({
    restaurantData: restaurants,
    });
  }
  async handleSubmit(search){
    try {
      let grade = await fetchRestaurants(search);
      this.setState({
        restaurantData: grade,
      })
    }
    catch(error){
      console.error(error);
    }
  }
  async refreshRestaurant(){
  const restaurant = await fetchRestaurants();
  this.setState({
  })
  return restaurant;
}
  render() {
    return (
      <div className="App">
      <Nav />
      <Route exact path="/" render={Welcome}/>
      <Route path ="/form" render={(props) => (
        <SearchForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handlechange}
        restaurants={this.state.restaurantData}
      />
      )} />
      <Link to="/form/result"></Link>
      <Route path ="/form/result" render={() => (
        <RestaurantInfo
        restaurants={this.state.restaurantData}/>
      )} />
      <Route path ="/map" render={(props) => (
        <SimpleMap
          handleSubmit={this.handleSubmit}
          handleChange={this.handlechange}
          results={this.state.mapSearch}
          />
        )}/>
      <Route path="/about" render={About} />
      <Footer />
      </div>
    );
  }
}

export default App;
