import React, { Component } from "react";

//STYLES
import "./detailed-itinerary.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class DetailedItineraryPage extends Component {
  render() {
    const { itineraryId } = this.props.location.state;
    return (
      <div className="detailed-itinerary-page">
        <h1>Detailed Itinerary: {itineraryId}</h1>
        <h3>Breakfast</h3>
        <Card className="place-card">
          <Card.Img
            variant="top"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
          />
          <Card.Body>
            <Card.Title>Name of Place</Card.Title>
            <Card.Text>Desc of place</Card.Text>
            <Button className="explore-button">Explore</Button>
          </Card.Body>
        </Card>

        <Card className="place-card">
          <Card.Img
            variant="top"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
          />
          <Card.Body>
            <Card.Title>Name of Place</Card.Title>
            <Card.Text>Desc of place</Card.Text>
            <Button className="explore-button">Explore</Button>
          </Card.Body>
        </Card>

        <Card className="place-card">
          <Card.Img
            variant="top"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
          />
          <Card.Body>
            <Card.Title>Name of Place</Card.Title>
            <Card.Text>Desc of place</Card.Text>
            <Button className="explore-button">Explore</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DetailedItineraryPage;
