import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends React.Component {
  handleClick = () => {
    this.props.dispatch(logoutUser());
  };

  render() {
    const loggedOut = (
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/signup">Sign Up</Menu.Item>
        <Menu.Item as={NavLink} to="/signin">Sign In</Menu.Item>
      </Menu.Menu>
    );

    const loggedIn = (
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/new">New Event</Menu.Item>
        <Menu.Item as={NavLink} to="/profile">Profile</Menu.Item>
        <Menu.Item as={NavLink} onClick={this.handleClick} to="/logout">
          Logout
        </Menu.Item>
      </Menu.Menu>
    );
    return (
      <Menu className="masthead" attached borderless>
        <Container>
          <Menu.Item as={Link} to="/" header>Navi</Menu.Item>
          {this.props.authenticated ? loggedIn : loggedOut}
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
