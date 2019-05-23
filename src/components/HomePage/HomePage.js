import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

import "./home-page.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = event => {
    alert(this.state.searchInput);
    //DO networking or actions stuff here
  };

  render() {
    return (
      <div className="home-page">
        <h1 className="home-app-title">Daytripd</h1>
        <InputGroup className="search-input-group">
          <FormControl
            name="searchInput"
            onChange={this.handleChange}
            className="search-input"
            placeholder="Enter the destination of your next adventure"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button onClick={this.handleClick} variant="primary">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default HomePage;
