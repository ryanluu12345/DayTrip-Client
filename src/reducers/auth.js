const initialState = {
  authenticated: false,
  user: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN_USER":
      return { ...state, authenticated: true };
    case "SIGN_OUT_USER":
      return { ...state, authenticated: false };
    default:
      return state;
  }
}
