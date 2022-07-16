import React, { Component } from 'react';
import styles from './style.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
