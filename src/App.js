// Import ReactDOM and React
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ProfilePage from './ProfilePage/ProfilePage'
// var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
              <Route path = "/" exact component={ProfilePage}/>
              <Route path = '/snake' exact component = {}/>
              <Route path = "/tetris" exact component={}/>
              <Route path = "/sudoku" exact component={}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
