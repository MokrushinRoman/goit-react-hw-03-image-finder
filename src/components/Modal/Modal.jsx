import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    const { closeModal } = this.props;

    if (e.code !== 'Escape') {
      return;
    }
    closeModal();
  };

  onOverlayClick = e => {
    const { closeModal } = this.props;

    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>{children}</ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
