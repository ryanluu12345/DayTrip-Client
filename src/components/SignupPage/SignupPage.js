import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../../actions/index'

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

export default connect(mapStateToProps, mapDispatchToProps) (SignupPage);