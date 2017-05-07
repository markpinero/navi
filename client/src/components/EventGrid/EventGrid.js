import React from "react";
import _ from "lodash";
import Loading from "./Loading";
import * as DateUtils from "../../utils/DateUtils";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as apiActions from "../../actions/apiActions";

import "./styles.css";

class Month extends React.Component {
  render() {
    const { start, birthday, events } = this.props;
    return (
      <div
        id={start}
        className={DateUtils.renderClasses(start, birthday, events)}
      />
    );
  }
}

const renderYear = ({ thisYearEvents, age, dob }) => {
  const startDate = DateUtils.startDate(dob, age);
  let months = [];
  for (let month = 0; month < 12; month++) {
    const startMonth = DateUtils.StartMonth(startDate, month);
    const thisMonthsEvents = DateUtils.withinMonth(
      thisYearEvents,
      startDate,
      month
    );
    months.push(
      <Month
        start={startMonth}
        birthday={startDate}
        events={thisMonthsEvents}
        key={startMonth}
      />
    );
  }
  return (
    <div key={age} className="year-grid">
      {months}
    </div>
  );
};

class EventGrid extends React.Component {
  componentDidMount() {
    this.props.actions.getUserDetails();
    this.props.actions.getAllEvents();
  }
  render() {
    const dob = new Date(this.props.user.born);
    if (_.isEmpty(this.props.user)) {
      return <Loading />;
    } else {
      let years = [];
      for (let age = 0; age < 15; age++) {
        const thisYearEvents = DateUtils.withinYear(
          this.props.events,
          dob,
          age
        );
        years.push(renderYear({ thisYearEvents, age, dob }));
      }
      return (
        <div className="event-grid" key="1453534">
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
