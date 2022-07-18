import React, { Component } from 'react';
import styles from './style.module.css';

import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  changeHandler = e => {
    const textInput = e.currentTarget.value;
    this.setState({
      searchValue: textInput,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { searchValue } = this.state;

    if (searchValue.trim() === '') {
      alert('Введите запрос!');
      return;
    }

    this.props.onSubmit(searchValue);
  };

  render() {
    const { value } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.changeHandler}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
