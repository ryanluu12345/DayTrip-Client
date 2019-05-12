export function addChosenPlace(payload) {
  return { type: 'ADD_CHOSEN_PLACE', payload}
};

export function getPlaces(payload) {
  return { type: 'GET_PLACES', payload }
};

export function createItinerary(payload) {
  return { type: 'CREATE_ITINERARY', payload}
};

export function getPlacesRequest(parameters) {
  return (dispatch) => {
    fetch('http://localhost:5000/suggestions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameters)
    })
    .then(res => res.json())
    .then(resJson => dispatch(getPlaces(resJson)))
    .catch(err => console.log(err));
  }
};

//TODO: Modify this to send a request to the create itinerary endpoint
export function createItineraryRequest(parameters) {
  return (dispatch) => {
    fetch('http://localhost:5000/echo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameters)
    })
    .then(res => res.json())
    .then(resJson => dispatch(createItinerary(resJson)))
    .catch(err => console.log(err));
  }
};