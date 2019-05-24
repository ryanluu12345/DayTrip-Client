const initialState = {
  places: {},
  itinerary: {},
  itineraries: []
};

export default function suggestions(state = initialState, action) {
  switch (action.type) {
    case "GET_PLACES":
      console.log(action.payload);
      return { ...state, places: action.payload };
    case "ADD_CHOSEN_PLACE":
      console.log(action.payload);
      const mealType = action.payload.mealType;
      const placeData = action.payload.placeData;
      /* add */
      /** TODO: Add validation for the global state ids */
      /** TODO: Search through the places object to send the correct object back to Darin */
      return {
        ...state,
        itinerary: {
          ...state.itinerary,
          [mealType]: placeData
        }
      };
    case "CREATE_ITINERARY":
      console.log(action.payload);
      return { ...state, fullItinerary: action.payload };

    case "GET_ITINERARIES":
      console.log(action.payload);
      return { ...state, itineraries: action.payload };

    default:
      return state;
  }
}
