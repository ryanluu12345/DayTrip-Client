import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar-container">
          <li><Link to="/">Home</Link></li>
          { this.props.authenticated ? <li><Link to="/itinerary-list">Itinerary List</Link></li> : null }
          { !this.props.authenticated ? <li><Link to="/signup">Sign Up</Link></li> : null }
          { this.props.authenticated ? <li><Link to="/logout">Logout</Link></li> : null }
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, null) (Navbar);