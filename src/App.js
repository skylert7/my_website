// Import ReactDOM and React
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage'
import Slither from './slither/Slither';
import Sudoku from './sudoku/Sudoku';
import Tetris from './tetris/Tetris';
import Dropdown from './Navigation/Dropdown'
// var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
              <Route path = "/" exact component={ProfilePage}/>
              <Route path = '/snake' exact component = {Slither}/>
              <Route path = "/tetris" exact component={Tetris}/>
              <Route path = "/sudoku" exact component={Sudoku}/>
              <Route path = "/dropdown" exact component={Dropdown}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
