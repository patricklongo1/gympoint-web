/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import FormLayout from '../pages/_layouts/form';
import ListLayout from '../pages/_layouts/list';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isList,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/students" />;
  }

  let Layout = null;
  if (signed && isList) {
    Layout = ListLayout;
  }
  if (signed && !isList) {
    Layout = FormLayout;
  }
  if (!signed) {
    Layout = AuthLayout;
  }

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

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isList: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isList: false,
};
