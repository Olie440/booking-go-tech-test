import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import './hotel-search.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
