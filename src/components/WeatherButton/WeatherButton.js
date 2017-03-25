import React, {Component} from 'react';

export default class WeatherButton extends Component {
  render() {
    return (
      <form>
        <label>What's the weather?</label>
        <input name="zipcode" placeholder="Enter Valid Zipcode" type="text"/>
        <button>submit</button>
      </form>
    );
  }
}

