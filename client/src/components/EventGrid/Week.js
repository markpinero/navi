import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './styles.css';

class Week extends React.Component {
  renderBoxes = events => {
    if (events.length > 0) {
      return <div className="box event" />;
    } else {
      return <div className="box" />;
    }
  };

  render() {
    const thisYearsEvents = this.props.events.filter((event, index) => {
      let thisYear = moment(this.props.user.dateOfBirth).set({
        year: this.props.year
      });
      let nextYear = moment(thisYear).add(1, 'year').subtract(1, 'day');
      if (moment(event.date).isBetween(thisYear, nextYear)) {
        return event;
      }
    });

    const boxes = this.renderBoxes(thisYearsEvents);
    return <span>{boxes}</span>;
  }
}

const thisYearsEvents = (events, startYear, endYear) => {
  const event = events.filter(event => {
    if (moment(event.date).isBetween(startYear, endYear)) {
      return event;
    }
  });
  if (event) return event[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  // const startYear = moment(state.api.user.dateOfBirth).set({
  //   year: ownProps.year
  // });
  // const endYear = moment(state.api.user.dateOfBirth)
  //   .set({
  //     year: ownProps.year
  //   })
  //   .add(1, 'year')
  //   .subtract(1, 'day');
  // let events = [];
  // events = thisYearsEvents(state.api.events, startYear, endYear);
  return {
    events: state.api.events,
    user: state.api.user
  };
};

export default connect(mapStateToProps)(Week);
