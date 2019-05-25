import React, { Component } from "react";

//STYLES
import "./detailed-itinerary.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MapModal from "components/MapModal/MapModal";

class DetailedItineraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false };
  }

  handleClick = url => {
    window.open(url, "_blank");
  };

  openModal = () => {
    this.setState({
      modalShow: true
    });
  };

  closeModal = () => {
    this.setState({
      modalShow: false
    });
  };

  render() {
    const { itinerary } = this.props.location.state;
    console.log(itinerary);
    return (
      <div className="detailed-itinerary-page">
        <Button onClick={this.openModal} className="map-btn" variant="primary">
          View on Map
        </Button>
        {Object.keys(itinerary).map(keyName => (
          <div className="choice-segment">
            <h2 className="segment-text">
              {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
            </h2>
            <div className="choice-section">
              <Card className="place-card">
                <Card.Img variant="top" src={itinerary[keyName].image_url} />
                <Card.Body>
                  <Card.Title>{itinerary[keyName].name}</Card.Title>
                  <Card.Text>{itinerary[keyName].phone}</Card.Text>
                  <Button
                    onClick={() => this.handleClick(itinerary[keyName].url)}
                    className="explore-button"
                  >
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
        <MapModal
          places={itinerary}
          show={this.state.modalShow}
          onHide={this.closeModal}
        />
      </div>
    );
  }
}

export default DetailedItineraryPage;
