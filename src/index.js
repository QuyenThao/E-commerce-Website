import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <SnackbarProvider maxSnack={2}>
        <App />
      </SnackbarProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
