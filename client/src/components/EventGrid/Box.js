import React from 'react';
import { Link } from 'react-router-dom';
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    event.preventDefault();
    console.log(this.props.weekStart + 'click');
  };

  parseEvents = events => {
    if (events.length > 0) {
      return events[0].category.toLowerCase();
    } else {
      return '';
    }
  };

  render() {
    return (
      <Link to={`/week/${this.props.weekStart}`}>
        <div
          className={
            'box ' +
              this.parseEvents(this.props.events) +
              (this.props.birthday ? 'birthday' : '')
          }
          onClick={this.handleClick}
        />
      </Link>
    );
  }
}

export default Box;
