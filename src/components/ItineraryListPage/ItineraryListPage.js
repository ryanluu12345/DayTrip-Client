import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class ItineraryListPage extends Component {
  render() {
    return (
      <div>
        { this.props.authenticated? 'Welcome to your itinerary': <Redirect to="/signup" /> }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
};

export default connect(mapStateToProps, null) (ItineraryListPage);