import React from 'react';
import instadate from 'instadate';
import { Table, Button } from 'semantic-ui-react';

const renderControls = (
  <Table.Cell>
    <Button.Group>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Button.Group>
  </Table.Cell>
);

const Events = ({ date, category, title, authenticated }) => {
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
      {authenticated ? renderControls : ''}
    </Table.Row>
  );
};

export default Events;
