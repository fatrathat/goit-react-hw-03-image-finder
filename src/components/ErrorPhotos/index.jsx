import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorPhotos extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="Error">
        <h1>{message}</h1>
      </div>
    );
  }
}

ErrorPhotos.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPhotos;
