import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Components
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

//Styles
import "./itinerary-list-page.css";

//Redux
import { getItinerariesRequest } from "actions/suggestions";

class ItineraryListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.props.getItineraries();
  }

  componentWillReceiveProps() {
    this.setState({
      isLoading: false
    });
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
        {this.state.isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : null}
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
