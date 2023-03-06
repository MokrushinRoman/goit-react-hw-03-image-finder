import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  GlobalStyles,
  Layout,
  Searchbar,
  ImageGallry,
  Button,
  Loader,
} from 'components';
import { fetchImages } from 'services';
import { errorToast } from 'helpers';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
    images: [],
    page: 1,
    totalImages: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query: currQuery, page: currPage } = this.state;

    if (prevState.query !== currQuery || prevState.page !== currPage) {
      this.setState({ isLoading: true });

      try {
        const { hits: incomeImages, totalHits: totalImages } =
          await fetchImages(currQuery, currPage);
        if (totalImages < 1) {
          errorToast('Nothing was found... Try againe');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...incomeImages],
            totalImages,
          }));
        }
      } catch (error) {
        errorToast(
          'Something went wrong... Please try againe later and check error type in console!'
        );
        console.error(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onFormSubmit = query => {
    if (query === this.state.query) {
      return;
    }

    this.setState({
      query,
      images: [],
      page: 1,
      totalImages: null,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalImages, isLoading } = this.state;

    return (
      <>
        <Toaster />
        <GlobalStyles />
        <header className="header">
          <Searchbar onFormSubmit={this.onFormSubmit} />
        </header>
        <main>
          <Layout>
            <h1 className="visually-hidden">Image-finder</h1>
            <ImageGallry images={images} />
            {images.length < totalImages && (
              <Button loadMore={this.onLoadMore} />
            )}
            {isLoading && <Loader />}
          </Layout>
        </main>
      </>
    );
  }
}
