import React from 'react';
import Loading from './Loading';
import moment from 'moment';
// import Year from './Year';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apiActions from '../../actions/apiActions';
import Week from './Week';

import './styles.css';

// TODO: Convert dates to locale
// TODO: Check if alive, present? in <Box />

class EventGrid extends React.Component {
  componentDidMount() {
    this.props.actions.getUserDetails();
    this.props.actions.getAllEvents();
  }

  renderWeek = ({ age, events }) => {
    let weeks = [];
    for (let week = 0; week < 52; week++) {
      const weekId = age * 52 + week;
      const getWeekStart = moment(this.props.user.born).add(weekId, 'weeks');
      const getWeekEnd = moment(getWeekStart).add(6, 'days');
      weeks.push(
        <Week key={getWeekStart} start={getWeekStart} end={getWeekEnd} />
      );
    }
    return weeks;
  };

  renderYear = (age, events) => (
    <span key={age}>
      {this.renderWeek({ age, events })}
    </span>
  );

  render() {
    if (this.props.requests) {
      return <Loading />;
    } else {
      let years = [];
      for (let age = 0; age <= 100; age++) {
        years.push(this.renderYear(age, this.props.events));
      }
      return <Container><div className="event-grid">{years}</div></Container>;
    }
  }
}

const mapStateToProps = state => ({
  events: state.api.events,
  user: state.api.user,
  requests: state.ui.requests
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(apiActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventGrid);
