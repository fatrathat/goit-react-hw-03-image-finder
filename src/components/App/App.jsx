import React, { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { TailSpin } from 'react-loader-spinner';
import styles from './style.module.css';

export class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Searchbar />
        <ImageGallery />
        {/* <TailSpin height="50" width="50" color="grey" ariaLabel="loading" /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
      </div>
    );
  }
}
