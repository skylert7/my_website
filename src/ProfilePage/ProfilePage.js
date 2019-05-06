// Import ReactDOM and React
import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
export default class ProfilePage extends React.Component {
  constructor(props){
  super(props);
}

  render() {
    return(
      <div>
        <Navigation/>
        <h1>Home Sweet Home</h1>
      </div>
    );
  }
}
