const initialState = {
  places: {},
};

function rootReducer(state = initialState, action) {
  console.log("entered");
  if (action.type === 'ADD_ARTICLE') {
    console.log(action.payload);
    return { articles:[...state.articles, action.payload]}
  }
  else if (action.type === 'GET_PLACES') {
    console.log(action.payload);
    return { ...state, places: action.payload }
  }
  else if (action.type === 'ADD_CHOSEN_PLACE') {
    console.log(action.payload);
    /* add */
    /** TODO: Finish up the action so it adds the chosen place to the global state */
    /** TODO: Add validation for the global state ids */
    /** TODO: Search through the places object to send the correct object back to Darin */
  }
  return state;
}

export default rootReducer;