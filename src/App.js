import React from 'react';
import Home from './Home/Home';
import Bio from './Bio/Bio';
import Slither from './slither/Slither';
import Sudoku from './sudoku/Sudoku';
import Tetris from './tetris/Tetris';
import Nav from './Navigation/Nav';
import TicTacToe from './TicTacToe/TicTacToe';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home}/>
          <Route exact path="/tetris" exact component={Tetris}/>
          <Route exact path="/sudoku" exact component={Sudoku}/>
          <Route exact path="/slither" exact component={Slither}/>
          <Route exact path="/tictactoe" exact component={TicTacToe}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
