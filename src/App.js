import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WIN_20190426_14_21_40_Pro from './WIN_20190426_14_21_40_Pro.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={WIN_20190426_14_21_40_Pro} className="foto decor" alt="logo" />
          <p>
            Contrôleur de Gestion 
            ste Privée 
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
