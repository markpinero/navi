import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import * as apiActions from '../../actions/apiActions';

class EventGridContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(apiActions.getUserDetails());
  }

  render() {
    return (
      <div>
        <h1>EventGridContainer</h1>
        <EventsList />
      </div>
    );
  }
}

export default connect()(EventGridContainer);
