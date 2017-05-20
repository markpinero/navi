import React from "react";
import { Form } from "semantic-ui-react";

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  <Form action="/" onSubmit={onSubmit}>
    <Form.Group widths="equal">
      <Form.Input
        onChange={onChange}
        name="firstName"
        label="First Name"
        value={user.firstName}
        placeholder="John"
      />
      <Form.Input
        onChange={onChange}
        name="lastName"
        label="Last Name"
        value={user.lastName}
        placeholder="Smith"
      />
    </Form.Group>
    <Form.Input
      onChange={onChange}
      name="born"
      label="Date of Birth"
      value={user.born}
      placeholder="MM/DD/YYYY"
    />
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
      placeholder="******"
    />
    <Form.Button fluid primary type="submit">Sign Up</Form.Button>
  </Form>
);

export default SignUpForm;
