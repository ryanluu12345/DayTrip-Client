import { combineReducers } from "redux";
import auth from "reducers/auth";
import suggestions from "reducers/suggestions";

export default combineReducers({ auth, suggestions });
