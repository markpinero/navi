import React from 'react';
import { Divider, Header, Form, Segment } from 'semantic-ui-react';
import moment from 'moment';
import * as apiActions from '../actions/apiActions';
import { connect } from 'react-redux';

const categoryOptions = [
  { text: 'Career', value: 'Career' },
  { text: 'Family', value: 'Family' }
];

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '11/13/1987',
      category: '',
      event: 'Thing',
      private: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleDateChange = e => {
    this.setState({ date: e });
  };

  handleToggleChange = () => this.setState({ private: !this.state.private });

  handleSubmit(e) {
    e.preventDefault();
    let attributes = {
      date: moment(this.state.date).format('YYYY-MM-DD'),
      category: this.state.category,
      event: this.state.event,
      private: this.state.private
    };
    this.props.dispatch(apiActions.createEvent(attributes));
  }

  render() {
    return (
      <Segment>
        <Header as="h1">New Event</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="date"
            onChange={this.handleChange}
            name="date"
            value={this.state.date}
          />
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
