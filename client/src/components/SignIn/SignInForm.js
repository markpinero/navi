import React from 'react';
import { Form } from 'semantic-ui-react';

const SignInForm = ({ onSubmit, onChange, errors, user }) => (
  <Form action="/" onSubmit={onSubmit}>
    <Form.Input
      onChange={onChange}
      name="email"
      label="E-mail Address"
      value={user.email}
      placeholder="JohnSmith@gmail.com"
    />
    <Form.Input
      onChange={onChange}
      name="password"
      label="Password"
      value={user.password}
      placeholder="******"
    />
    <Form.Button fluid primary type="submit">Sign In</Form.Button>
  </Form>
);

export default SignInForm;
