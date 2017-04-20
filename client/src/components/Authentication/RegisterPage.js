import React from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class RegisterPage extends React.Component {
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
    console.log(`email: ${this.state.user.email}`);
    console.log(`password: ${this.state.user.password}`);
    this.props.dispatch(authActions.registerUser(this.state.user));
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        user={this.state.user}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users
});

export default connect(mapStateToProps)(RegisterPage);
