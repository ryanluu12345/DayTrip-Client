import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../../actions/index';
import { withRouter } from 'react-router-dom';

class SignupPage extends Component {
  
  handleSignup = (event) => {
    event.preventDefault()
    this.props.signInUser();
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleSignup}>Signup</button>
        {this.props.authenticated?"I am in":"Not in"}
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