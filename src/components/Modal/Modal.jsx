import React, { Component } from 'react';
import styles from './style.module.css';

import PropTypes from 'prop-types';

class Modal extends Component {
  onOverlayClick = e => {
    if (e.currentTarget !== e.target) {
      this.props.onClick();
    }
  };

  onEscapeDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeDown);
  }

  render() {
    const { img, tags } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.onOverlayClick}>
        <div className={styles.Modal}>
          <img src={img} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
