import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      data: []

    }
    this.handleChange = this.handleChange.bind(this);
  }
     handleChange(event) {
      this.setState({
        search: event.target.value
    });
  }
  render() {
  return (
    <form onSubmit = {(event) => {
      event.preventDefault();
      this.props.handleSubmit(this.state.search)}
    }>
    <div className="search-form">
    <h1 className="search-header">Look up your restaurant's inspection history</h1>
    <p>Enter a restaurant name to discover its inspection history.</p>
    <p>You can also search by borough, zipcode, street name, and phone number</p>
    <input type="text"
           className="input"
           placeholder="Enter a Restaurant Name"
           name="name"
           value={this.state.search}
           onChange={this.handleChange}
           />
    <button className="button"><Link to="/form/result"
            style={{ textDecoration: 'none', color: 'white' }}>
            Find a Restaurant</Link>
   </button>
      </div>
    </form>
    )
  }
}
export default SearchForm;
