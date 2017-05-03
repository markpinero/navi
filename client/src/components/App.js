import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './_common/Header/Header';
import About from './About/About';
import NewEvent from './NewEvent/NewEvent';
import EventGrid from './EventGrid/EventGrid';
import SignUpContainer from './SignUp/SignUpContainer';
import SignInContainer from './SignIn/SignInContainer';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Route
          exact
          path="/"
          component={this.props.authenticated ? EventGrid : About}
        />
        <Route path="/new" component={NewEvent} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/signin" component={SignInContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps)(App));
// withRouter unblocks Router updates (https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md)
