import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HeaderSegment } from '../../styled';
import { logoutUser } from '../../actions/authActions';

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
      <Menu.Item position="right">
        <Button as={NavLink} name="new" to="/new">New</Button>
        <Button as={NavLink} name="profile" to="/profile" color="blue" basic>
          Profile
        </Button>
        <Button
          as={NavLink}
          name="logout"
          to="/logout"
          onClick={this.handleLogout}
          basic>
          Logout
        </Button>
      </Menu.Item>
    );

    const loggedOut = (
      <Menu.Item position="right">
        <Button.Group color="blue">
          <Button as={NavLink} name="register" to="/register">
            Sign Up
          </Button>
          <Button as={NavLink} name="login" to="/login">Login</Button>
        </Button.Group>
      </Menu.Item>
    );

    return (
      <HeaderSegment
        textAlign="center"
        attached
        vertical
        className="masthead"
        color="blue">
        <Container>
          <Menu size="large" secondary>
            <Menu.Item as={Link} to="/">Navi</Menu.Item>
            {this.props.authenticated ? loggedIn : loggedOut}
          </Menu>
        </Container>
      </HeaderSegment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
