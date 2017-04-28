import React from 'react';
import moment from 'moment';
import Loading from './Loading';
import Year from './Year';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as apiActions from '../../actions/apiActions';

import './styles.css';

// TODO: One year, one row. Make responsive?
// TODO: Convert dates to locale
// TODO: Check if alive, present? in <Box />

class EventGrid extends React.Component {
  componentDidMount() {
    this.props.actions.getUserDetails();
    this.props.actions.getAllEvents();
  }

  render() {
    if (this.props.events == null) {
      return <Loading />;
    } else {
      return <Container><Year /></Container>;
    }
  }
}

const mapStateToProps = state => ({
  events: state.api.events,
  user: state.api.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(apiActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventGrid);
