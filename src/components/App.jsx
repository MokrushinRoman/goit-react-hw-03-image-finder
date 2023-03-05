import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  GlobalStyles,
  Layout,
  Searchbar,
  ImageGallry,
  Button,
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

        this.setState(prevState => ({
          images: [...prevState.images, ...incomeImages],
          totalImages,
        }));
      } catch (error) {
        errorToast('Something went wrong... Please try againe later!');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onFormSubmit = query => {
    if (query === this.state.query) {
      return;
    }

    this.setState({ query, images: [], page: 1, totalImages: null });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalImages } = this.state;

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
          </Layout>
        </main>
      </>
    );
  }
}
