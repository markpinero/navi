import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as apiActions from '../actions/apiActions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.props.dispatch(apiActions.getAllEvents());
  }

  render() {
    console.log(this.props.events);
    return (
      <Segment>
        <h1>Dashboard</h1>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  events: state.api.events
});

export default connect(mapStateToProps)(Dashboard);
