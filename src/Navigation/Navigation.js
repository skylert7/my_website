// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
export default class Navigation extends React.Component {
  constructor(props){
  super(props);
}

  render() {
    return(
      <header>
        <section className="navBar">
          <div className="title">
            <h2>Skyler Tran</h2>Designed for GUI Fall 2019</div>
          <div className="link">
            <div><a href="/#bio">Biography</a></div>
            <div><a href="/#grades">Academic Records</a></div>
            <div><a href="/#contact">Contact Me</a></div>
            <div><a href="/tictactoe">Tic Tac Toe Game</a></div>
            <div><a href="/tetris">Tetris Game</a></div>
            <div><a href="/slither">Slither Game</a></div>
            <div><a href="/sudoku">Sudoku Game</a></div>

          </div>
        </section>
      </header>
    );
  }
}
