import React, { Component } from 'react';
import "./App.css";
import LoginComponent from './components/login/LoginComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginComponent />
      </div>
    )
  }
}
