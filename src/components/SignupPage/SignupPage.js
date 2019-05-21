import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../../actions/index';
import { withRouter } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import './signup.css';

class SignupPage extends Component {
  
  handleSignup = (event) => {
    event.preventDefault()
    this.props.signInUser();
  }
  
  render() {
    const labelTitle = "Sign in with Google";
    const colorType = "dark";
    return (
      <div className="signup">
        <div className="signup-card">
          <h1 className="app-title"> Daytrip </h1>
          <h3 className="app-tagline"> Plan your next adventure </h3>
          <GoogleButton type = { colorType } label={ labelTitle } onClick={ this.handleSignup } />
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return ({
    signInUser: () => dispatch(signInRequest())
  });
};

const mapStateToProps = (state) => {
  return { authenticated: state.authenticated }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (SignupPage));