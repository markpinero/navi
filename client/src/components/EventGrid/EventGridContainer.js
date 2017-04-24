import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import * as apiActions from '../../actions/apiActions';

class EventGridContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(apiActions.getEventGrid());
  }

  render() {
    return (
      <Segment>
        <h1>Timeline</h1>
        <EventsList />
      </Segment>
    );
  }
}

export default connect()(EventGridContainer);
