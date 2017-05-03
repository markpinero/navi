import React from 'react';
import { Form } from 'semantic-ui-react';

const SignUpForm = ({ onSubmit, onChange, onDateChange, errors, user }) => (
  <div>
    <h1>Sign Up</h1>
    <Form action="/" onSubmit={onSubmit}>
      <Form.Group widths="equal">
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
      </Form.Group>

    </Form>
  </div>
);

export default SignUpForm;
