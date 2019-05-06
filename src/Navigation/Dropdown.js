// Import ReactDOM and React

import React from 'react';
import {Link} from 'react-router-dom';
export default class Dropdown extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    dropdownOpen: false,
  };

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
};

  toggle() {
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  }));
}

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

render() {
   return (
       <div>
        <div className = "ui dropdown item" tabindex = "0"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen ={this.state.dropdownOpen}
        toggle={this.toggle}>
         Mini Games
         <i className ="dropdown icon"></i>
         </div>
         { this.state.dropdownOpen ? (
           <div className = "menu transition" tabindex = "-1">
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

   );
 }
}
