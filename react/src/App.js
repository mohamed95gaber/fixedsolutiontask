import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryTable from './Components/countrytable';
class App extends Component {
  render() {
    return (
  <div>
        <CountryTable/>
      </div>
    );
  }
}

export default App;
