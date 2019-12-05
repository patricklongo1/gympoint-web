import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import Header from '../../../components/Header';

export default function FormLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
