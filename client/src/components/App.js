import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, withRouter } from 'react-router-dom';
import About from './About/About';
import EventGridContainer from './EventGrid/EventGridContainer';
import Header from './_common/Header';
import RegisterContainer from './Register/RegisterContainer';
import LandingContainer from './Landing/LandingContainer';
import LoginContainer from './Login/LoginContainer';
import Onboarding from './Onboarding/Onboarding';
import Profile from './Profile/Profile';
import { connect } from 'react-redux';
import NewEvent from './NewEvent/NewEvent';
import ShowEvent from './ShowEvent/ShowEvent';

class App extends Component {
  render() {
    const loggedIn = this.props.authenticated;
    return (
      <div>
        <Header authenticated={loggedIn} />
        <Container>
          <Route
            exact
            path="/"
            component={loggedIn ? EventGridContainer : LandingContainer}
          />
          <Route exact path="/event/:id" component={ShowEvent} />
          <Route path="/about" component={About} />
          <Route path="/new" component={NewEvent} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/onboarding" component={Onboarding} />
          <Route path="/profile" component={Profile} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps)(App));
// withRouter unblocks Router updates (https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md)
