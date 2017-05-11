import React from "react";
import NewEventForm from "./NewEventForm";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import * as apiActions from "../../actions/apiActions";

class NewEventContainer extends React.Component {
  state = {
    date: null,
    category: "",
    event: "",
    private: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleToggleChange = () => this.setState({ private: !this.state.private });

  handleSubmit(e) {
    e.preventDefault();
    const newEvent = {
      date: new Date(this.state.date),
      category: this.state.category,
      event: this.state.event,
      private: this.state.private
    };
    this.props.dispatch(apiActions.createEvent(newEvent));
    this.setState = {
      date: null,
      category: "",
      event: "",
      private: false
    };
  }

  render() {
    return (
      <Container as="section">
        <Grid centered>
          <Grid.Column className="signup">
            <Header as="h1">New Event</Header>
            <Segment stacked>
              <NewEventForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                onToggleChange={this.handleToggleChange}
                form={this.state}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect()(NewEventContainer);
