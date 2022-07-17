import React, { Component } from 'react';
import { axiosPhotos } from 'AxiosAPI';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import Modal from 'components/Modal';
// import Button from 'components/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import { TailSpin } from 'react-loader-spinner';
import styles from './style.module.css';

export class App extends Component {
  state = {
    data: [],
    page: 1,
    searchInput: '',
  };

  renderListItems() {
    const { searchInput, page } = this.state;
    axiosPhotos(searchInput, page).then(res => {
      const photos = res.hits.map(({ id, webformatURL, largeImageURL }) => {
        return { id, webformatURL, largeImageURL };
      });
      this.setState(prev => ({
        data: [...photos],
      }));
    });
  }

  onSubmit = value => {
    this.setState({
      searchInput: value,
    });
  };

  componentDidUpdate(prevP, prevS) {
    if (prevS.valueInput !== this.searchInput || prevS.page !== this.page) {
      this.renderListItems();
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={data} />
        {/* <TailSpin height="50" width="50" color="grey" ariaLabel="loading" /> */}
        {/* <Modal /> */}
        {/* <Button /> */}
      </div>
    );
  }
}
