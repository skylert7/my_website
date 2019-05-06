// Import ReactDOM and React
import React from 'react';
import Navigation from '../Navigation/Navigation'


export default class Sudoku extends React.Component {
  render() {
    return(
      <div>
        <Navigation/>
        <h1>This is Sudoku Page</h1>
      </div>
    );
  }
}
