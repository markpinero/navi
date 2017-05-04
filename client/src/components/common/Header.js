import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const loggedOut = (
  <Menu.Menu position="right">
    <Menu.Item as={NavLink} to="/signup">Sign Up</Menu.Item>
    <Menu.Item as={NavLink} to="/signin">Sign In</Menu.Item>
  </Menu.Menu>
);

const loggedIn = (
  <Menu.Menu position="right">
    <Menu.Item as={NavLink} to="/profile">Profile</Menu.Item>
    <Menu.Item as={NavLink} to="/logout">Logout</Menu.Item>
  </Menu.Menu>
);

const Header = ({ authenticated }) => (
  <Menu className="masthead" attached borderless>
    <Container>
      <Menu.Item as={Link} to="/" header>Navi</Menu.Item>
      {authenticated ? loggedIn : loggedOut}
    </Container>
  </Menu>
);

export default Header;
