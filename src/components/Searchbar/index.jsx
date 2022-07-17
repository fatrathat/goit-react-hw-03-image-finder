import React, { Component } from 'react';
import styles from './style.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onChangeHandler = e => {
    const textInput = e.target.value;
    this.setState({
      value: textInput,
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onSubmitHandler}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="search"
            onChange={this.onChangeHandler}
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
