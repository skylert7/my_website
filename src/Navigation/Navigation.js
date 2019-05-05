// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
export default class ProfilePage extends React.Component {
  constructor(props){
  super(props);
}
  onClick(){
  }

  render() {
    return(
      <div class = "ui inverted menu">
        <div class = "header item">
          <Link to = "/">
              Linh Tran
          </Link>
        </div>
        <div class = "item">
          Past Semester
        </div>
        <div class = "item" Link to = '/'>
          Past Courses
        </div>
        <div onClick = {this.onClick} class = "ui dropdown item" tabindex = "0">
          Mini Games
          <i class="dropdown icon"></i>
            <div class = "menu" tabindex = "-1">
              <div class = "item">
                <Link to = "/snake">
                    Slither
                </Link>
              </div>
              <div class = "item">
                <Link to = "/sudoku">
                    Sudoku
                </Link>
              </div>
              <div class = "item">
                <Link to = "/tetris">
                    Tetris
                </Link>
              </div>
            </div>
        </div>
        <div class = "right menu">
          <div class="item">
            <div class = "ui transparent inverted icon input">
              <i class = "search icon">
              </i>
              <input type="text" placeholder = "Search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
