import React from 'react';
import { isEmpty } from 'lodash';
import Grounding from 'react-grounding';
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
            <Grounding className="legend-container">
              <Container>
                <ul className="legend">
                  <li><strong>Legend:</strong></li>
                  <li><div className="sq personal" /> Personal</li>
                  <li><div className="sq family" /> Family</li>
                  <li><div className="sq school" /> School</li>
                  <li><div className="sq career" /> Career</li>
                  <li><div className="sq general" /> General</li>
                </ul>
              </Container>
            </Grounding>
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
