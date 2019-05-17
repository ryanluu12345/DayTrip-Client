import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PreferenceForm from './components/PreferenceForm/PreferenceForm';
import ChoicePage from './components/ChoicePage/ChoicePage';
import SignupPage from './components/SignupPage/SignupPage';

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <div>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/preferences" component={PreferenceForm} />
        <Route exact path="/choices" component={ChoicePage} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
