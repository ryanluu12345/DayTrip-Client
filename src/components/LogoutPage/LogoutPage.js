import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOutUser } from '../../actions/index';

class LogoutPage extends Component {
  componentWillMount() {
    this.props.logoutUser();
  };

  render() {
    return (
      <Redirect to="/signup" />
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logoutUser: () => dispatch(signOutUser())
  });
};

export default connect(null, mapDispatchToProps) (LogoutPage);
