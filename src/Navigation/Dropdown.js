// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
export default class Dropdowns extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    displayMenu: false,
  }

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
}

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('hover', this.hideDropdownMenu);
    });
  }

hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('hover', this.hideDropdownMenu);
    });
  }



  render() {
    return(
        <div className="ui dropdown item">
          Mini Games
              <i className="dropdown icon"></i>
            { this.state.displayMenu ? (
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
          ):
          (
            null
          )
          }
         </div>
       // </div>
    );
  }
}
