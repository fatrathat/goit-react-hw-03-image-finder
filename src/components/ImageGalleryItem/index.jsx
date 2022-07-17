import React, { Component } from 'react';
import styles from './style.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { largeImageURL, webformatURL } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
