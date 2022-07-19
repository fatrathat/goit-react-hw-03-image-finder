import React, { Component } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  onModalHandler = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <li className={styles.ImageGalleryItem} onClick={this.onModalHandler}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
        {showModal && (
          <Modal
            img={largeImageURL}
            tags={tags}
            onClick={this.onModalHandler}
          />
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
