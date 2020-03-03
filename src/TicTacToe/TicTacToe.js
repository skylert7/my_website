// Import ReactDOM and React
import React from 'react';
import './TicTacToe.css';
export default class TicTacToe extends React.Component {
  constructor(props){
  super(props);

  this.state = {

  }
  this.toggle = this.toggle.bind(this);
}

  toggle = e => {
    console.log(e.target.value)
    console.log(e.target.id)
    console.log(e.target)

  }

  render() {
    return(
      <div>
        <div className="body">
        <h1>This is TicTacToe Page</h1>
        <div className="tictactoe">
          <span className="whiteChar">X</span>
          <span className="whiteChar">O</span>
        </div>
          <h3 className="tttBoardTitle">Board placeholder</h3>
          <table className="tttBoard">
          <tbody>
          <tr>
            <td
            id="1"
            onClick={this.toggle}
            value="20"
            >O</td>
            <td>2</td>
            <td>3</td>

          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>

          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          </tbody>
          </table>

          <div className="board-button">
          <button type="button" className="btn btn-success">Start</button>
          <button type="button" className="btn btn-warning">Reset Board</button>
          </div>


        </div>
      </div>
    );
  }
}
