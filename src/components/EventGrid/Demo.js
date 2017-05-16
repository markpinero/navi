import React from 'react';
import { isEmpty } from 'lodash';
import { Container, Divider } from 'semantic-ui-react';
import Loading from './Loading';
import Year from './Year';
import * as DateUtils from '../../utils/DateUtils';
import { connect } from 'react-redux';
import { getEventDemo, getUserDemo } from '../../actions/apiActions';

import './styles.css';

class Demo extends React.Component {
  componentDidMount() {
    this.props.getEventDemo();
    this.props.getUserDemo();
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
            <ul className="legend">
              <li><strong>Legend:</strong></li>
              <li><div className="sq personal" /> Personal</li>
              <li><div className="sq family" /> Family</li>
              <li><div className="sq school" /> School</li>
              <li><div className="sq career" /> Career</li>
              <li><div className="sq general" /> General</li>
            </ul>
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

export default connect(mapStateToProps, { getEventDemo, getUserDemo })(Demo);
