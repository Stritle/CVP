import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Menu from "./components/Menu.js";
import Header from "./components/Header.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
