import PropTypes from 'prop-types';
import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components';
const html = document.querySelector('html');

export class ImageGalleryItem extends Component {
  static propTypes = {
    imageData: PropTypes.shape({
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
    html.classList.add('modalOpen');
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
    html.classList.remove('modalOpen');
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.imageData;
    const { isModalOpen } = this.state;

    return (
      <>
        <Image src={webformatURL} alt={tags} onClick={this.handleOpenModal} />
        {isModalOpen && (
          <Modal closeModal={this.handleCloseModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
