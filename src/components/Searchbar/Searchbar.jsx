import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineSearch } from 'react-icons/ai';
import { ErrorMessage, Field, Form } from './Searchbar.styled';
import { errorToast } from 'helpers';

const SearchSchema = Yup.object().shape({
  query: Yup.string().min(1, ' ').required(' '),
});

export const Searchbar = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={SearchSchema}
      onSubmit={({ query }, { resetForm }) => {
        const normalizedQuery = query.toLowerCase().trim();

        if (normalizedQuery) {
          onFormSubmit(normalizedQuery);
          resetForm();
        } else {
          errorToast('Enter some query please');
        }
      }}
    >
      <Form>
        <ErrorMessage name="query" component="div" />
        <Field
          id="search"
          name="query"
          autoComplete="off"
          placeholder="Enter your query here"
        />
        <button className="searchButton" type="submit" area-label="Search">
          <AiOutlineSearch />
        </button>
      </Form>
    </Formik>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
