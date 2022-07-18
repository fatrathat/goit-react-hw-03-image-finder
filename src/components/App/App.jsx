import React, { Component } from 'react';
import { axiosPhotos } from 'AxiosAPI';
import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
// import ErrorPhotos from 'components/ErrorPhotos';

import styles from './style.module.css';

export class App extends Component {
  state = {
    searchInput: '',
    data: [],
    page: 1,
    total: '',
    status: 'idle',
  };

  submitHandler = value => {
    this.setState({
      searchInput: value,
    });
  };

  componentDidUpdate(prevP, prevS) {
    const { searchInput, page } = this.state;

    if (prevS.searchInput !== searchInput || prevS.page !== page) {
      this.setState({ status: 'pending' });

      axiosPhotos(searchInput, page)
        .then(res => {
          if (res.hits.length === 0) {
            return this.setState({ status: 'rejected' });
          }
          const photos = res.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return { id, webformatURL, largeImageURL, tags };
            }
          );

          this.setState(prev => ({
            data: [...prev.data, ...photos],
            status: 'resolved',
          }));
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }

    if (prevS.searchInput !== searchInput) {
      this.setState({ data: [], page: 1 });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { data, status } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.submitHandler} />
        {status === 'idle' && (
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            Input search query
          </h2>
        )}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && Notiflix.Notify.failure('Not query!')}
        <ImageGallery data={data} />
        {status === 'resolved' && <Button onClick={this.loadMore} />}

        {/* <Modal /> */}
      </div>
    );
  }
}
