import React from "react";
import _ from "lodash";
import Loading from "./Loading";
import Year from "./Year";
import * as DateUtils from "../../utils/DateUtils";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as apiActions from "../../actions/apiActions";

import "./styles.css";

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
      for (let age = 0; age < 101; age++) {
        const thisYearEvents = DateUtils.withinYear(
          this.props.events,
          dob,
          age
        );
        years.push(Year({ thisYearEvents, age, dob }));
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
