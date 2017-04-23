import React from 'react';
import { Divider, Header, Form, Segment } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as apiActions from '../../actions/apiActions';
import { connect } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';

const categoryOptions = [
  { text: 'General', value: 'General' },
  { text: 'School', value: 'School' },
  { text: 'Career', value: 'Career' },
  { text: 'Family', value: 'Family' }
];

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      category: '',
      event: '',
      private: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleDateChange = e => {
    console.log(e);
    this.setState({ date: e });
  };

  handleToggleChange = () => this.setState({ private: !this.state.private });

  handleSubmit(e) {
    e.preventDefault();
    let attributes = {
      date: moment(this.state.date, moment.ISO8601),
      category: this.state.category,
      event: this.state.event,
      private: this.state.private
    };
    console.log(this.state);
    this.props.dispatch(apiActions.createEvent(attributes));
  }

  render() {
    return (
      <Segment>
        <Header as="h1">New Event</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Date</label>
            <DatePicker
              selected={this.state.date}
              name="date"
              onChange={this.handleDateChange}
              placeholderText="MM/DD/YYYY"
            />
          </Form.Field>
          <Form.Select
            label="category"
            onChange={this.handleChange}
            name="category"
            options={categoryOptions}
            placeholder="Career"
            value={this.state.category}
          />
          <Form.Input
            label="event"
            onChange={this.handleChange}
            name="event"
            value={this.state.event}
          />
          <Form.Group>
            <Form.Checkbox
              label="private"
              onChange={this.handleToggleChange}
              name="private"
              checked={this.state.private}
            />
          </Form.Group>
          <Divider />
          <Form.Button type="submit" content="Submit" />
        </Form>
      </Segment>
    );
  }
}

export default connect()(NewEvent);
