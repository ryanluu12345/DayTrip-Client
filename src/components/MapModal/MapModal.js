import React, { Component } from "react";

import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

import Modal from "react-bootstrap/Modal";

import "./map-modal.css";

class MapModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

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
                position={{
                  lat: places[keyName].coordinates.latitude,
                  lng: places[keyName].coordinates.longitude
                }}
                name={places[keyName].name}
              >
                {this.state.isOpen && (
                  <InfoWindow onCloseClick={this.props.handleCloseCall}>
                    <span>Something</span>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </Map>
        </Modal.Body>
      </Modal>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(MapModal);
