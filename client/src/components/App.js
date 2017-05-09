import React from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "./common/Header";
import EventGrid from "./EventGrid/EventGrid";
import NewEvent from "./NewEvent/NewEvent";
import SignInContainer from "./SignIn/SignInContainer";
import SignUpContainer from "./SignUp/SignUpContainer";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header authenticated={this.props.authenticated} />
        <Container as="section">
          <Route
            exact
            path="/"
            component={this.props.authenticated ? EventGrid : SignInContainer}
          />
          <Route path="/new" component={NewEvent} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/signin" component={SignInContainer} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps)(App));
// withRouter unblocks Router updates (https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md)
