import React, { Component } from 'react';
import './App.css';
import { Main, NavBar } from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
