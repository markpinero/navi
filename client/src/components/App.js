import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./common/Header";
import Landing from "./Landing/Landing";
import EventGrid from "./EventGrid/EventGrid";
import NewEventContainer from "./NewEvent/NewEventContainer";
import Profile from "./Profile/Profile";
import SignInContainer from "./SignIn/SignInContainer";
import SignUpContainer from "./SignUp/SignUpContainer";
import { connect } from "react-redux";

class App extends React.Component {
  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.location !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header authenticated={this.props.authenticated} />
        <Route
          exact
          path="/"
          component={this.props.authenticated ? EventGrid : Landing}
        />
        <Route path="/new" component={NewEventContainer} />
        <Route path="/profile" component={Profile} />
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
