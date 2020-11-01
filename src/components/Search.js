import React from 'react';
import { Link } from '@reach/router';
import styles from '../App.module.css';

export default class Search extends React.Component {
  state = {
    input: '',
  };

  render() {
    return (
      <div >
        <form className={styles.search}>
          <label htmlFor='search'>
            <input id='search' type='text' value={this.state.input} placeholder='search your city...' onChange={(event) => { this.handleChange(event.target.value) }} ></input>
            <Link to={this.state.input} className={styles.searchButton}>submit</Link>
          </label>
        </form>
      </div>
    );
  };
  handleChange = (input) => {
    this.setState({ input })
  };
};
