import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import history from './history';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route } from 'react-router-dom';

//COMPONENT IMPORTS
import PreferenceForm from './components/PreferenceForm/PreferenceForm';
import ChoicePage from './components/ChoicePage/ChoicePage';
import SignupPage from './components/SignupPage/SignupPage';
import ItineraryListPage from './components/ItineraryListPage/ItineraryListPage';
import Navbar from './components/Navbar/Navbar';
import LogoutPage from './components/LogoutPage/LogoutPage';

//AUTH IMPORTS
import { getUserToken } from './services/authentication/index';
import { signInUser } from './actions/index';
import requireAuth from './components/HigherOrderComponents/require_auth';
import notRequireAuth from './components/HigherOrderComponents/not_require_auth';

// Signs in user who already has a token in localStorage
const userToken = getUserToken()
if (userToken) {
  store.dispatch(signInUser())
}

ReactDOM.render(
  <Provider store = {store}>
    <Router history = {history}>
      <div>
        <Navbar />
        <Route exact path="/itinerary-list" component={requireAuth(ItineraryListPage)} />
        <Route exact path="/signup" component={notRequireAuth(SignupPage)} />
        <Route exact path="/preferences" component={requireAuth(PreferenceForm)} />
        <Route exact path="/choices" component={requireAuth(ChoicePage)} />
        <Route exact path="/logout" component={requireAuth(LogoutPage)} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
