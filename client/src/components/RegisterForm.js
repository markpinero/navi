import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const RegisterForm = ({ onSubmit, onChange, errors, user }) => (
  <div>
    <h1>Register</h1>
    <Form action="/" onSubmit={onSubmit}>
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
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);

export default RegisterForm;
