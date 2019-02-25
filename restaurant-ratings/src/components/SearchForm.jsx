import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      restaurant: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      restaurant: event.target.value
    })
  }
  render(){
  return (
    <form className="form-field"onSubmit ={(event) => {
      event.preventDefault();
      this.props.handleSubmit(this.state.restaurant)}
    }>
    <h1 className="search"> Look up your restaurant's inspection history</h1>
      <input className="input"type="text" placeholder="Enter a Restaurant Name"
        value={this.state.restaurant} onChange={this.handleChange}></input>
        <button className="button-display"><Link to="/restaurantlist">Find a Restaurant</Link></button>
      </form>
    )
  }
}
export default Form;
