import React from 'react';
import { Header, Form, Segment } from 'semantic-ui-react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import * as onboardingActions from '../../actions/onboardingActions';
import { genderOptions, countryOptions } from './options';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: '',
      gender: '',
      country: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleDateChange = e => {
    this.setState({ dob: e });
  };

  handleSubmit(e) {
    e.preventDefault();
    let attributes = {
      dob: moment(this.state.dob).format('YYYY-MM-DD'),
      gender: this.state.gender,
      country: this.state.country
    };
    this.props.dispatch(onboardingActions.calcLifeExpectancy(attributes));
  }

  render() {
    return (
      <Segment>
        <Header as="h1">Calculate your life expectancy</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field inline>
            <label>Date of birth</label>
            <DatePicker
              selected={this.state.dob}
              name="dob"
              onChange={this.handleDateChange}
              placeholderText="MM/DD/YYYY"
            />
            {/* TODO: detect if MM/DD/YYYY */}
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Select
              inline
              label="Gender"
              name="gender"
              options={genderOptions}
              onChange={this.handleChange}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              label="Country of origin"
              name="country"
              placeholder="Country of Origin"
              options={countryOptions}
              search
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Button type="submit" content="Submit" />
            <Form.Button floated="right" basic as={Link} to="/sample-questions">
              Skip to Sample Questions
            </Form.Button>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

export default connect()(Onboarding);
