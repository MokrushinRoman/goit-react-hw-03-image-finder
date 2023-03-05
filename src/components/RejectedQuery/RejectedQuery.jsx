import PropTypes from 'prop-types';
import { ErrorMessage } from './RejectedQuery.styled';

import errorImage from 'images/rejected-img.png';

export const RejectedQuery = ({ message }) => {
  return (
    <>
      <img src={errorImage} alt="shragged man" width="500" />
      <ErrorMessage>{message}</ErrorMessage>
    </>
  );
};

RejectedQuery.propTypes = {
  message: PropTypes.string.isRequired,
};
