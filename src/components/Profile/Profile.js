import React from 'react';
import Questions from './Questions';
import { Container, Header, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllEvents } from '../../actions/apiActions';
import './styles.css';

class Profile extends React.Component {
  state = { open: false };

  show = () => {
    console.log(this.state);
  };

  handleCancel = () => this.setState({ open: false });
  handleConfirm = id => {
    this.setState({ open: false });
    console.log('delete');
  };

  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    const { events, authenticated } = this.props;
    return (
      <Container as="section">
        <Header as="h1">Profile</Header>
        <Header as="h1">Questions</Header>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>Date</Table.HeaderCell>
              <Table.HeaderCell width={2}>Category</Table.HeaderCell>
              <Table.HeaderCell>Event Title</Table.HeaderCell>
              <Table.HeaderCell collapsing />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {events.map((event, i) => (
              <Questions
                key={i}
                authenticated={authenticated}
                date={event.date}
                category={event.category}
                title={event.title}
                onClick={this.show}
              />
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  events: state.api.events,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, { getAllEvents })(Profile);
