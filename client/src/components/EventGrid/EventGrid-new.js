import React from 'react';
import Loading from './Loading';
import * as DateUtils from '../../utils/DateUtils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apiActions from '../../actions/apiActions';

// const renderWeek = (week, events) => {
//   let weeks = [];
//   for (let week = 0; week < 52; week++) {
//
//   }
//   return (
//
//   )
// }

const renderYear = (year, events) => {
  return <span key={year}>{year}</span>;
};

class EventGrid extends React.Component {
  componentDidMount() {
    this.props.actions.getUserDetails();
    this.props.actions.getAllEvents();
  }
  render() {
    if (this.props.requests > 0) {
      return <Loading />;
    } else {
      let years = [];
      for (let age = 0; age < 29; age++) {
        const year = new Date(this.props.user.born).getFullYear() + age;
        const events = this.props.events.filter(event => {
          return DateUtils.withinYear(event, this.props.user.born, age);
        });
        years.push(renderYear(year, events));
      }
      return (
        <div className="event-grid">
          {years}
        </div>
      );
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
