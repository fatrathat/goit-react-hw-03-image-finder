import React, { Component } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  showModal = () => {
    this.props.show();
  };

  render() {
    const { webformatURL, largeImageURL, tags, modal } = this.props;
    return (
      <li className={styles.ImageGalleryItem} onClick={this.showModal}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
        {modal && (
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
