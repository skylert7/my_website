// Import ReactDOM and React
import React from 'react';
import './Gomoku.css'
import RouteToBackend from '../api/RouteToBackend'
import { Fragment } from 'react';
export default class Gomoku extends React.Component {
  routeToBackend = new RouteToBackend();
  constructor(props){
  super(props);

  this.state = {
    PvP: true,
    board: Array(19*19).fill(0),
    playerTurn: true,
    winnerFoundOrTie: false
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
  let initialBoard = Array(19*19).fill(0)
  this.setState({board: initialBoard});
  this.setState({winnerFoundOrTie: false});

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

updateBoard = e => {
  // this.routeToBackend.tttGetOpponentMove(this.state.board).then(res => {
  //      this.setState({board: res.board});
  //      if (!this.state.winnerFoundOrTie){//If still moveable and no winner found
  //        this.setState({playerTurn: true})
  //        this.getWinner()
  //      }
  //   }).catch(res => {
  //     alert("Error in getting opponent move")
  //   })
}

onClick = async e => {
  // let move = e.target.id
  // if(!this.state.playerTurn){
  //   return
  // }
  //
  // if (this.state.board[move] === 0){
  //   await this.routeToBackend.tttSendMove(this.state.board, move).then(res => {
  //      this.setState({board: res.board});
  //
  //   }).catch(res => {
  //      alert("Error in sending move")
  //   })
  // //Set playerTurn to false
  // this.setState({playerTurn: false})
  //
  // //Check for winner
  // await this.getWinner()
  //
  // if (!this.state.winnerFoundOrTie){//If still moveable and no winner found
  //   await this.updateBoard()
  // }
  //
  // }
  // else{
  //   alert("Wrong move, please choose again.")
  // }

}

getWinner = async e => {
    await this.routeToBackend.tttGetWinner(this.state.board).then(res => {
      if(res.winner == "None"){
        alert("Result: TIE")
        this.setState({playerTurn: false})
        this.setState({winnerFoundOrTie: true})
      }
     else if (res.winner == 1){
       alert("You win! Congrats. But it's a tictactoe game, so you know what I mean :)")
       this.setState({playerTurn: false})
       this.setState({winnerFoundOrTie: true})

     }
     else if (res.winner == -1) {
       alert("You lose. Better luck next time!")
       this.setState({playerTurn: false})
       this.setState({winnerFoundOrTie: true})
     }
   }).catch(err => {
     alert("Error in getting winner")
   })
}

  render() {
    return(
      <div>
        <div className="body">

        <div className="gomoku">
        <p>This page is under construction</p>
        <h1>Gomoku with Alpha-Beta</h1
          <div className="gmkBoard">
            <div className="gmkGrid">
            {
            this.state.board.map((value, index) => {
              let stringFromCode = ""
              if(value == -1){
                return (<div onClick={this.onClick}  key={index} id={index} className="box-gmkBoard gmk-black" ><p>O</p></div>)
              }
              else if (value == 1) {
                return (<div onClick={this.onClick}  key={index} id={index} className="box-gmkBoard gmk-white" ><p>X</p></div>)
              }
              else {
                return (<div onClick={this.onClick}  key={index} id={index} className="box-gmkBoard" >{stringFromCode}</div>)
              }
              })
            }
            </div>
          </div>

          <div className="board-button">
          <button type="button" className="btn btn-success">Start</button>

          { this.state.PvP ? (
            <button type="button" className="btn btn-warning" onClick={this.AIvsAI}>Switch to AI vs AI</button>
          ) : (
            <button type="button" className="btn btn-warning" onClick={this.PvE}>Switch to Player vs AI</button>
          )}

          <div className="board-button-secondary">
          <button type="button" className="btn btn-secondary">Undo</button>
          <button type="button" className="btn btn-secondary" onClick={this.resetBoard}>Reset Board</button>

          </div>
          </div>



        </div>
        </div>
      </div>
    );
  }
}
