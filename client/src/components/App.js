import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, withRouter } from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import Header from './Header';
import RegisterPage from './Authentication/RegisterPage';
import LandingPage from './LandingPage';
import LoginPage from './Authentication/LoginPage';
import Onboarding from './Onboarding';
import Profile from './Profile';
import { connect } from 'react-redux';
import NewEvent from './NewEvent';

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
            component={loggedIn ? Dashboard : LandingPage}
          />
          <Route path="/about" component={About} />
          <Route path="/new" component={NewEvent} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
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
