import React, { Component } from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  clickHandler = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button onClick={this.clickHandler} className={styles.Button}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
