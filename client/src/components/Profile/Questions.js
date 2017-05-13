import React from "react";
import instadate from "instadate";
import { Table, Button } from "semantic-ui-react";

const Questions = ({ date, category, title, show }) => {
  const newDate = new Date(date);
  const ifPeriod = title.endsWith(".");
  return (
    <Table.Row>
      <Table.Cell singleLine>
        {instadate.isoDateString(newDate)}
      </Table.Cell>
      <Table.Cell className="profile-category">
        {category}
      </Table.Cell>
      <Table.Cell>{title}{ifPeriod ? "" : "."}</Table.Cell>
      <Table.Cell>
        <Button.Group>
          {/*
          TODO: Implement editing
          <Button>Edit</Button>
          */}
          <Button onClick={show}>Delete</Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  );
};

export default Questions;
