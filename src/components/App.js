import React, { Component } from 'react';
import { Container, Box } from '../styled';
import moment from 'moment';

const data = {
  name: 'Mark Pinero',
  birthday: [1987, 10, 13],
  data: []
};

class App extends Component {
  render() {
    const now = moment();
    const birthday = moment(data.birthday);
    const weeks = now.diff(birthday, 'weeks');

    for (let i = 0; i < weeks; i++) {
      let date = moment(data.birthday).add(i, 'week').startOf('week');
      data.data.push({ week: i, date: date });
    }

    const boxes = data.data.map((e, i) => {
      return <Box key={i} />;
    });

    console.log(data);

    return (
      <div className="App">
        <Container>
          {boxes}
        </Container>
      </div>
    );
  }
}

export default App;
