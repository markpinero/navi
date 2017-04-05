import React, { Component } from 'react';
import { Container, BoxElement } from '../styled';
import moment from 'moment';

const data = {
  name: 'Mark Pinero',
  birthday: [1987, 10, 13],
  birthdayString: '11-13',
  lifeExpectancy: 84,
  weeks: []
};

class App extends Component {
  render() {
    // const now = moment();
    const years = 90;

    for (let age = 0; age < years; age++) {
      const setYear = moment(data.birthday).add(age, 'year').year();
      const startDate = moment(`${setYear}-${data.birthdayString}`).format(
        'YYYY-MM-DD'
      );

      for (let week = 0; week < 52; week++) {
        const setWeek = moment(startDate)
          .add({ weeks: week })
          .format('YYYY-MM-DD');

        let checkBirthday = false;

        if (setWeek === startDate) {
          checkBirthday = true;
        }

        data.weeks.push({
          birthWeek: checkBirthday,
          date: setWeek
        });
      }
    }

    function Box(props) {
      let birthdayStyle = { border: '1px black solid' };
      return (
        <BoxElement
          date={props.date}
          style={props.birthWeek ? birthdayStyle : null}
        />
      );
    }

    const boxes = data.weeks.map((e, i) => {
      return <Box key={i} date={e} birthWeek={e.birthWeek} />;
    });

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
