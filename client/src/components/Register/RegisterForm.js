import React from 'react';
// import DatePicker from 'react-datepicker';

import { Segment, Form, Divider } from 'semantic-ui-react';

const RegisterForm = ({ onSubmit, onChange, onDateChange, errors, user }) => (
  <Segment>
    <h1>Register</h1>
    <Divider />
    <Form action="/" onSubmit={onSubmit}>
      {/* <Form.Group widths="equal">
        <Form.Input
          label="First Name"
          onChange={onChange}
          name="firstName"
          value={user.firstName}
        />
        <Form.Input
          label="Last Name"
          onChange={onChange}
          name="lastName"
          value={user.lastName}
        />
        <Form.Field>
          <label>Date of birth</label>
          <DatePicker
            selected={user.dob}
            name="dob"
            onDateChange={onDateChange}
            placeholderText="MM/DD/YYYY"
          />
        </Form.Field>
      </Form.Group>
      <Divider /> */}
      <Form.Input
        label="E-Mail"
        onChange={onChange}
        name="email"
        value={user.email}
      />
      <Form.Input
        label="Password"
        onChange={onChange}
        name="password"
        type="password"
        value={user.password}
      />
      <Form.Button type="submit" content="Submit" />
    </Form>
  </Segment>
);

export default RegisterForm;
