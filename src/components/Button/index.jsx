import React, { Component } from 'react';
import styles from './style.module.css';

export class Button extends Component {
  render() {
    return <button className={styles.Button}>Load More</button>;
  }
}

export default Button;
