import React, {Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { reduxForm } from 'redux-form';
// import { WeatherButton } from './components';

export default class Weather extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.input);
    // const zipcode = this.state.input;

    // dispatch action of zipcode input
  }

  render() {
    return (
      <form>
        <label>What's teh weather</label>
        <input onChange={this.handleChange} type="text" value={this.state.input} name="zipcode" placeholder="type in zipcode"/>
        <button onClick={this.handleSubmit}>click</button>
      </form>
    );
  }
}
