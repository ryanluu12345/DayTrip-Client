import React, { Component } from 'react';
import './preference-form.css';
import { connect } from 'react-redux';
import { getPlacesRequest } from '../../actions/index';
import { withRouter } from 'react-router-dom'

/* Maps the dispatch of the get places action to the props */
function mapDispatchToProps(dispatch) {
  return ({
    getPlacesRequest: parameters => dispatch(getPlacesRequest(parameters))
  });
};

class PreferenceForm extends Component {
  state = {
    location:'',
    vibe:'',
    startTime:'',
    endTime: '',
    price: '$',
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Move the post request to the "getPlaces" action
  handleClick = (event) => {
    this.props.getPlacesRequest(this.state);
    this.props.history.push('/choices');
  }

  render() {
    return (
      <div className="form-page">
        <div className="form-card">
          <h2>
            Activity Preferences
          </h2>
          <label className="input-title">Enter a location:</label>
          <input className="field" onChange={this.handleInput} name="location" type="text" />
          <label className="input-title">Enter a vibe:</label>
          <input className="field" onChange={this.handleInput} name="vibe" type="text" />
          <label className="input-title">Choose a price:</label>
          <select className="field" onChange={this.handleInput} name="price">
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          <label className="input-title">Choose a start time:</label>
          <input className="field" onChange={this.handleInput} name="startTime" type="time" />
          <label className="input-title">Choose an end time:</label>
          <input className="field" onChange={this.handleInput} name="endTime" type="time" />
          <button className="submit-btn" onClick={this.handleClick}>Daytrip Me</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps) (PreferenceForm));
