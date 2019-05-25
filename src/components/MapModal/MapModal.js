import React, { Component } from "react";

import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

import Modal from "react-bootstrap/Modal";

import "./map-modal.css";

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  handleMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.place,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  render() {
    const { places } = this.props;
    console.log(places);
    return (
      <Modal
        {...this.props}
        dialogClassName="map-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="modal-body">
          <Map
            className="map-container"
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: places.lunch.coordinates.latitude,
              lng: places.lunch.coordinates.longitude
            }}
          >
            {Object.keys(places).map(keyName => (
              <Marker
                onClick={this.handleMarkerClick}
                position={{
                  lat: places[keyName].coordinates.latitude,
                  lng: places[keyName].coordinates.longitude
                }}
                name={places[keyName].name}
                place={places[keyName]}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              key={places.breakfast.name}
              visible={true}
              onCloseClick={this.props.handleCloseCall}
            >
              <div className="info-window-content">
                <img
                  className="info-window-img"
                  src={this.state.selectedPlace.image_url}
                />
                <h2>{this.state.selectedPlace.name}</h2>
                <p>{"Phone:" + this.state.selectedPlace.display_phone}</p>
                <p>
                  URL:
                  <a href={this.state.selectedPlace.url}>
                    {this.state.selectedPlace.name}{" "}
                  </a>
                </p>
              </div>
            </InfoWindow>
          </Map>
        </Modal.Body>
      </Modal>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapModal);
