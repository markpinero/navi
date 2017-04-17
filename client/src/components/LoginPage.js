import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import * as accountActions from '../actions';

class LoginPage extends React.Component {
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
    // TODO: add login
    this.props.dispatch(accountActions.login(this.state.user));
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        user={this.state.user}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(LoginPage);
