import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import store from './store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxToastr
      timeOut={4000}
      newestOnTop={true}
      preventDuplicates
      position="top-right"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
