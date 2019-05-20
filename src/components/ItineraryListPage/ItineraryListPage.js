import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//Styles
import './itinerary-list-page.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class ItineraryListPage extends Component {
  //Add ability to loop through list group items and render the name of the itineraries
  render() {
    const listTitle = "Your Itineraries"
    return (
      <div className="itinerary-list-page">
        <Card className="itinerary-card" style={{ width: '30rem' }}>
          <Card.Header>{ listTitle }</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
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