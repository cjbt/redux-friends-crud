import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import { getFriends } from './store/actions';
import { Route } from 'axios';

import Home from './containers/Home/';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
    console.log(this.props);
  }
  render() {
    return (
      <>
        <Route exact path='/' component={Home} />
      </>
    );
  }
}

export default connect(
  null,
  { getFriends }
)(App);
