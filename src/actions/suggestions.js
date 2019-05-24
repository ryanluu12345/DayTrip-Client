import { suggestionsRoute, echoRoute, itineraryRoute } from "constants/routes";
import history from "../history";
import "constants/routes";

export function addChosenPlace(payload) {
  return { type: "ADD_CHOSEN_PLACE", payload };
}

export function getPlaces(payload) {
  return { type: "GET_PLACES", payload };
}

export function createItinerary(payload) {
  return { type: "CREATE_ITINERARY", payload };
}

export function getPlacesRequest(parameters) {
  return dispatch => {
    fetch(suggestionsRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(parameters)
    })
      .then(res => res.json())
      .then(resJson => {
        dispatch(getPlaces(resJson));
        history.push("/choices");
      })
      .catch(err => console.log(err));
  };
}

//TODO: Modify this to send a request to the create itinerary endpoint
export function createItineraryRequest(parameters) {
  //CHANGE later
  let itinerary = { choices: parameters, name: "codytt" };
  return dispatch => {
    fetch(itineraryRoute, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("userToken"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itinerary)
    })
      .then(res => res.json())
      .then(resJson => {
        history.push("/itinerary-list");
        dispatch(createItinerary(resJson));
      })
      .catch(err => console.log(err));
  };
}
