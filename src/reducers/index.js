const initialState = {
  places: {},
  itinerary: {}
};

function rootReducer(state = initialState, action) {
  console.log("entered");
  if (action.type === 'GET_PLACES') {
    console.log(action.payload);
    return { ...state, places: action.payload }
  }
  else if (action.type === 'ADD_CHOSEN_PLACE') {
    console.log(action.payload);
    const mealType = action.payload.mealType
    const placeData = action.payload.placeData
    /* add */
    /** TODO: Finish up the action so it adds the chosen place to the global state */
    /** TODO: Add validation for the global state ids */
    /** TODO: Search through the places object to send the correct object back to Darin */
    return { ...state, 
            itinerary: {
              ...state.itinerary,
              [mealType]: placeData
            }
          }
  }
  else if (action.type === 'CREATE_ITINERARY') {
    let fullItinerary = action.payload
    return { ...state, fullItinerary: fullItinerary}
  }
  return state;
}

export default rootReducer;