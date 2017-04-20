// import * as types from './actionTypes';
import axios from 'axios';
import moment from 'moment';

export const postLifeExpectancy = expireAge => {
  return dispatch => {
    axios.post('/api/user', expireAge).then(response => {
      console.log(response);
    });
  };
};

export const calcLifeExpectancy = ({ dob, gender, country }) => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `http://api.population.io:80/1.0/life-expectancy/total/${gender}/${country}/${dob}/`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        return moment('1987-11-13')
          .add(response.data.total_life_expectancy, 'years')
          .format('YYYY-MM-DD');
        // postLifeExpectancy(response.data.total_life_expectancy)
      })
      .then(expireDate => {
        dispatch(postLifeExpectancy(expireDate));
      })
      .catch(err => console.log(err));
  };
};
