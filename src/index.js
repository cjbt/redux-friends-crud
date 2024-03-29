import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const AppWithRouter = withRouter(App);

const app = (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
