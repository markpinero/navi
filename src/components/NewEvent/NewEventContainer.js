import React from "react";
import NewEventForm from "./NewEventForm";
import { Container, Grid, Segment, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent } from "../../actions/apiActions";

class NewEventContainer extends React.Component {
  state = {
    errors: {},
    form: {
      date: "",
      category: "",
      title: "",
      private: false
    }
  };

  handleChange = (e, { name, value }) => {
    const form = this.state.form;
    form[name] = value;
    this.setState({
      form
    });
  };

  handleToggle = () => {
    const form = this.state.form;
    this.setState({
      form: {
        ...form,
        private: !this.state.form.private
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = {
      ...this.state.form,
      date: new Date(this.state.form.date)
    };
    this.props.createEvent(form);
  };

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <Message warning>
          {this.props.errorMessage}
        </Message>
      );
    }
  };

  render() {
    return (
      <Container as="section">
        <Grid centered>
          <Grid.Column className="signup">
            <Header as="h1">New Event</Header>
            {this.renderAlert()}
            <Segment stacked>
              <NewEventForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                onToggle={this.handleToggle}
                form={this.state.form}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.api.error
});

export default connect(mapStateToProps, { createEvent })(NewEventContainer);
