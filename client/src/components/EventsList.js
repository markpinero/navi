import React from 'react';
import Event from './Event';
import moment from 'moment';
import { connect } from 'react-redux';

const EventsList = ({ events }) => (
  <div>
    {events.map((event, index) => {
      const date = moment(event.date).format('MM-DD-YYYY');
      return (
        <Event key={index} id={event._id} event={event.event} date={date} />
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  events: state.api.events
});

export default connect(mapStateToProps)(EventsList);
