// Import ReactDOM and React
import React from 'react';
import Navigation from '../Navigation/Navigation'

export default class Tetris extends React.Component {
  render() {
    return(
      <div>
        <Navigation/>
        <h1>This is Tetris Page</h1>
      </div>
    );
  }
}
