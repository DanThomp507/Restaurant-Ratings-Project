import React, {Component} from 'react';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantSearch: '',
    }
    this.handleChange = this.handleChange.bind(this);
    }
     handleChange(event) {
      this.setState({
        restaurantSearch: event.target.value,
      });
  }
  render(){
  return (
    <form onSubmit = {(event) => {
      event.preventDefault();
      this.props.handleSubmit(this.state.restaurantSearch)}
    }>
      <div className="search-form">
    <h1>Look up your restaurant's inspection history</h1>
    <input type="text"
           className="restaurant-search"
           placeholdder="Enter a Restaurant Name"
           name="name"
           onChange={this.handleChange}
           value={this.state.restaurantSearch}
          />
    <button className="button">Find a Restaurant</button>
      </div>
    </form>
    )
  }
}
export default SearchForm;
