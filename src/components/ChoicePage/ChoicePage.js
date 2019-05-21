import React, { Component } from 'react';
import './choice-page.css';
import { connect } from 'react-redux';
import ChoiceCard from 'components/ChoiceCard/ChoiceCard';
import { createItinerary } from 'actions/index';

class ChoicePage extends Component {  

  handleSubmitClick = () => {
    //console.log(this.props.itinerary)
    this.props.createItinerary(this.props.itinerary)
  }

  getStyleProp = (itinerary, itemId) => {
    if(itinerary) {
      return itinerary.id === itemId ? 'selected' : ''
    }
    return ''
  }

  render() {
    return (
      <div className="choice-page">         
          {Object.keys(this.props.places).map((keyName) => (
              <div className="choice-segment">
                <h2 className="segment-text">{keyName.charAt(0).toUpperCase() + keyName.slice(1)}</h2>
                <div className="choice-section">
                  {this.props.places[keyName].map((item) => 
                  (<ChoiceCard classStyleName={ this.getStyleProp(this.props.itinerary[keyName], item.id)} place={ item } mealType={ keyName }/>)
                  )}
                </div>
              </div>
          ))}
          <button onClick={this.handleSubmitClick}>Create Itinerary</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { places: state.places, itinerary: state.itinerary }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createItinerary: (itinerary) => dispatch(createItinerary(itinerary))
  });
};

export default connect(mapStateToProps, mapDispatchToProps) (ChoicePage);
