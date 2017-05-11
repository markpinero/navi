import React from "react";
import { Form } from "semantic-ui-react";

const categoryOptions = [
  { text: "General", value: "general" },
  { text: "Personal", value: "personal" },
  { text: "School", value: "school" },
  { text: "Career", value: "career" },
  { text: "Family", value: "family" }
];

const NewEventForm = ({ onSubmit, onChange, onToggleChange, errors, form }) => (
  <Form onSubmit={onSubmit}>
    <Form.Field>
      <label>Date</label>
      <Form.Input
        name="date"
        onChange={onChange}
        value={form.date}
        placeholderText="MM/DD/YYYY"
      />
    </Form.Field>
    <Form.Select
      label="category"
      onChange={onChange}
      name="category"
      options={categoryOptions}
      placeholder="General, Personal, Career..."
      search
      value={form.category}
    />
    <Form.Input
      label="event"
      onChange={onChange}
      name="event"
      value={form.event}
    />
    <Form.Group>
      <Form.Checkbox
        label="Private Event"
        onChange={onToggleChange}
        name="private"
        checked={form.private}
      />
    </Form.Group>
    <Form.Button fluid primary type="submit" content="Submit" />
  </Form>
);

export default NewEventForm;
