import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as apiActions from '../../actions/apiActions';
import moment from 'moment';
import _ from 'lodash';
import Box from './Box';

import './styles.css';

class EventGridContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(apiActions.getEventGrid());
  }

  render() {
    const data = [];
    const dob = moment(this.props.user.dateOfBirth).add(1, 'day');
    const weeksAlive = moment().diff(dob, 'weeks');
    const mm = moment(dob).get('month');
    const dd = moment(dob).add(1, 'day').get('date');
    console.log(dd);

    for (let week = 0; week <= weeksAlive; week++) {
      let weekStart = moment(dob).add(week, 'weeks').format('YYYY-MM-DD');
      let weekEnd = moment(weekStart).add(6, 'days').format('YYYY-MM-DD');
      let yy = moment(weekStart).get('year');

      let thisWeeksEvents = [];
      thisWeeksEvents = this.props.events.filter((event, index) => {
        if (moment(event.date).isBetween(weekStart, weekEnd, null, '[]')) {
          return event;
        } else {
          return null;
        }
      });

      let birthday = false;
      if (moment([yy, mm, dd]).isBetween(weekStart, weekEnd, null, '[]')) {
        birthday = true;
      }

      data.push(
        <Box
          key={week}
          weekStart={weekStart}
          events={thisWeeksEvents}
          birthday={birthday}
        />
      );
    }

    return (
      <Segment>
        <h1>Timeline</h1>
        <div className="clear">{data}</div>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  events: state.api.events,
  user: state.api.user
});

export default connect(mapStateToProps)(EventGridContainer);
