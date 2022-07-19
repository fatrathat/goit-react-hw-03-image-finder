import React, { Component } from 'react';
import { axiosPhotos } from 'AxiosAPI';
import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

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
    this.setState({ data: [], page: 1 });
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
            total: res.total,
            status: 'resolved',
          }));
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { data, status, total } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.submitHandler} />
        {status === 'idle' && (
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            Input search query
          </h2>
        )}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && Notiflix.Notify.failure('Nothing to watch!')}
        <ImageGallery data={data} showModal={this.onShowModal} />
        {status === 'resolved' && total !== data.length && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
