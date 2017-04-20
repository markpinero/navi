import React from 'react';
import { Button, Form, Divider } from 'semantic-ui-react';

const LoginForm = ({ onSubmit, onChange, errors, user }) => (
  <div>
    <h1>Login</h1>
    <Divider />
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
      <Button fluid type="submit">Submit</Button>
    </Form>
  </div>
);

export default LoginForm;
