import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Login from './Login';
import EventList from './EventsList'
import RegisterUser from './RegisterUser';
//@TODO: import RegisterEvent from './RegisterEvent';

export default class App extends Component {
  
  componentDidMount() {
    //@TODO: Fazer chamada para api de login aqui
  }
  
  render() {

    return (

      <EventList/>
      
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
