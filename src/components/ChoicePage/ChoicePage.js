import React, { Component } from 'react';
import './choice-page.css';
import { connect } from 'react-redux';
import ChoiceCard from '../ChoiceCard/ChoiceCard';

class ChoicePage extends Component {  
  render() {
    return (
      <div className="choice-page">         
          {Object.keys(this.props.places).map((keyName) => (
              <div className="choice-segment">
                <h2 className="segment-text">{keyName.charAt(0).toUpperCase() + keyName.slice(1)}</h2>
                <div className="choice-section">
                  {this.props.places[keyName].map((item) => 
                  (<ChoiceCard place={item} />)
                  )}
                </div>
              </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { places: state.places }
}

export default connect(mapStateToProps) (ChoicePage);
