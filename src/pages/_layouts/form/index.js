import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function FormLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
