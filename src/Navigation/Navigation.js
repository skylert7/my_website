// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
export default class Navigation extends React.Component {
  constructor(props){
  super(props);
}

  render() {
    return(
      <Nav />
    );
  }
}
