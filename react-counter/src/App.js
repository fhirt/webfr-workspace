import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter message="Press the buttons on the left to increment, decrement and to refresh"/>
      </div>
    );
  }
}

export default App;
