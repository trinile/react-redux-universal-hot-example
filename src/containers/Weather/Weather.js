import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { WeatherButton } from './components';
import * as weatherActions from '../redux/modules/weather';

@connect(
  state => ({ weather: state.weather }),
  weatherActions )
export default class Weather extends Component {
  static propTypes = {
    weather: PropTypes.string,
    getWeather: PropTypes.func,
  }
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.input);
    // need to handle validation
    this.props.getWeather(this.state.input);
  }

  render() {
    const { weather } = this.props;
    return (
      <div>
        <form>
          <label>What's teh weather</label>
          <input onChange={this.handleChange} type="text" value={this.state.input} name="zipcode" placeholder="type in zipcode"/>
          <button onClick={this.handleSubmit}>click</button>
        </form>
        <p>The Weather at this zipcode: {weather} </p>
      </div>
    );
  }
}
