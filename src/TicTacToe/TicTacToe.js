// Import ReactDOM and React
import React from 'react';
import './TicTacToe.css';
export default class TicTacToe extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    PvP: true,
    board: []
  }

  this.toggle = this.toggle.bind(this);
  this.AIvsAI = this.AIvsAI.bind(this);
}

  toggle = e => {

  }

  resetBoard = e => {

  }

  AIvsAI = e => {
    this.setState({PvP: !this.state.PvP})
  }

  PvE = e => {
    this.setState({PvP: !this.state.PvP})
  }

  updateBoard = e => {

  }

  start = e => {

  }

  componentDidMount(){
  }

  render() {
    return(
      <div>
        <div className="body">

        <div className="tictactoe">
        <h1>Tic Tac Toe with Alpha-Beta</h1>

          <div className="tttBoard">
          {
            function() {
              let boxes = [];
              for (var i = 0; i < 9; i++) {
                boxes.push(<div className="box-tttBoard"><p id={i+1}></p></div>)
              }
              return boxes;
            }()
          }
          </div>

          <div className="board-button">
          <button type="button" className="btn btn-success">Start</button>

          { this.state.PvP ? (
            <button type="button" className="btn btn-warning" onClick={this.AIvsAI}>Switch to AI vs AI</button>
          ) : (
            <button type="button" className="btn btn-warning" onClick={this.PvE}>Switch to Player vs AI</button>
          )}

          </div>

          <div className="board-button-secondary">
          <button type="button" className="btn btn-secondary">Undo</button>
          <button type="button" className="btn btn-secondary">Switch Position</button>
          <button type="button" className="btn btn-secondary">Reset Board</button>

          </div>

        </div>
        </div>
      </div>
    );
  }
}
