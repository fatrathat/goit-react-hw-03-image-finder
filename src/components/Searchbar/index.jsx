import React, { Component } from 'react';
import styles from './style.module.css';

class Searchbar extends Component {
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
