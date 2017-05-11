import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Segment, Header } from "semantic-ui-react";
import SignInForm from "./SignInForm";
import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";

class SignInPage extends React.Component {
  state = {
    errors: {},
    user: {
      email: "",
      password: ""
    }
  };

  handleChange = event => {
    const user = this.state.user;
    const field = event.target.name;
    user[field] = event.target.value;

    this.setState({
      user
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(authActions.loginUser(this.state.user));
  };

  render() {
    return (
      <Container as="section">
        <Grid centered>
          <Grid.Column className="signin">
            <Header as="h1">Sign In</Header>
            <Segment stacked>
              <SignInForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                user={this.state.user}
              />
            </Segment>
            <Segment textAlign="center">
              New to Navi? <Link to="/signup">Sign Up</Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect()(SignInPage);
