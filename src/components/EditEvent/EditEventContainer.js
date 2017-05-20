import React from 'react';
import EditEventForm from './EditEventForm';
import { connect } from 'react-redux';
import { Container, Grid, Segment, Header, Message } from 'semantic-ui-react';
import { updateEvent } from '../../actions/apiActions';

class EditEventContainer extends React.Component {
  state = {
    errors: {},
    form: {
      ...this.props.form
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
    this.props.updateEvent(form);
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
            <Header as="h1">Edit Event</Header>
            {this.renderAlert()}
            <Segment stacked>
              <EditEventForm
                form={this.state.form}
                onToggle={this.handleToggle}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const getEventById = (events, id) => {
  const event = events.filter(x => x._id === id);
  if (event) return event[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.eventId;
  const event = getEventById(state.api.events, eventId);

  return {
    form: event,
    errorMessage: state.api.error
  };
};

export default connect(mapStateToProps, { updateEvent })(EditEventContainer);
