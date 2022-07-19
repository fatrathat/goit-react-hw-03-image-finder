import React, { Component } from 'react';

import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './style.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={styles.Loader}>
        <TailSpin />
      </div>
    );
  }
}

export default Loader;
