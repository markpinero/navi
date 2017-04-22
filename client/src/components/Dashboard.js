import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import * as apiActions from '../actions/apiActions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(apiActions.getAllEvents());
  }

  render() {
    return (
      <Segment>
        <h1>Dashboard</h1>
        <EventsList />
      </Segment>
    );
  }
}

export default connect()(Dashboard);
