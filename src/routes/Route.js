/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

import AuthLayout from '../pages/_layouts/auth';
import FormLayout from '../pages/_layouts/form';
import ListLayout from '../pages/_layouts/list';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isList,
  isForm,
  ...rest
}) {
  let Layout = null;

  function renderWithLayout() {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

  function renderWithoutLayout() {
    return (
      <Route
        {...rest}
        render={props => (
          <>
            <Header />
            <Component {...props} />
          </>
        )}
      />
    );
  }

  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/students" />;
  }

  if (signed && isList) {
    Layout = ListLayout;
    return renderWithLayout();
  }
  if (signed && isForm) {
    Layout = FormLayout;
    return renderWithLayout();
  }
  if (!signed) {
    Layout = AuthLayout;
    return renderWithLayout();
  }
  if (signed && !isList && !isForm) {
    return renderWithoutLayout();
  }
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isList: PropTypes.bool,
  isForm: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isList: false,
  isForm: false,
};
