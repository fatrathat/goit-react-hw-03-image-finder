import React, { Component } from 'react';

import { TailSpin } from 'react-loader-spinner';
import { axiosPhotos } from 'AxiosAPI';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './style.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    data: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchInput !== this.props.searchInput) {
      this.setState({ status: 'pending' });
      axiosPhotos(this.props.searchInput)
        .then(res => {
          const photos = res.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );
          this.setState({ data: photos, status: 'resolved' });
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  render() {
    const { data, error, status } = this.state;

    if (status === 'idle') {
      return <div>Input search query</div>;
    }

    if (status === 'pending') {
      return <TailSpin />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className={styles.ImageGallery}>
          {data.map(item => (
            <ImageGalleryItem
              key={item.id}
              webformatURL={item.webformatURL}
              largeImageURL={item.largeImageURL}
              tags={item.tags}
            />
          ))}
        </ul>
      );
    }
  }
}

export default ImageGallery;
