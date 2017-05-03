import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class Week extends React.Component {
  render() {
    const renderClasses = () => {
      const birthday = moment(this.props.start).set({ month: 10, date: 12 });
      let classes = 'sq';
      if (moment().isAfter(this.props.start)) classes += ' alive';
      if (moment(this.props.start).isSame(birthday, 'week'))
        classes += ' birthday';
      return classes;
    };

    return <div className={renderClasses()} />;
  }
}

const mapStateToProps = state => ({
  user: state.api.user
});

export default connect(mapStateToProps)(Week);
