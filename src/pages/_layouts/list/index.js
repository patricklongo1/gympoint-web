import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import Header from '../../../components/Header';

export default function ListLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

ListLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
