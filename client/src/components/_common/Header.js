import React from 'react';
import { Menu, Container, Button, Segment, Icon } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import './styles.css';
// import { HeaderSegment } from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => this.props.dispatch(logoutUser());

  render() {
    const loggedIn = (
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} name="new" to="/new">New</Menu.Item>
        <Menu.Item as={NavLink} name="profile" to="/profile">
          Profile
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          name="logout"
          to="/logout"
          onClick={this.handleLogout}>
          Logout
        </Menu.Item>
      </Menu.Menu>
    );

    const loggedOut = (
      <Menu.Item position="right">
        <Button as={Link} name="signin" to="/signin" color="blue" basic>
          Sign In
        </Button>
      </Menu.Item>
    );

    return (
      <Segment as="header" className="masthead">
        <Menu secondary as="header" size="huge">
          <Menu.Item as={Link} name="home" to="/">
            <Icon name="block layout" />
          </Menu.Item>
          {this.props.authenticated ? loggedIn : loggedOut}
        </Menu>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
