import React, { Component } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState(prev => ({
      show: !prev.show,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { show } = this.state;

    return (
      <li className={styles.ImageGalleryItem} onClick={this.showModal}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
        {show && (
          <Modal img={largeImageURL} tags={tags} onClick={this.showModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
