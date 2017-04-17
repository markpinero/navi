import React from 'react';
import { Form } from 'semantic-ui-react';

class Onboarding extends React.Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Question 1</label>
          <input name="q1" onChange={this.handleChange} />
        </Form.Field>
      </Form>
    );
  }
}

export default Onboarding;
