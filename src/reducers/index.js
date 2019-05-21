import { combineReducers } from "redux";
import auth from "reducers/auth";
import suggestions from "reducers/suggestions";

const initialState = {
  authenticated: false,
  user: null,
  places: {},
  itinerary: {}
};

export default combineReducers({ auth, suggestions });

/*
function rootReducer(state = initialState, action) {
  if (action.type === "GET_PLACES") {
    console.log(action.payload);
    return { ...state, places: action.payload };
  } else if (action.type === "ADD_CHOSEN_PLACE") {
    console.log(action.payload);
    const mealType = action.payload.mealType;
    const placeData = action.payload.placeData;
    return {
      ...state,
      itinerary: {
        ...state.itinerary,
        [mealType]: placeData
      }
    };
  } else if (action.type === "CREATE_ITINERARY") {
    let fullItinerary = action.payload;
    return { ...state, fullItinerary: fullItinerary };
  } else if (action.type === "SIGN_IN_USER") {
    return { ...state, authenticated: true };
  } else if (action.type === "SIGN_OUT_USER") {
    return { ...state, authenticated: false };
  }
  return state;
}

*/
