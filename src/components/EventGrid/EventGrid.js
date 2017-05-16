import React from 'react';
import { isEmpty } from 'lodash';
import { Container } from 'semantic-ui-react';
import Loading from './Loading';
import Year from './Year';
import * as DateUtils from '../../utils/DateUtils';
import { connect } from 'react-redux';
import { getUserDetails, getAllEvents } from '../../actions/apiActions';

import './styles.css';

class EventGrid extends React.Component {
  componentDidMount() {
    this.props.getUserDetails();
    this.props.getAllEvents();
  }
  render() {
    const dob = new Date(this.props.user.born);
    if (isEmpty(this.props.user)) {
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
        <Container as="section">
          <div className="event-grid">
            {years}
          </div>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  events: state.api.events,
  user: state.api.user,
  requests: state.ui.requests
});

export default connect(mapStateToProps, { getUserDetails, getAllEvents })(
  EventGrid
);
