import firebaseUtil from "firebase-util";
import firebase from "firebase"; //Refactor to take firebase logic out of here
import history from "../history";
import "constants/routes";
import { suggestionsRoute, echoRoute } from "constants/routes";

export function addChosenPlace(payload) {
  return { type: "ADD_CHOSEN_PLACE", payload };
}

export function getPlaces(payload) {
  return { type: "GET_PLACES", payload };
}

export function createItinerary(payload) {
  return { type: "CREATE_ITINERARY", payload };
}

export function signInUser() {
  return { type: "SIGN_IN_USER" };
}

export function doNotSignInUser(payload) {
  return { type: "DO_NOT_SIGN_IN_USER", payload };
}

export function signOutUser() {
  localStorage.clear();
  return { type: "SIGN_OUT_USER" };
}

export function signInRequest() {
  return dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseUtil
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        //Sets the token to local storage
        localStorage.setItem("userToken", token);
        dispatch(signInUser());
        history.push("/itinerary-list");
      })
      .catch(function(error) {
        console.log(error);
        var errorMessage = error.message;
        dispatch(doNotSignInUser({ error: errorMessage }));
      });
  };
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
  return dispatch => {
    fetch(echoRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(parameters)
    })
      .then(res => res.json())
      .then(resJson => dispatch(createItinerary(resJson)))
      .catch(err => console.log(err));
  };
}
