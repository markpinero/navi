import React from 'react';
import { Form } from 'semantic-ui-react';

const categoryOptions = [
  { text: 'Personal', value: 'personal' },
  { text: 'Family', value: 'family' },
  { text: 'Career', value: 'career' },
  { text: 'School', value: 'school' },
  { text: 'General', value: 'general' }
];

const EditEventForm = ({ onSubmit, onChange, onToggle, form }) => (
  <Form onSubmit={onSubmit}>
    <Form.Input
      label="Event Title"
      name="title"
      onChange={onChange}
      placeholder="Travelled to Europe"
      value={form.title}
    />
    <Form.Input
      label="Date"
      name="date"
      onChange={onChange}
      placeholder="MM/DD/YYYY"
      value={form.date}
    />
    <Form.Select
      label="Category"
      name="category"
      onChange={onChange}
      options={categoryOptions}
      placeholder="Personal, Family, Career..."
      search
      value={form.category}
    />
    <Form.Checkbox
      label="Private Event"
      name="privateEvent"
      onChange={onToggle}
      checked={form.private}
    />
    <Form.Button fluid primary content="Submit" type="submit" />
  </Form>
);

export default EditEventForm;
