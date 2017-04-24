import React from 'react';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const loginCredentials = {
      email: this.state.user.email.toLowerCase(),
      password: this.state.user.password
    };
    console.log(this.state);
    console.log(loginCredentials);
    this.props.dispatch(authActions.loginUser(loginCredentials));
  }

  render() {
    return (
      <SignInForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        user={this.state.user}
      />
    );
  }
}

export default connect()(SignInPage);
