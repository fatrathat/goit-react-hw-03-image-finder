import React, { Component } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import Modal from 'components/Modal';
// import Button from 'components/Button';

import styles from './style.module.css';

export class App extends Component {
  state = {
    page: 1,
    searchInput: '',
  };

  submitHandler = value => {
    this.setState({
      searchInput: value,
    });
  };

  render() {
    const { searchInput, page } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.submitHandler} />
        <ImageGallery searchInput={searchInput} page={page} />
        {/* <Modal /> */}
        {/* <Button /> */}
      </div>
    );
  }
}
