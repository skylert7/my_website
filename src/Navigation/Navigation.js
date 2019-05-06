// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
export default class Navigation extends React.Component {
  constructor(props){
  super(props);
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
        <Dropdown/>
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
