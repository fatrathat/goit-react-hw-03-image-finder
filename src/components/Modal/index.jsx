import React, { Component } from 'react';
import styles from './style.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
