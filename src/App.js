import React, { Component } from 'react';
import Block from './components/Block';
import BlockContainer from './components/BlockContainer';

const map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1]
map = map.concat(...map);
map = map.concat(...map);

class App extends Component {
  
  render() {
    const bloc = map.map((e, i) => {
      return (
        <Block key={i} data={e} />
        )
    });

    return (
      <div className="App">
        {bloc}
      </div>
    );
  }
}

export default App;
