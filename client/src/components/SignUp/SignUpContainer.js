import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
// import moment from 'moment';

class SignUpPage extends React.Component {
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
    this.props.dispatch(authActions.registerUser(this.state.user));
  }

  render() {
    return (
      <SignUpForm
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

export default connect(mapStateToProps)(SignUpPage);
