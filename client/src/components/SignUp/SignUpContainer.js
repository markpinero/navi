import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class SignUpContainer extends React.Component {
  state = {
    errors: {},
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
    this.props.dispatch(authActions.registerUser(this.state.user));
  };

  render() {
    return (
      <Grid container centered>
        <Grid.Column className="signup">
          <Header as="h1">Sign Up</Header>
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
    );
  }
}

export default connect()(SignUpContainer);
