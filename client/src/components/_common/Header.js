import React from 'react';
import { Menu, Button, Segment, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import './styles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => this.props.dispatch(logoutUser());

  renderMenu = () => {
    if (this.props.authenticated) {
      return (
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
    } else {
      return (
        <Menu.Item position="right">
          <Button as={NavLink} name="signin" to="/signin" color="blue" basic>
            Sign In
          </Button>
        </Menu.Item>
      );
    }
  };

  render() {
    return (
      <Segment as="header" className="masthead" attached>
        <Menu secondary as="header" size="huge">
          <Menu.Item as={NavLink} name="home" to="/">
            <Icon name="block layout" />
          </Menu.Item>
          {this.renderMenu()}
        </Menu>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);
