import React, { Component } from "react";
import { connect } from "react-redux";
import { createItineraryRequest } from "actions/index";

import ChoiceCard from "components/ChoiceCard/ChoiceCard";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./choice-page.css";

class ChoicePage extends Component {
  constructor(props) {
    super(props);
    this.state = { itineraryName: "" };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitClick = () => {
    this.props.createItinerary(this.state.itineraryName, this.props.itinerary);
  };

  getStyleProp = (itinerary, itemId) => {
    if (itinerary) {
      return itinerary.id === itemId ? "selected" : "";
    }
    return "";
  };

  render() {
    return (
      <div className="choice-page">
        {Object.keys(this.props.places).map(keyName => (
          <div className="choice-segment">
            <h2 className="segment-text">
              {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
            </h2>
            <div className="choice-section">
              {this.props.places[keyName].map(item => (
                <ChoiceCard
                  classStyleName={this.getStyleProp(
                    this.props.itinerary[keyName],
                    item.id
                  )}
                  place={item}
                  mealType={keyName}
                />
              ))}
            </div>
          </div>
        ))}
        <FormControl
          className="itinerary-name"
          name="itineraryName"
          onChange={this.handleChange}
          placeholder="Itinerary Name"
          aria-label="Itinerary Name"
          aria-describedby="basic-addon2"
        />
        <Button className="choice-submit-btn" onClick={this.handleSubmitClick}>
          Create Itinerary
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.suggestions.places,
    itinerary: state.suggestions.itinerary
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createItinerary: (name, itinerary) =>
      dispatch(createItineraryRequest(name, itinerary))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicePage);
