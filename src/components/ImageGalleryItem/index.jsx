import React, { Component } from 'react';
import styles from './style.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
