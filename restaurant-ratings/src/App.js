import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";
import {fetchRestaurants} from './services/api-helper.js';
import Welcome from './components/Welcome.jsx';
import RestaurantList from './components/RestaurantList.jsx';
import Form from './components/SearchForm.jsx';
import Nav from './components/Nav.jsx';

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
    restaurants: restaurants
    })
  }
  async handleSubmit(restaurant){
    try {
      let grade = await fetchRestaurants();
      this.setState({
        restaurants: grade
      })
    }
    catch(error){
      console.error(error);
    }
  }
  render() {
    return (
      <div className="App">
      <Nav />
      <Route exact path="/" render={Welcome}/>
      <Route path="/restaurantList" render={(props) => (
        <RestaurantList
          restaurants={this.state.restaurants} />
      )} />
      <Route path ="/form" render={(props) => (
        <Form handleSubmit={this.handleSubmit} />
      )} />
      </div>
    );
  }
}

export default App;
