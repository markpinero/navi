import React from "react";
import { Form } from "semantic-ui-react";

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
      type="password"
      value={user.password}
    />
    <Form.Button fluid primary type="submit" content="Sign In" />
  </Form>
);

export default SignInForm;
