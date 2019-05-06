// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';
export default class Navigation extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    searchQuery : ""
  }

  this.onChange = this.onChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

  onSubmit(e){
    e.preventDefault()
    this.props.history.push(`/search/${this.state.searchQuery}`)
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return(
      <div className = "ui inverted menu">
        <div className = "header item">
          <Link to = "/">
              Linh Tran
          </Link>
        </div>
        <div className = "item">
          <Link to = "/">
              Past Semester
          </Link>
        </div>
        <div className = "item">
          <Link to = "/">
            Past Courses
          </Link>
        </div>
        <div>
          <div className = "ui dropdown item">
            Mini Games
              <div className = "menu">
                <div className = "item">
                  <Link to = "/snake">
                      Slither
                  </Link>
                </div>
                <div className = "item">
                  <Link to = "/sudoku">
                      Sudoku
                  </Link>
                </div>
                <div className = "item">
                  <Link to = "/tetris">
                      Tetris
                  </Link>
                </div>
              </div>
          </div>
        </div>
        <div onSubmit = {this.onSubmit} className = "right menu">
          <div className="item">
            <div className = "ui transparent inverted icon input">
              <i className = "search icon">
              </i>
              <input type="text"
              name="searchQuery"
              value = {this.state.searchQuery}
              onChange={this.onChange}
              placeholder = "Search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
