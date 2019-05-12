import React, { Component } from 'react';
import './choice-card.css';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { addChosenPlace } from '../../actions/index';

function mapDispatchToProps(dispatch) {
  return ({
    addChosenPlace: place => dispatch(addChosenPlace(place)),
  });
};

class ChoiceCard extends Component {
  //Refactor to use classnames and store in variable for readability
  render() {
    return (
      <div onClick={()=> this.props.addChosenPlace({placeData: this.props.place, mealType: this.props.mealType})} className= {"choice-card " + this.props.classStyleName }>
        <div className="choice-card-header">
          <h3>{this.props.place.name}</h3>
          <img className="card-img" src={this.props.place.image_url} />
        </div>
        <div className="choice-card-description">
          <p>
            {this.props.place.categories[0].title}
          </p>
          <StarRatingComponent
            name="placeRating"
            editing={false}
            starCount={5}
            value={this.props.place.rating}
            />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps) (ChoiceCard);
