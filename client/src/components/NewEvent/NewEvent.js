import React from "react";
import { Container, Divider, Header, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import * as apiActions from "../../actions/apiActions";

const categoryOptions = [
  { text: "General", value: "general" },
  { text: "Personal", value: "personal" },
  { text: "School", value: "school" },
  { text: "Career", value: "career" },
  { text: "Family", value: "family" }
];

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      category: "",
      event: "",
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
    this.setState({
      date: new Date(this.state.date)
    });
    console.log(this.state);
    this.props.dispatch(apiActions.createEvent(this.state));
  }

  render() {
    return (
      <Container>
        <Segment>
          <Header as="h1">New Event</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Date</label>
              <Form.Input
                name="date"
                onChange={this.handleChange}
                value={this.state.date}
                placeholderText="MM/DD/YYYY"
              />
            </Form.Field>
            <Form.Select
              label="category"
              onChange={this.handleChange}
              name="category"
              options={categoryOptions}
              placeholder="General, Personal, Career..."
              search
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
      </Container>
    );
  }
}

export default connect()(NewEvent);
