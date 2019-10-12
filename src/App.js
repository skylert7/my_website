import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Bio from './Bio/Bio';
import Slither from './slither/Slither';
import Sudoku from './sudoku/Sudoku';
import Tetris from './tetris/Tetris';
import Nav from './Navigation/Nav'
var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <div>
        // <BrowserRouter>
        //   <div>
        //       <Route path = "/" exact component={Home}/>
        //       <Route path = '/bio' exact component={Bio}/>
        //       <Route path = '/snake' exact component = {Slither}/>
        //       <Route path = "/tetris" exact component={Tetris}/>
        //       <Route path = "/sudoku" exact component={Sudoku}/>
        //   </div>
        // </BrowserRouter>
      </div>
    )
  }
}

export default App;
