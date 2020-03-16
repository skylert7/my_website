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
            <div><Link to="/tictactoe">Tic Tac Toe Game</Link></div>
            <div><Link to="/tetris">Tetris Game</Link></div>
            <div><Link to="/slither">Slither Game</Link></div>
            <div><Link to="/sudoku">Sudoku Game</Link></div>
            <div><Link to="/gomoku">Gomoku Game</Link></div>

            <div></div>
          </div>
        </section>
      </header>
    );
  }
}
