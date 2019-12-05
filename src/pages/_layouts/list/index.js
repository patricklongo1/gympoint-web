import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function ListLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

ListLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
