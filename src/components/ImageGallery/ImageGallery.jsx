import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  onShow = e => {
    this.props.showModal();
  };

  render() {
    const { data, modal } = this.props;
    return (
      <div>
        <ul className={styles.ImageGallery}>
          {data.map(item => (
            <ImageGalleryItem
              modal={modal}
              show={this.onShow}
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
