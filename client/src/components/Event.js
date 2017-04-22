import React from 'react';
import { Link } from 'react-router-dom';

const Event = props => (
  <div>
    <Link to={'/event/' + props._id}>{props.event}</Link> - {props.date}
  </div>
);

export default Event;
