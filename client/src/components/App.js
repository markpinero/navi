import React, { Component } from 'react';
import { Container, BoxElement } from '../styled';
import moment from 'moment';

const data = {
  name: 'Mark Pinero',
  birthday: [1987, 10, 13],
  birthdayString: '11-13',
  lifeExpectancy: 84,
  weeks: [],
  highlight: false
};

const highlights = [
  {
    date: '1988-10-11',
    title: 'Test title',
    category: 'Home'
  },
  {
    date: '1988-10-13',
    title: 'Test title 2',
    category: 'Home'
  },
  {
    date: '1988-10-15',
    title: 'Test title 3',
    category: 'Home'
  }
];

class App extends Component {
  render() {
    // const now = moment();
    const years = 2;

    for (let age = 0; age < years; age++) {
      const setYear = moment(data.birthday).add(age, 'year').year();
      const startDate = moment(`${setYear}-${data.birthdayString}`).format(
        'YYYY-MM-DD'
      );

      for (let week = 0; week < 52; week++) {
        const setWeek = moment(startDate)
          .add({ weeks: week })
          .format('YYYY-MM-DD');
        let highlight;
        let weekEnd = moment(setWeek).add(6, 'days');
        for (let i in highlights) {
          if (moment(highlights[i].date).isBetween(setWeek, weekEnd)) {
            highlight = true;
          }
        }

        let checkBirthday = false;

        if (setWeek === startDate) {
          checkBirthday = true;
        }

        data.weeks.push({
          birthWeek: checkBirthday,
          date: setWeek,
          highlight: highlight
        });
      }
    }

    function Box(props) {
      let birthdayStyle = { border: '1px black solid' };
      return (
        <BoxElement
          date={props.date}
          style={props.highlight ? birthdayStyle : null}
        />
      );
    }

    const boxes = data.weeks.map((e, i) => {
      return <Box key={i} date={e} highlight={e.highlight} />;
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
