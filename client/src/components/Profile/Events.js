import React from 'react';
import instadate from 'instadate';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const Events = ({ id, date, category, title, authenticated }) => {
  const parseDate = new Date(date);
  const ifPeriod = title.endsWith('.');
  return (
    <Table.Row>
      <Table.Cell singleLine>
        {instadate.isoDateString(parseDate)}
      </Table.Cell>
      <Table.Cell className="profile-category">
        {category}
      </Table.Cell>
      <Table.Cell>{title}{ifPeriod ? '' : '.'}</Table.Cell>
      <Table.Cell>
        <Button.Group>
          <Button as={Link} to={`/event/` + id}>Edit</Button>
          <Button>Delete</Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  );
};

export default Events;
