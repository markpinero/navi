import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Year from './Year';
import Week from './Week';
// import * as apiActions from '../../actions/apiActions';

class EventsList extends React.Component {
  render() {
    const data = [];
    const years = moment().diff(this.props.user.dateOfBirth, 'years');
    for (let age = 0; age <= years; age++) {
      let thisYear = moment(this.props.user.dateOfBirth)
        .add(age, 'year')
        .get('year');
      data.push(
        <Year key={age} age={age}>
          <Week age={age} year={thisYear} />
        </Year>
      );
    }

    return <div style={{ wordWrap: 'break-word' }}>{data}</div>;
  }
}

const mapStateToProps = state => ({
  user: state.api.user
});

export default connect(mapStateToProps)(EventsList);
