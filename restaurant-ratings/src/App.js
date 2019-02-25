import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import {fetchRestaurants} from './services/api-helper.js';
import Welcome from './components/Welcome.jsx';
import RestaurantList from './components/RestaurantList.jsx';
import Form from './components/SearchForm.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }
  async componentDidMount() {
    const restaurants = await fetchRestaurants();
    console.log(restaurants);
    this.setState({
    restaurants
    })
  }
  render() {
    return (
      <div className="App">
      <nav>
      <Link to="/">Home</Link>
      <Link to="/restaurantList">List of Restaurants</Link>
      <Link to="/form">Search for a restaurant</Link>
      </nav>
      <Route exact path="/" render={Welcome}/>
      <Route path="/restaurantList" render={(props) => (
        <RestaurantList
          restaurants={this.state.restaurants} />
      )} />
      <Route path ="/form" render={Form}/>
      </div>
    );
  }
}

export default App;
