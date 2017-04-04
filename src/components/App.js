import React, { Component } from 'react';
import { Container, Box } from '../styled';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const data = {
  name: 'Mark Pinero',
  birthday: [1987, 10, 13],
  data: []
};

class App extends Component {
  render() {
    const now = moment();
    const birthdayWeek = moment(data.birthday).startOf('week');
    const weeks = now.diff(birthdayWeek, 'weeks');
    console.log(weeks);

    for (let i = 0; i <= weeks; i++) {
      const weekOf = moment(data.birthday)
        .add(i, 'week')
        .startOf('week')
        .format('YYYY-MM-DD');
      const weekEnd = moment(weekOf).add(1, 'week').format('YYYY-MM-DD');
      const getYear = moment(weekOf).get('year');
      const weekRange = moment.range(weekOf, weekEnd);
      const thisYearBirthday = new Date(getYear, 10, 13);
      const checkBirthday = weekRange.contains(thisYearBirthday);

      data.data.push({ week: i, date: weekOf, birthday: checkBirthday });
    }

    const boxes = data.data.map((e, i) => {
      if (e.birthday) {
        return <Box key={i} date={e} style={{ border: '1px black solid' }} />;
      } else {
        return <Box key={i} date={e} />;
      }
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
