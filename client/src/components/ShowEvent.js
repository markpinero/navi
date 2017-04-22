import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as apiActions from '../actions/apiActions';

class ShowEvent extends React.Component {
  componentDidMount() {
    this.props.dispatch(apiActions.getEvent(this.props.eventId));
  }

  render() {
    return (
      <Segment>
        tetesintlksafj
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  // TODO: if no state, fetch getEvent()

  return { eventId: eventId };
};

export default connect(mapStateToProps)(ShowEvent);
