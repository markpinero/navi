import React from "react";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import { Container, Grid, Segment, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class SignUpContainer extends React.Component {
  state = {
    errors: {},
    user: {
      firstName: "",
      lastName: "",
      born: "",
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
    this.props.registerUser(this.state.user);
  };

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <Message warning>
          {this.props.errorMessage}
        </Message>
      );
    }
  };

  render() {
    return (
      <Container as="section">
        <Grid centered>
          <Grid.Column className="signup">
            <Header as="h1">Sign Up</Header>
            {this.renderAlert()}
            <Segment stacked>
              <SignUpForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                user={this.state.user}
              />
            </Segment>
            <Segment textAlign="center">
              Already have an account? <Link to="/signin">Sign In</Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error
});

export default connect(mapStateToProps, { registerUser })(SignUpContainer);
