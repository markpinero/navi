import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { HeaderElement } from '../styles';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    console.log('logout');
    this.props.dispatch(logoutUser());
  }

  render() {
    const loggedIn = (
      <Menu.Menu position="right">
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
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} name="register" to="/register">
          Sign Up
        </Menu.Item>
        <Menu.Item as={NavLink} name="login" to="/login">Login</Menu.Item>
      </Menu.Menu>
    );

    const authenticated = this.props.authenticated;

    return (
      <HeaderElement>
        <Menu>
          <Menu.Item header as={Link} to="/">Navi</Menu.Item>
          {authenticated ? loggedIn : loggedOut}
        </Menu>
      </HeaderElement>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
