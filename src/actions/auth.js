import firebaseUtil from "firebase-util";
import firebase from "firebase"; //Refactor to take firebase logic out of here
import history from "../history";
import "constants/routes";

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
