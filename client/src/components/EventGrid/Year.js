import React from 'react';
import moment from 'moment';
import Week from './Week';
import { connect } from 'react-redux';

class Year extends React.Component {
  renderWeek = ({ age, events }) => {
    let weeks = [];
    for (let week = 0; week <= 52; week++) {
      const weekId = age * 52 + week;
      weeks.push(<Week key={weekId} />);
    }
    return weeks;
  };

  renderYear = (age, events) => (
    <span key={age}>
      {this.renderWeek({ age, events })}
    </span>
  );

  render() {
    let years = [];
    for (let age = 0; age <= 100; age++) {
      years.push(this.renderYear(age, this.props.events));
    }
    return <div>{years}</div>;
  }
}

const mapStateToProps = state => ({
  events: state.api.events,
  user: state.api.user
});

export default connect(mapStateToProps)(Year);
