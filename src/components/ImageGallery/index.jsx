import React, { Component } from 'react';
import styles from './style.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { data } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {data.map(item => (
          <ImageGalleryItem
            key={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        ))}
        {/* <ImageGalleryItem data={data} /> */}
      </ul>
    );
  }
}

export default ImageGallery;
