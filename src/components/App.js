import React, { Component } from 'react';
import { Container, Box } from '../styled';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const data = {
  name: 'Mark Pinero',
  birthday: [1987, 10, 13],
  birthdayString: '1987-11-13',
  lifeExpectancy: 84.07,
  data: []
};

class App extends Component {
  render() {
    const now = moment();
    const birthdayWeek = moment(data.birthday).startOf('week');
    const weeks = now.diff(birthdayWeek, 'weeks');
    console.log(weeks);

    let years = 90 * 52;
    let lifeExpectancyWeeks = Math.round(data.lifeExpectancy * 52);
    // make this many boxes, active boxes up til now
    // it's missing sunday birthdays

    for (let i = 0; i <= years; i++) {
      const weekOf = moment(data.birthday)
        .add(i, 'week')
        .startOf('week')
        .format('YYYY-MM-DD');
      const weekEnd = moment(weekOf).add(1, 'week').format('YYYY-MM-DD');
      const getYear = moment(weekOf).get('year');
      const weekRange = moment.range(weekOf, weekEnd);
      const thisYearBirthday = new Date(
        getYear,
        data.birthday[1],
        data.birthday[2]
      );
      const checkBirthday = weekRange.contains(thisYearBirthday, {
        exclusive: true
      });
      let expectedAlive = true;
      if (i > lifeExpectancyWeeks) {
        expectedAlive = false;
      }

      data.data.push({
        week: i,
        date: weekOf,
        birthday: checkBirthday,
        expectedAlive: expectedAlive
      });
    }

    const boxes = data.data.map((e, i) => {
      if (e.expectedAlive) {
        if (e.birthday) {
          return (
            <Box
              key={i}
              date={e}
              style={{ border: '1px black solid', background: 'white' }}
            />
          );
        } else {
          return (
            <Box
              key={i}
              date={e}
              style={{ background: 'rgba(0, 0, 0, 0.2)' }}
            />
          );
        }
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

  // componentDidMount() {
  //   fetch(
  //     `http://api.population.io:80/1.0/life-expectancy/total/male/United%20States/${data.birthdayString}/`
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       const lifeExpectancy = res.total_life_expectancy.toFixed(2);
  //       console.log(lifeExpectancy);
  //     });
  // }
}

export default App;
