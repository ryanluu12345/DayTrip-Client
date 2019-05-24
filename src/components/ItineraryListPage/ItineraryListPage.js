import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Styles
import "./itinerary-list-page.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

//Redux
import { getItinerariesRequest } from "actions/suggestions";

class ItineraryListPage extends Component {
  //TODO: Add ability to loop through list group items and render the name of the itineraries
  componentWillMount() {
    this.props.getItineraries();
  }

  handleItineraryClick = itinerary => {
    this.props.history.push("/detailed-itinerary", {
      itinerary: itinerary
    });
  };

  render() {
    const listTitle = "Your Itineraries";
    return (
      <div className="itinerary-list-page">
        <Card className="itinerary-card">
          <Card.Header>{listTitle}</Card.Header>
          <ListGroup variant="flush">
            {this.props.itineraryList.map(item => {
              return (
                <ListGroup.Item
                  className="itinerary-item"
                  onClick={() => this.handleItineraryClick(item.itinerary)}
                  action
                >
                  {item.itineraryName}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    itineraryList: state.suggestions.itineraries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItineraries: () => dispatch(getItinerariesRequest())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItineraryListPage)
);
