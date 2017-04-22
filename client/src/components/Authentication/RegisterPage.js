import React from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
// import moment from 'moment';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange = e => {
    this.setState({ user: { dob: e } });
  };

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
      <RegisterForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        onDateChange={this.handleDateChange}
        user={this.state.user}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users
});

export default connect(mapStateToProps)(RegisterPage);
