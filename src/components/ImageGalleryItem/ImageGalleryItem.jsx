import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
    document.body.classList.add('modalOpen');
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
    document.body.classList.remove('modalOpen');
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
