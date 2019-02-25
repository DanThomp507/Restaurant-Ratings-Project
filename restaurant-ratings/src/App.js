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

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurantData: [],

    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  async componentDidMount() {
    const restaurants = await fetchRestaurants();
    console.log(restaurants);
    this.setState({
    restaurantData: restaurants
    })
  }
  async handleSubmit(search){
    try {
      let grade = await fetchRestaurants(search);
      this.setState({
        restaurantData: grade
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
      <Route path ="/form" render={(props) => (
        <SearchForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        restaurants= {this.state.restaurantData}/>
      )} />
      <Link to="form/result"></Link>
      <Route path ="/form/result" render={(props) => (
        <RestaurantInfo
        restaurants={this.state.restaurantData} />
      )} />
      <Route path="/about" render={About} />
      <Footer />
      </div>
    );
  }
}

export default App;
