import React from 'react';
import { Router } from "@reach/router";
import City from './components/City';
import Search from './components/Search';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Weather</h1>
        <Router>
          <Search path='/'></Search>
          <City path='/:city'></City>
        </Router>
      </div>
    );
  };
};

export default App;
