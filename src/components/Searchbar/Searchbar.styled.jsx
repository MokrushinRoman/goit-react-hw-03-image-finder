import styled from '@emotion/styled';
import {
  Field as FormikField,
  ErrorMessage as FormikError,
  Form as FormikForm,
} from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  .searchButton {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;

export const Field = styled(FormikField)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0 10px;

  &::placeholder {
    transition: all 250ms;
  }
`;

export const ErrorMessage = styled(FormikError)`
  position: absolute;
  pointer-events: none;
  top: 15px;
  left: 10px;
  display: inline-block;
  font: inherit;
  color: #e40c0c;

  & ~ input::placeholder {
    color: #e40c0c;
  }
`;
