// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
export default class Home extends React.Component {
  constructor(props){
  super(props);
}

  render() {
    return(
      <div>
        <Navigation/>
        <h1>Home Page</h1>
      </div>
    );
  }
}
