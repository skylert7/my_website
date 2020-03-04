// Import ReactDOM and React
import React from 'react';
import './TicTacToe.css';
import RouteToBackend from '../api/RouteToBackend'

export default class TicTacToe extends React.Component {
  routeToBackend = new RouteToBackend();
  constructor(props){
  super(props);

  this.state = {
    PvP: true,
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    playerTurn: true
  }

  this.toggle = this.toggle.bind(this);
  this.AIvsAI = this.AIvsAI.bind(this);
  this.onClick = this.onClick.bind(this);
  this.resetBoard = this.resetBoard.bind(this);
}

  toggle = e => {

  }

  resetBoard = e => {
    this.setState({playerTurn: true})
    let initialBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.setState({board: initialBoard});
  }

  switchPosition = e => {

  }

  undoAction = e => {

  }

  AIvsAI = e => {
    this.setState({PvP: !this.state.PvP})
  }

  PvE = e => {
    this.setState({PvP: !this.state.PvP})
  }

  updateBoard = async e => {
    await this.routeToBackend.tttGetOpponentMove(this.state.board).then(res => {
         this.setState({board: res.board});
         this.setState({playerTurn: true})
      }).catch(res => {
        alert("Error in getting opponent move")
      })
  }

  onClick = async e => {
    let move = e.target.id
    if(!this.state.playerTurn){
      return
    }

    if (this.state.board[move] === 0){
      await this.routeToBackend.tttSendMove(this.state.board, move).then(res => {
         this.setState({board: res.board});

      }).catch(res => {
         alert("Error in sending move")
      })

    //Set playerTurn to false
    this.setState({playerTurn: false})

     await this.updateBoard()
    }
    else{
      alert("Wrong move, please choose again.")
    }

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
          this.state.board.map((value, index) => {
            let stringFromCode = ""
            if(value == -1){
              stringFromCode = "O"
            }
            else if (value == 1) {
              stringFromCode = "X"
            }
              return (<div onClick={this.onClick}  key={index} id={index} className="box-tttBoard" ><p>{stringFromCode}</p></div>)
            })
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
          <button type="button" className="btn btn-secondary" onClick={this.resetBoard}>Reset Board</button>

          </div>

        </div>
        </div>
      </div>
    );
  }
}
