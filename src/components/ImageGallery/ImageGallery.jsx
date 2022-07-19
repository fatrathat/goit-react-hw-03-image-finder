import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <ul className={styles.ImageGallery}>
          {data.map(item => (
            <ImageGalleryItem
              key={item.id}
              webformatURL={item.webformatURL}
              largeImageURL={item.largeImageURL}
              tags={item.tags}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
};

export default ImageGallery;
