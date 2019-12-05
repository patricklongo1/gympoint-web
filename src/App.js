import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Routes />
    </Router>
  );
}
export default App;
