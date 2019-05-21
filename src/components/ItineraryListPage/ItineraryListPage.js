import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Styles
import "./itinerary-list-page.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class ItineraryListPage extends Component {
  //TODO: Add ability to loop through list group items and render the name of the itineraries

  handleItineraryClick = itineraryId => {
    this.props.history.push("/detailed-itinerary", {
      itineraryId: itineraryId
    });
  };

  render() {
    const listTitle = "Your Itineraries";
    return (
      <div className="itinerary-list-page">
        <Card className="itinerary-card">
          <Card.Header>{listTitle}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item
              className="itinerary-item"
              onClick={() => this.handleItineraryClick("1")}
              action
            >
              Sample 1
            </ListGroup.Item>
            <ListGroup.Item
              className="itinerary-item"
              onClick={() => this.handleItineraryClick("2")}
              action
            >
              Sample 2
            </ListGroup.Item>
            <ListGroup.Item
              className="itinerary-item"
              onClick={() => this.handleItineraryClick("3")}
              action
            >
              Sample 3
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(ItineraryListPage)
);
